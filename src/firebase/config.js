// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAG8JjvKZmULV1223_EUEwB_p5_HlNnO74',
  authDomain: 'react-cursos-6e28c.firebaseapp.com',
  projectId: 'react-cursos-6e28c',
  storageBucket: 'react-cursos-6e28c.firebasestorage.app',
  messagingSenderId: '952541006227',
  appId: '1:952541006227:web:2dcbbfec42b3286a680066',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
