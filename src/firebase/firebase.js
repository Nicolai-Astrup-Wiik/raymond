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
import { getStorage, ref, uploadBytes } from "firebase/storage";

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

//export const addProject = async (input) => {
//  await addDoc(pRef, input);
//};

export const addProject = async (project) => {
  try {
    const docRef = await addDoc(collection(db, "projects"), project);
    console.log("Project added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding project:", error);
  }
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
    // Map Firebase errors to user-friendly messages
    let errorMessage = "An error occurred. Please try again.";

    if (
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password"
    ) {
      errorMessage = "Incorrect username or password.";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Invalid email address.";
    }

    return { type: "error", message: errorMessage };
  }
}
export const storage = getStorage();

const imagesRef = ref(storage, "images");

export const uploadImage = async (file, fileName) => {
  const storageRef = ref(storage, `images/${fileName}`);

  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
};
