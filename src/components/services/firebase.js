import firebase from "firebase";

const config = {
  // apiKey: apiKey,
  // authDomain: authDomain,
  // databaseURL: databaseURL,
  // projectId: projectId,
  // storageBucket: storageBucket,
  // messagingSenderId: messagingSenderId,
  // appId: appIdHeroku,

  apiKey: "AIzaSyBlOxKRglQBCyljw2cuSuBMlR4zShxCd3w",
  authDomain: "coinnewsafrica-react.firebaseapp.com",
  databaseURL: "https://coinnewsafrica-react.firebaseio.com",
  projectId: "coinnewsafrica-react",
  storageBucket: "coinnewsafrica-react.appspot.com",
  messagingSenderId: "161765178638",
  appId: "1:161765178638:web:6960efe055589cbc4f6b5f",
  // };
};

// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
