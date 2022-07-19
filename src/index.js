//#17 video->React Js Mini-Project => Create a Simple Greeting Website using ReactJS

//1. Create a react app from scratch
//2. Show a heading that says Hello sir, Good Morning,
//   if time is between 1AM to 11 AM
//3. Good Afternoon, if 12PM to 7PM
//4. Good Night, if 7PM till Midnight
//5. Apply CSS in it, then dynamically change the color
//   Of Greeting part only using Inline CSS style.
//   Ex.Gree when its Morning time ,Orange when its Noon/evening time ,
//   Black when its Nigh time 


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';

ReactDOM.render(
  <App/>,
  
  document.getElementById('root')
);