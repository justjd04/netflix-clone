import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyATJj4B1D_qxzuS-N_xUQXTNNosCHmqyIg",
    authDomain: "new-projects-89a71.firebaseapp.com",
    projectId: "new-projects-89a71",
    storageBucket: "new-projects-89a71.appspot.com",
    messagingSenderId: "183017715710",
    appId: "1:183017715710:web:c1008704375007f78172af",
    measurementId: "G-CELSNE7EFZ"
  };

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
