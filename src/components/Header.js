import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="flex justify-between items-center absolute bg-gradient-to-b from-black z-20">
      <img
        className="w-1/5"
        alt="logo"
        src={Logo}
      ></img>
      {user && (
        <button onClick={handleLogout} className="px-2 h-8 text-white">
          {user.displayName}
        </button>
      )}
    </div>
  );
};

export default Header;
