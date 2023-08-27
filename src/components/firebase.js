import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCnm16QGIzyTvlSJJNZs2lWO1HD1M9LOfc",
    authDomain: "cust-trip.firebaseapp.com",
    databaseURL: "https://cust-trip-default-rtdb.firebaseio.com",
    projectId: "cust-trip",
    storageBucket: "cust-trip.appspot.com",
    messagingSenderId: "193343762574",
    appId: "1:193343762574:web:806515251364552fdf99df",
    measurementId: "G-GE462VTD0H"
  };
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Get the auth instance
const database = getDatabase(firebaseApp); // Get the database instance
const firestore = getFirestore(firebaseApp);

export { auth, database,firestore, firebaseApp as default };
