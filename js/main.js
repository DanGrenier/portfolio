import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
{
  'title': "Proposals",
  'href': "https://patate.com",
  'github' : "https://github.com/DanGrenier/ServiceProposal", 
  'desc': "This is a service proposal tool. After going through a quick Ruby on Rails tutorial in which the final project was a service proposal tool, I decided to create my own version of it. The Proposal tool is currently adapted to my current field of work which is finance and accounting but it can be customized to use for any business proposal.",
  'image': {
  	'desc': "Screenshot of proposal tool",
  	'src': "images/proposals.png",
  	'comment': ""
  }	
},
{
  'title': "S.O.S GolfTime",
  'href': "http://sosgolftime.s3-website-us-east-1.amazonaws.com/",
  'github': "https://github.com/DanGrenier/SosGolfTime",
  'desc': "Application created in collaboration with one of my friend who is a professional golfer. This application makes it easy for golfers to be aware of their playing time. Based on the tee time, actual time and last hole played, the application will tell you if you are on time, late or ahead, based on the golf club allocated time for each hole.",
  'image': {
  	'desc': "Screenshot of SosGolfTime",
  	'src': "images/sosgolftime.png",
  	'comment': ""
  }	
},
{
  'title': "This Portfolio",
  'href': "https://danielgrenier.info/",
  'github' : 'https://github.com/DanGrenier/portfolio' ,
  'desc': "This Portfolio. Built with html, CSS and ReactJS. Hosted, maintained and deployed using AWS backend developing tools",
  'image': {
  	'desc': "Scrrenshot of Portfolio",
  	'src': "images/portfolio.png",
  	'comment': ""
  }	
}


]
ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));


