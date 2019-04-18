import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB7tJgACajfoIgNqv_4Rv-GS6Bgbz9Uid8',
  authDomain: 'bethere-fd383.firebaseapp.com',
  databaseURL: 'https://bethere-fd383.firebaseio.com',
  projectId: 'bethere-fd383',
  storageBucket: 'bethere-fd383.appspot.com',
  messagingSenderId: '803549483727'
};

firebase.initializeApp(config);

export default firebase;
