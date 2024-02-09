import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import signUp from "../utils/signUp";
import signIn from "../utils/signIn";
import { useDispatch } from "react-redux";
import { Login_bg } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch=useDispatch()

  const submitForm = () => {
    const isvalidated = validate(email.current.value, password.current.value);
    setErrMsg(isvalidated)
    if (isvalidated != null) return;

    if(!isSignIn){
      signUp(email.current.value, password.current.value,name.current.value,dispatch,(msg)=>setErrMsg(msg))
    }
    else{
      signIn(email.current.value, password.current.value,(msg)=>setErrMsg(msg))
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg-img"
          src={Login_bg}
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white w-4/12 absolute bg-black p-16 my-36  mx-auto right-0 left-0 bg-opacity-85"
      >
        <p className="mb-10 font-bold text-2xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="w-full mb-10 p-2 bg-black rounded-md border border-white"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full mb-10 p-2 bg-black rounded-md border border-white"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full  mb-4 p-2 bg-black border border-white rounded-md"
        ></input>
        <p className="mb-5 text-red-700">{errMsg}</p>
        <button
          onClick={submitForm}
          className="bg-red-500 w-full py-2 font-bold bg-opacity-100"
        >
          {isSignIn ? "Sign In" : "Register"}
        </button>
        <p
          className="text-white mt-4 cursor-pointer"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn ? "New to Netflix?" : "Already Registed?"}{" "}
          <span className="font-bold">
            {isSignIn ? "Sign up Now" : "Sign in Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
