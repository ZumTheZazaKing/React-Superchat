import React, { useState,useRef } from 'react';
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

  const sendMessage = async(e) => {

    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text:formValue,
      photoUrl:photoURL,
      uid:uid,
      createdAt:firebase.firestore.FieldValue.serverTimestamp()
    })

    setFormValue("");

    dummy.current.scrollIntoView({behavior:'smooth'});

  }

  return (<div>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
      <div ref={dummy}></div>
    </main>

    <form onSubmit={sendMessage}>
      <input type="text" value={formValue} onChange={e => setFormValue(e.target.value)}/>
      <input type="submit" value="Send"/>
    </form>
    <SignOut/>
  </div>)
}

function ChatMessage(props){

  const { text, uid, photoUrl } = props.message; 

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return <div className={messageClass}>
    <img alt="pp" src={photoUrl} width="50" height="50"/>
    <p>{text}</p>
  </div>
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
