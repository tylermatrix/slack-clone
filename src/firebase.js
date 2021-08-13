import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASckrZqLwjb2rOo6ixRWaEioyX7ls2lMA",
  authDomain: "slack-clone-3dde5.firebaseapp.com",
  projectId: "slack-clone-3dde5",
  storageBucket: "slack-clone-3dde5.appspot.com",
  messagingSenderId: "1028846151267",
  appId: "1:1028846151267:web:ba82b16086ed202442ba56",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
