import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDAGcBPRfosP61CkKwnYaAOexsQbbUdhd0",
    authDomain: "crwn-clothing-1afdb.firebaseapp.com",
    projectId: "crwn-clothing-1afdb",
    storageBucket: "crwn-clothing-1afdb.appspot.com",
    messagingSenderId: "917520691185",
    appId: "1:917520691185:web:bf2dadb2a8f0ae71621e50",
    measurementId: "G-E641JBMWX4"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase