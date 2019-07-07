import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as firebase from 'firebase/app'
import 'firebase/auth'

import TopBar from './TopBar'
import Loading from './Loading'

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
  const [user, setUser] = useState({})

  const login = () => {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // Prevent firebase being initialised multiple times
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
      })
    }
  })

  return (
    <Router>
      <div className='App'>
        <TopBar login={login} logout={logout} user={user} />
        <Route path='/loading' component={Loading} />
      </div>
    </Router>
  )
}

export default App
