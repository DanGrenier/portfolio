import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
{
  'title': "Proposals",
  'image': {
  	'desc': "Screenshot of proposal tool",
  	'src': "images/example1.png",
  	'comment': ""
  }	
},
{
  'title': "Work Example2",
  'image': {
  	'desc': "Example screenshot2",
  	'src': "images/example2.png",
  	'comment': ""
  }	
},
{
  'title': "work Example3",
  'image': {
  	'desc': "Example screenshot3",
  	'src': "images/example3.png",
  	'comment': ""
  }	
}


]
ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));


