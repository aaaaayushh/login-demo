import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA06B82THNwoF85WzmiQ3AIBaOv9uxjA9A",
  authDomain: "login-demo-e6531.firebaseapp.com",
  projectId: "login-demo-e6531",
  storageBucket: "login-demo-e6531.appspot.com",
  messagingSenderId: "1036178885497",
  appId: "1:1036178885497:web:4cfa691c257782379d7da8",
  measurementId: "G-NYG9S70EB4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
