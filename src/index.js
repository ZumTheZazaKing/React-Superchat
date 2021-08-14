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

function Main(){
  return (<div>
    <h1>This is main</h1>
    <SignOut/>
  </div>)
}

function SignIn(){

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (<div>
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  </div>)
}

function SignOut(){
  return auth.currentUser && (
  <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function App(){

  const [user] = useAuthState(auth);

  return (<div>
    {user? <Main/> : <SignIn/>}
  </div>)
}


const el = <App/>

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
