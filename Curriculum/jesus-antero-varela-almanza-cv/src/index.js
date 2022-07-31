import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Get the button for go to top
var buttonToTop =  null;
loadButtonToTop();

//Set a function when the user made a scroll
window.onscroll = function () {
  loadButtonToTop();
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonToTop.style.display = 'block';
  }
  else {
    buttonToTop.style.display = 'none';
  }
}

//Function for load the button for go to top
function loadButtonToTop() {
  if (buttonToTop === null) {
    buttonToTop = document.getElementById('btnToTop');
  }
}

//Function for go to the top of the screen
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
buttonToTop.addEventListener('click', function () { goToTop() });