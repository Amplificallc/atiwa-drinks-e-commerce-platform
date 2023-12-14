// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDISLqYXryt0Q7mXFO4QKOru57NB41qgmI",
  authDomain: "atiwa-e-commerce-platform.firebaseapp.com",
  projectId: "atiwa-e-commerce-platform",
  storageBucket: "atiwa-e-commerce-platform.appspot.com",
  messagingSenderId: "393022870198",
  appId: "1:393022870198:web:f0f2b7a063e19cdd710c17",
  measurementId: "G-C0VFVNJ8HL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
