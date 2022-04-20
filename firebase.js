import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAlVXcY8nAnIYeHEhhDgAFEN6J-LJ3zCU",
  authDomain: "todoapp-4404c.firebaseapp.com",
  projectId: "todoapp-4404c",
  storageBucket: "todoapp-4404c.appspot.com",
  messagingSenderId: "742652038600",
  appId: "1:742652038600:web:fc374570e73094440c84fd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
