import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyCzT8CxCFHSas7a12LIDU4VqU4sNro5rNw",
        authDomain: "ecom-f63c6.firebaseapp.com",
        databaseURL: "https://ecom-f63c6.firebaseio.com",
        projectId: "ecom-f63c6",
        storageBucket: "ecom-f63c6.appspot.com",
        messagingSenderId: "470002511633",
        appId: "1:470002511633:web:746eee6b49f26ba16f66b0",
        measurementId: "G-FGVS27D6Y3"
      };
      export const createUserProfileDocument = async (usersAuth , additionalData) =>{
        if (!usersAuth) return;

        const userRef =  firestore.doc(`users/${usersAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists){
          const {displayName,email } =usersAuth;
          const createdAt =new Date();

          try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
          }catch(error){
            console.log('error created user',error.message);
          }
        }
        return userRef;
      };

firebase.initializeApp(config);
export const  auth =firebase.auth();
export const  firestore=firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInwithGoogle = ()=>auth.signInWithPopup( provider);
export default firebase;
