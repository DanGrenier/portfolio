import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:456387644393:deployPortfolioTopic')
    #Initialize location object in the event we call this function manually
    location = {
        "bucketName": 'portfoliobuild.danielgrenier.info',
        "objectKey": 'portfoliobuild.zip'
    }
    try:
        #See if we can get the CodePipeline Job
        job = event.get("CodePipeline.job")
        if job:
            #If we do, then find the location and name of the S3 bucket and build
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]
        print "Building portfolio from "+str(location)            
        s3 = boto3.resource('s3')
        
        #Initialize the portfolio bucket and build bucket 
        portfolio_bucket = s3.Bucket('danielgrenier.info')
        build_bucket = s3.Bucket(location["bucketName"])
        
        #Download the portfolio build
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"],portfolio_zip)
        
        #Exctract the portfolio build files into the live website bucket and change permissions
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj,nm,ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        print "Job Done!"
        topic.publish(Subject="Portfolio Depoloyed",Message="Portfolio deployed successfully!")
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
    except:
        topic.publish(Subject="Portfolio Deploy Failed!", Message="The Portfolio was not deployed successfully!")
        raise
