import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyBQcPL8rAzOPPAa9JtjkpM0wxM2PliORvk",
  authDomain: "badsugen-b1543.firebaseapp.com",
  databaseURL: "https://badsugen-b1543.firebaseio.com",
  projectId: "badsugen-b1543",
  storageBucket: "badsugen-b1543.appspot.com",
  messagingSenderId: "929294040766"
};
const fb = firebase
.initializeApp(config)
.database();


export default fb;
