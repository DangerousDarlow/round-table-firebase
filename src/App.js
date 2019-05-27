import React, {useEffect} from 'react';

import TopBar from './components/TopBar'

const App = ({ firebase }) => {
    useEffect(() => {
        firebase.handleSignInResult();
    })
    
    return (
        <div className="App">
            <TopBar firebase={firebase}></TopBar>
        </div>
    );
}

export default App;
