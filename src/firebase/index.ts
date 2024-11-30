// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBcuU4neFU8JP91D-ZBhL2LFoA6bmFA6NE',
  authDomain: 'macan-auto-rent.firebaseapp.com',
  projectId: 'macan-auto-rent',
  storageBucket: 'macan-auto-rent.firebasestorage.app',
  messagingSenderId: '243882342852',
  appId: '1:243882342852:web:52011b08233a8b6e4f4c91',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
