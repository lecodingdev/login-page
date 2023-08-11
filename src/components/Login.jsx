import loginImg from "../assets/login.jpg";
import google from "../assets/google.svg";
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImg}
        alt=""
      />

      <div className="flex justify-center flex-col items-center h-full relative">
        <NavLink to="/" className="relative text-4xl text-white mb-5">LeCodingDev</NavLink>
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-2">Welcome back</h2>
          <p className="text-center pb-4 text-slate-500 border-b-2">
            Please login to your account
          </p>
          <div className="flex flex-col py-2 mt-2">
            <input placeholder="Email" className="border p-2 bg-gray-100" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <input placeholder="Password" className="border p-2 bg-gray-100" type="password" />
          </div>
          <div className="flex justify-between py-2">
            <p className="text-sm flex items-center gap-1">
              <input type="checkbox" /> Remember Me
            </p>
            <NavLink to="/forget" className="font-bold text-sm cursor-pointer">Forgot Password</NavLink>
          </div>
          <div className="flex flex-col py-2 gap-4">
            <button className="border py-2 text-sm bg-black text-white cursor-pointer">
              Sign in
            </button>
            <button className="border py-1 text-sm cursor-pointer">
              <img className="w-6 h-6 inline mr-2" src={google} />
              Sign in with Google
            </button>
          </div>
          <div className="flex justify-center py-2 text-slate-500 text-sm">
            Dont have an account?
            <NavLink to="/register" className="text-black font-bold cursor-pointer">
              Sign up for free
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
