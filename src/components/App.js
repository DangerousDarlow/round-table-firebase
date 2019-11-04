import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as firebase from 'firebase/app'
import 'firebase/auth'

import useLocalStorage from '../hooks/UseLocalStorage'
import TopBar from './TopBar'
import Waiting from './Waiting'
import Landing from './Landing'
import Home from './Home'
import Create from './Create'

import { withStyles } from '@material-ui/core/styles'

const firebaseConfig = {
  apiKey: 'AIzaSyAsjxkFqR1S2Ki_fuCY6BFklE9kQkkOIQ8',
  authDomain: 'round-table-game.firebaseapp.com',
  databaseURL: 'https://round-table-game.firebaseio.com',
  projectId: 'round-table-game',
  storageBucket: 'round-table-game.appspot.com',
  messagingSenderId: '270371884978',
  appId: '1:270371884978:web:91a4731bcf1515e6'
}

const styles = {
  page: {
    margin: '10px'
  }
}

const App = ({ classes }) => {
  // useState returns a variable and a function
  // https://reactjs.org/docs/hooks-state.html
  const [user, setUser] = useState()

  const [waiting, setWaiting] = useLocalStorage('round-table-waiting', false)

  const login = setWaiting => {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
    setWaiting(true)
  }

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
        <div className={classes.page}>
          {waiting ? <Waiting />
            : <Router>
              <Route exact path='/' component={Landing} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/create' component={Create} />
            </Router>}
        </div>
      </div>
    </Router>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
