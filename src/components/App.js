import React, { useEffect, useState } from 'react'

import TopBar from './TopBar'

const App = ({ firebase }) => {
  // useState returns a variable and a function
  // https://reactjs.org/docs/hooks-state.html
  const [user, setUser] = useState({})

  const login = () => {
    firebase.signIn()
  }

  const logout = () => {
    firebase.signOut()
  }

  useEffect(() => {
    firebase.setAuthStateChangedHandler(setUser)
  }, [firebase])

  return (
    <div className='App'>
      <TopBar login={login} logout={logout} user={user} />
    </div>
  )
}

export default App
