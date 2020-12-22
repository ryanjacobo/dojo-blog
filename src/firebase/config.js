import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7KVpLNh2xtwHYCi60vI7XRGybRdOv3I0",
  authDomain: "udemy-vue-firebase-sites-62fb9.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-62fb9",
  storageBucket: "udemy-vue-firebase-sites-62fb9.appspot.com",
  messagingSenderId: "723855004784",
  appId: "1:723855004784:web:9c1330aaa9335f25b8d0b5",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export default { projectFirestore, timestamp };
export { projectFirestore, timestamp }; // never type "export default"
