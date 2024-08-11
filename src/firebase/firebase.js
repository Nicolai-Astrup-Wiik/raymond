// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDoc,
  query,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCprP6Ewy2dNNG2W2UyPQPZb9HYNavClAQ",
  authDomain: "raymond-page.firebaseapp.com",
  projectId: "raymond-page",
  storageBucket: "raymond-page.appspot.com",
  messagingSenderId: "719431515251",
  appId: "1:719431515251:web:1c2e3094c8efb19e513e06",
  measurementId: "G-TGCMQC2WT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const pRef = collection(db, "projects");

export const getProjects = async () => {
  const snapshot = await getDocs(pRef);
  return snapshot.docs.map((project) => {
    return project.data();
  });
};

export const addProject = async (input) => {
  await addDoc(pRef, input);
};

export async function firebaseLogin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    return { type: "success", user };
  } catch (error) {
    const errorMessage = error.message;
    return { type: "error", message: errorMessage };
  }
}
