import registerImg from "../assets/login.jpg";
import google from "../assets/google.svg";
import { NavLink } from 'react-router-dom';

export default function Register() {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={registerImg}
        alt=""
      />

      <div className="flex justify-center flex-col items-center h-full relative">
      <NavLink to="/" className="relative text-4xl text-white mb-5">LeCodingDev</NavLink>
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-2">Register</h2>
          <p className="text-center pb-4 text-slate-500 border-b-2">
            Free and only take a minute
          </p>
          <div className="flex flex-row gap-4 py-2 mt-2">
            <input placeholder="First Name" className="border p-2 w-1/2 bg-gray-100 rounded-lg" type="text" />
            <input placeholder="Last Name" className="border p-2 w-1/2 bg-gray-100 rounded-lg" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <input placeholder="Email" className="border p-2 bg-gray-100 rounded-lg" type="email" />
          </div>
          <div className="flex flex-col py-2">
            <input placeholder="Password" className="border p-2 bg-gray-100 rounded-lg" type="password" />
          </div>
          <div className="flex flex-col py-2">
            <input placeholder="Confrim Password" className="border p-2 bg-gray-100 rounded-lg" type="password" />
          </div>
          <div className="flex justify-between py-2">
            <p className="text-sm flex items-center gap-1">
              <input type="checkbox" /> I accept the Terms of Use & Privacy Policy
            </p>
          </div>
          <div className="flex flex-col py-2 gap-4">
            <button className="border py-2 text-sm bg-green-600 text-white cursor-pointer">
              Register Now
            </button>
            <button className="border py-1 text-sm cursor-pointer">
              <img className="w-6 h-6 inline mr-2" src={google} />
              Register with Google
            </button>
          </div>
          <div className="flex justify-center py-2 text-slate-500 text-sm">
            Already have an account?
            <NavLink to="/login" className="text-black font-bold cursor-pointer">
              Login here
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
