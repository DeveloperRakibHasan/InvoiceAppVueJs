import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6gOs3OAfc3KizgrNp5iZCJWngaxHjmg4",
  authDomain: "invoice-app-yt-dff0c.firebaseapp.com",
  projectId: "invoice-app-yt-dff0c",
  storageBucket: "invoice-app-yt-dff0c.appspot.com",
  messagingSenderId: "836662399738",
  appId: "1:836662399738:web:d8be2ec3ecf52eea6b6f43"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
export default firestore;