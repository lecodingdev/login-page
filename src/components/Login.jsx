import loginImg from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export default function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwtDecode(response.credential);
    console.log(userObject);

    setUser(userObject);

    localStorage.setItem("user", JSON.stringify(userObject));

    navigate("/homepage");

    document.getElementById("LoginGoogle").hidden = true;
  }


  useEffect(() => {
    if (window?.google?.accounts?.id) {
      window.google.accounts.id.initialize({
        client_id:
          "1090992172001-9empovjfuuelshrff08ot6qj0bsit0nf.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("LoginGoogle"),
        {
          theme: "outline",
          size: "large",
        }
      );

      window.google.accounts.id.prompt();
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt=""
      />

      <div className="flex justify-center flex-col items-center h-full relative">
        <Link to="/" className="relative text-4xl text-white mb-5">
          LeCodingDev
        </Link>
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-2">Welcome back</h2>
          <p className="text-center pb-4 text-slate-500 border-b-2">
            Please login to your account
          </p>
          <div className="flex flex-col py-2 mt-2">
            <input
              placeholder="Email"
              className="border p-2 bg-gray-100"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2">
            <input
              placeholder="Password"
              className="border p-2 bg-gray-100"
              type="password"
            />
          </div>
          <div className="flex justify-between py-2">
            <p className="text-sm flex items-center gap-1">
              <input type="checkbox" /> Remember Me
            </p>
            <Link to="/forget" className="font-bold text-sm cursor-pointer">
              Forgot Password
            </Link>
          </div>
          <div className="flex justify-center items-center py-2 gap-4">
            <button className="w-[198px] rounded px-2 border py-2 text-sm bg-black text-white cursor-pointer">
              Login
            </button>
          </div>
          <Link
            to="/homepage"
            id="LoginGoogle"
            className="w-full flex justify-center items-center"
          ></Link>
          <div className="flex justify-center py-2 text-slate-500 text-sm">
            Dont have an account?
            <Link
              to="/register"
              className="text-black font-bold cursor-pointer"
            >
              Sign up for free
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
