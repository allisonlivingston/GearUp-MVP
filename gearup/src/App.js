import React, { Component } from 'react';
import './App.css';
import HeaderTop from './components/HeaderTop'

import firebase from 'firebase'
require('firebase/auth')

const config = {
    apiKey: "AIzaSyBpiStXZPZ_WaWefQ_cIw27Ipk7oj2e_OI",
    authDomain: "denver-gear-up.firebaseapp.com",
    databaseURL: "https://denver-gear-up.firebaseio.com",
    projectId: "denver-gear-up",
    storageBucket: "denver-gear-up.appspot.com",
    messagingSenderId: "982226317434"
  }
  firebase.initializeApp(config)

const gearUpURL = 'https://gear-up-backend.herokuapp.com/gear'

class App extends Component {

  signUp = (event) => {
      const signupPassword = document.getElementById('signup-password')
      const signupEmail = document.getElementById('signup-email')
      const pass = signupPassword.value
      const email = signupEmail.value
      const auth = firebase.auth()
      const promise = auth.createUserWithEmailAndPassword(email, pass)
      promise.catch(e => console.log(e.message))
      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
          this.setState ({ loggedInUser: firebaseUser.email })
          console.log(firebaseUser.email)
        } else {
          console.log('not logged in')
        }})
    }

  render() {
    return (
      <div className="App">
        <HeaderTop signUp={this.signUp}/>
      </div>
    );
  }
}

export default App;
