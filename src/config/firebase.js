// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmQXLvW2nOCENYrjo94ffcCmpT0sHlxjg",
  authDomain: "ieee-link-task-by-hari.firebaseapp.com",
  projectId: "ieee-link-task-by-hari",
  storageBucket: "ieee-link-task-by-hari.appspot.com",
  messagingSenderId: "676044189910",
  appId: "1:676044189910:web:e3b54a5ba8ae083bfe9977",
  measurementId: "G-J7SY6102Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  storage =getStorage(app);
export const db = getFirestore(app);