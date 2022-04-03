import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY1ywG3J-PGVm1YuhIh1SjSkkRfjQwQKM",
  authDomain: "super-chat-group.firebaseapp.com",
  projectId: "super-chat-group",
  storageBucket: "super-chat-group.appspot.com",
  messagingSenderId: "31829940296",
  appId: "1:31829940296:web:4ab4b56fc1932081d5a07d",
};

firebase.initializeApp(firebaseConfig);
const dataBase = firebase.dataBase();

export default dataBase;
