import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
      }
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default Body;
