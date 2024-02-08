import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const signIn = (email, password, navigate, setErrMsg) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/browse");
    })
    .catch((error) => {
      const errorMessage = error.message;

      setErrMsg("Invalid Credentials!");
    });
};

export default signIn;
