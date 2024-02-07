import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const signUp = (email, password,setErrMsg) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrMsg("User Already Exists!")

    });
};

export default signUp;
