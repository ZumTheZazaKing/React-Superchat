import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDO3KAr7Vw-EyZhlpv2nCpliv2cpotDdkY",
  authDomain: "superchat-6b42a.firebaseapp.com",
  projectId: "superchat-6b42a",
  storageBucket: "superchat-6b42a.appspot.com",
  messagingSenderId: "586901058821",
  appId: "1:586901058821:web:0b122313087c36888ef36c",
  measurementId: "G-C5BEXQYX3F"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App(){
  return (<div>
    <h1>Hello World</h1>
  </div>)
}


const el = <App/>

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
