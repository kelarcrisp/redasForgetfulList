import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCAjbu5r-Qj6i_98dRpKNwCtxfQoDZmE3s",
  authDomain: "redas-forgetful-list.firebaseapp.com",
  databaseURL: "https://redas-forgetful-list.firebaseio.com",
  projectId: "redas-forgetful-list",
  storageBucket: "redas-forgetful-list.appspot.com",
  messagingSenderId: "934405663567",
  appId: "1:934405663567:web:2156d5977cfe79c2ceb33a",
  measurementId: "G-RFHJSBEHXL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
