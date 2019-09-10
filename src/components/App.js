import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import useLocalStorage from '../hooks/UseLocalStorage';
import TopBar from './TopBar';
import Waiting from './Waiting';

const firebaseConfig = {
  apiKey: 'AIzaSyAsjxkFqR1S2Ki_fuCY6BFklE9kQkkOIQ8',
  authDomain: 'round-table-game.firebaseapp.com',
  databaseURL: 'https://round-table-game.firebaseio.com',
  projectId: 'round-table-game',
  storageBucket: 'round-table-game.appspot.com',
  messagingSenderId: '270371884978',
  appId: '1:270371884978:web:91a4731bcf1515e6'
}

const App = () => {
  // useState returns a variable and a function
  // https://reactjs.org/docs/hooks-state.html
  const [user, setUser] = useState()

  const [waiting, setWaiting] = useLocalStorage('round-table-waiting', false)

  const login = setWaiting => {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
    setWaiting(true)
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      // Prevent firebase being initialised multiple times
      firebase.initializeApp(firebaseConfig)

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }

        setWaiting(false)
      })
    }
  })

  return (
    <Router>
      <div className='App'>
        <TopBar login={() => login(setWaiting)} logout={logout} user={user} />
        {waiting ? <Waiting /> : <Router />}
      </div>
    </Router>
  )
};

export default App
