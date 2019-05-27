import React, { useEffect, useState } from 'react';

import TopBar from './components/TopBar'

const App = ({ firebase }) => {
    const [user, setUser] = useState({})

    const login = () => {
        firebase.signIn();
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
        <div className="App">
            <TopBar login={login} credentials={user}></TopBar>
        </div>
    );
}

export default App;
