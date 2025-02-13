import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2I050ZTPNTqEzwXrmQoVLEWUHUooLXes",
  authDomain: "my-love14022025.firebaseapp.com",
  projectId: "my-love14022025",
  storageBucket: "my-love14022025.firebasestorage.app",
  messagingSenderId: "813763642556",
  appId: "1:813763642556:web:431cda6d59b203570bbcb9",
  measurementId: "G-99XF7KVBKD",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
