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

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return userRef
}
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase