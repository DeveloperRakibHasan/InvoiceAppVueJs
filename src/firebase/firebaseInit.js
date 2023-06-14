import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6gOs3OAfc3KizgrNp5iZCJWngaxHjmg4",
  authDomain: "invoice-app-yt-dff0c.firebaseapp.com",
  projectId: "invoice-app-yt-dff0c",
  storageBucket: "invoice-app-yt-dff0c.appspot.com",
  messagingSenderId: "836662399738",
  appId: "1:836662399738:web:d8be2ec3ecf52eea6b6f43"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()