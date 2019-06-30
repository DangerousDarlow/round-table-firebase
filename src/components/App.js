import React, { useEffect, useState } from 'react'

import TopBar from './TopBar'

const App = ({ firebase }) => {
  // useState returns a variable and a function
  // https://reactjs.org/docs/hooks-state.html
  const [user, setUser] = useState({})

  const login = () => {
    firebase.signIn()
  }

  useEffect(() => {
    // Why does this execute twice before authentication is attempted?

    // Yuk! This isn't the right thing to do.
    if (Object.keys(user).length > 0) {
      return
    }

    firebase.handleSignInResult()
      .then(() => {
        setUser(firebase.userCredentials)
      })
  })

  return (
    <div className='App'>
      <TopBar login={login} credentials={user} />
    </div>
  )
}

export default App
