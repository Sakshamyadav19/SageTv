import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
      </div>
      <form className="text-white w-4/12 absolute bg-black p-16 my-36  mx-auto right-0 left-0 bg-opacity-85">
        <p className="mb-10 font-bold text-2xl">Sign In</p>
        <input type="text" placeholder="Email" className="w-full mb-10 p-2 bg-black rounded-md border border-white"></input>
        <input type="password" placeholder="Password" className="w-full  mb-10 p-2 bg-black border border-white rounded-md"></input>
        <button className="bg-red-500 w-full py-2 font-bold bg-opacity-100">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
