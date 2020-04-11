import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyAubs3s33biNDIOXqo5ArulXGjSxNFZBZg",
    authDomain: "e-commerce-d09ba.firebaseapp.com",
    databaseURL: "https://e-commerce-d09ba.firebaseio.com",
    projectId: "e-commerce-d09ba",
    storageBucket: "e-commerce-d09ba.appspot.com",
    messagingSenderId: "219285057310",
    appId: "1:219285057310:web:4b809b7da39b54f1eba30f",
    measurementId: "G-272QQXG6W9"
  };

  export const createUser = async(userAuth,others) =>
  {
        if(!userAuth) return;

        const userRef =firestore.doc(`users/${userAuth.id}`);
        const Snap =await userRef.get();
        if(!Snap.exists)
        {

              const{displayName,email} =userAuth;
              const newData =new Date();

              try
              {
                await userRef.set({displayName,email,newData,...others})
              }
            catch(error)
            {
                  console.log("error",error.message);
            }
        }
        return userRef;
  };
firebase.initializeApp(Config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;