import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getDatabase} from 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA5IHkNzQ-kNRa2rYCBJpxeqMCAd5kqfgM',
  authDomain: 'wowieproject.firebaseapp.com',
  databaseURL: 'https://wowieproject.firebaseio.com',
  projectId: 'wowieproject',
  storageBucket: 'wowieproject.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const store = getFirestore(app);
const auth = getAuth(app);

const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export {auth, db, storage, store, app, provider};
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
