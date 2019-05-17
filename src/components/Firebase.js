import * as firebase from 'firebase/app';
import 'firebase/auth'

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
    }

    signInUsingGoogle = () => {
        console.log('doing something');

        let provider = new firebase.auth.GoogleAuthProvider();
        this.auth.signInWithPopup(provider).then((result) => {
           console.log(result);
        });
    }
}

export default Firebase;