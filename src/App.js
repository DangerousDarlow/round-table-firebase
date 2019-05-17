import React from 'react';

import FirebaseContext from './components/FirebaseContext';
import TopBar from './components/TopBar'

function App() {
    return (
        <FirebaseContext.Consumer>
            {firebase => (
                <div className="App">
                    <TopBar firebase={firebase}></TopBar>
                </div>
            )}
        </FirebaseContext.Consumer>
    );
}

export default App;
