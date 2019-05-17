import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase from './components/Firebase';
import FireBaseContext from './components/FirebaseContext';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
    <CssBaseline>
        <FireBaseContext.Provider value={new Firebase()}>
            <App/>
        </FireBaseContext.Provider>
    </CssBaseline>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
