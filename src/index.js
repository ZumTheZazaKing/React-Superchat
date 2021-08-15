import React, { useState,useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, {idField:'id'})

  const [formValue, setFormValue] = useState("");

  const dummy = useRef();

  useEffect(() => {
    dummy.current.scrollIntoView({behavior:'smooth'});
  })

  const sendMessage = async(e) => {

    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await messagesRef.add({
      text:formValue,
      photoUrl:photoURL,
      uid:uid,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      name:displayName
    })

    setFormValue("");

    dummy.current.scrollIntoView({behavior:'smooth'});

  }

  return (<div>
    <header>
      <p>ZumSuperChat</p>
      <SignOut/>
    </header>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
      <div ref={dummy}></div>
    </main>

    <form onSubmit={sendMessage}>
      <input type="text" value={formValue} onChange={e => setFormValue(e.target.value)} required/>
      <input type="submit" value="Send"/>
    </form>
  </div>)
}

function ChatMessage(props){

  const { text, uid, photoUrl, name } = props.message; 

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return <div className={messageClass}>
    <img alt="pp" src={photoUrl} width="40" height="40"/>
    <p><span>{uid === auth.currentUser.uid ? "You" : name}</span><br/>{text}</p>
  </div>
}

function SignIn(){

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (<div id="SignIn">
    <p id="appTitle">ZumSuperChat</p>
    <p>Sign in to talk with people across the world!</p>
    <br/>
    <button onClick={signInWithGoogle}>Sign in with Google</button>
    <br/>
    <p id="footer">ZUMTHEZAZAKING &copy;2021</p>
  </div>)
}

function SignOut(){
  return auth.currentUser && (
  <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function App(){

  const [user] = useAuthState(auth);

  return (<div id="App">
    {user? <Main/> : <SignIn/>}
  </div>)
}


const el = <App/>

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
