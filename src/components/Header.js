import { useSelector } from "react-redux";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log(user)
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/");
      });
  };
  return (
    <div className="flex justify-between items-center absolute bg-gradient-to-b from-black z-10">
      <img
        className="w-1/5"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
