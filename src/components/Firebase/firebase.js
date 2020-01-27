
import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import firebase from 'firebase';

//<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

const firebaseConfig = {
    apiKey: "AIzaSyD4IITSoY4eagjrnKTielPK7G4CQAI47wY",
    authDomain: "liquids-1605d.firebaseapp.com",
    databaseURL: "https://liquids-1605d.firebaseio.com",
    projectId: "liquids-1605d",
    storageBucket: "liquids-1605d.appspot.com",
    messagingSenderId: "481037723206",
    appId: "1:481037723206:web:df86c330e2172d53fe0c47"
  };

  
  const FirebasePage = () => (
    <div>
      <h1>PasswordForget</h1></div>);


class Firebase {
      constructor(){

        app.initializeApp(firebaseConfig);
  // Initialize Firebase
 

 const database = firebase.database();

  var ref = database.ref('werte samstag');
  ref.on('value', gotData, errData);
  
  function gotData(data){
  
    var werte = data.val();
    var keys = Object.keys(werte);
    console.log(werte);
  }
  
  function errData(err){
  
    console.log('Error');
    console.log(err);
  }

  this.auth = app.auth();
  this.db = app.database();
      }

      doCreateUserWithEmailAndPassword =(email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

        // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');}

  
    export default Firebase;