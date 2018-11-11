import firebase from 'firebase/app';
import 'firebase/auth';
import config from '../config'


const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain:  config.AUTH_DOMAIN,
  databaseURL:  config.DATABASE_URL,
  
  projectId: config.PROJECT_ID,
  storageBucket:  config.STORAGE_BUCKET,
  messagingSenderId:  config.MESSAGING_SENDER_ID
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export {
  auth,
};
