import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toast } from "react-toastify";

const app = initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
});
// const firebaseConfig = {
//   apiKey: "AIzaSyCWYfsLW0kzJ1DhwIwcRtHbdWP5p5sTdj0",
//   authDomain: "blog-e9a3e.firebaseapp.com",
//   databaseURL: "https://blog-e9a3e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "blog-e9a3e",
//   storageBucket: "blog-e9a3e.appspot.com",
//   messagingSenderId: "325804284763",
//   appId: "1:325804284763:web:04e1d47740ac1e728cd87e"
// };

// const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth);
  toast("Logout successful")
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      toast("Incorrect password or invalid credentials");
    });
};

export const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
// currentUser verisi bir obje. içindekiler kullanılabilir
        return(currentUser?.email);
        // aktif kullanıcının emailini döndürdüm
      } else {
        // User is signed out
        console.log("user logout")
        return("");
      }
    });
  };

export const resetPassword =(email)=>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    toast("An email has been sent for reset your password!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast(errorCode+errorMessage)
  });
}
