import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAfuzwG0GJrzEbubwry9l7kOte2Ccqdf6A",
    authDomain: "missveev-commerce.firebaseapp.com",
    projectId: "missveev-commerce",
    storageBucket: "missveev-commerce.appspot.com",
    messagingSenderId: "90740199636",
    appId: "1:90740199636:web:4503e5474a3138804feb41",
    measurementId: "G-K8GTN61FGY"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;