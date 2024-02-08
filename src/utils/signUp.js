import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";

const signUp = (email, password, name, navigate, setErrMsg) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
      })
        .then(() => {
          navigate("/browse");
        })
        .catch((error) => {});
    })
    .catch((error) => {
      console.log(error);
      setErrMsg("User Already Exists!");
    });
};

export default signUp;
