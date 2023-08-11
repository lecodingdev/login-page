/* eslint-disable react/no-unescaped-entities */
import homeImg from "../assets/login.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={homeImg} alt="" />
      </div>

      <div className="flex justify-center items-center h-full relative">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-2">Let's get started 👋</h2>
          <p className="text-center pb-4 text-slate-500">
            Please login to your account
          </p>
          <div className="flex flex-col py-2 gap-4 justify-center items-center text-center mt-5">
            <NavLink to="/login" className="border py-4 text-lg bg-blue-600 text-white cursor-pointer w-2/3 rounded-lg">
              Login
            </NavLink>
            <NavLink to="/forget" className="text-blue-600 pb-4 border-b-2 w-full text-sm">Forget your password?</NavLink>
            <NavLink to="/register" className="border py-4 text-base bg-green-600 text-white cursor-pointer w-1/3 rounded-lg">
                Register Now
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
