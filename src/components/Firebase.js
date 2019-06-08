import * as firebase from 'firebase/app'
import 'firebase/auth'

import LocalStorage from './LocalStorage'

const firebaseConfig = {
    apiKey: "AIzaSyAsjxkFqR1S2Ki_fuCY6BFklE9kQkkOIQ8",
    authDomain: "round-table-game.firebaseapp.com",
    databaseURL: "https://round-table-game.firebaseio.com",
    projectId: "round-table-game",
    storageBucket: "round-table-game.appspot.com",
    messagingSenderId: "270371884978",
    appId: "1:270371884978:web:91a4731bcf1515e6"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.localStorage = new LocalStorage();

        this.userCredentialsKey = 'rt-user-credentials';
        this.userCredentials = {};
    }

    signIn = () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        this.auth.signInWithRedirect(provider);
    }

    handleSignInResult = async () => {
        try {
            const result = await this.auth.getRedirectResult();
            if (result.credential) {
                this.userCredentials = { accessToken: result.credential.accessToken, user: result.user };
                this.localStorage.save(this.userCredentialsKey, this.userCredentials);
                console.log('redirect result credentials', this.userCredentials);
            }
        } catch (error) {
            console.error(error);
        }

    }
}

export default Firebase;