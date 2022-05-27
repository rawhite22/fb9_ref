import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDawmNvB56i3Ztspy_ZyHq2_iUEM00nMOk',
  authDomain: 'fb-9-7f8d1.firebaseapp.com',
  projectId: 'fb-9-7f8d1',
  storageBucket: 'fb-9-7f8d1.appspot.com',
  messagingSenderId: '69272454553',
  appId: '1:69272454553:web:ad34b503c9b428acf1ff08',
}

// initialize app
initializeApp(firebaseConfig)
// initialize firestore
const dataBase = getFirestore()
// initialize auth
const auth = getAuth()

export { dataBase, auth }
