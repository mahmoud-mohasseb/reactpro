import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATA_BASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebase firestore

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

// firebase database
// const database = firebase.database();
// firebase upload
// const storageRef = firebase.storage().ref();

// const ref = database.ref('')
// var ref = database.ref('Messages');
// ref.push({

export { auth, provider };
// export default db;

export default db;

// const Messagesfire =
//   'https://socialnetwork-6c17c-default-rtdb.europe-west1.firebasedatabase.app/Messages.json';
// console.log(Messagesfire);
