import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { addUser } from "./userSlice";

const signUp = (email, password, name, navigate,dispatch, setErrMsg) => {
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
      })
        .then(() => {
          const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
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
