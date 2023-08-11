import { NavLink } from "react-router-dom";

export default function ForgetPassword() {
  return (
    <div>
        <div className="flex justify-between items-center my-5 mx-3 h-4">
            <NavLink to="/" className="font-bold text-2xl">LeCodingDev</NavLink>
            <div className="flex gap-4 items-center">
            <NavLink to="/login" className="border px-2 py-1  bg-blue-600 text-white cursor-pointer">Login</NavLink>
            <NavLink to="/register" className="border px-2 py-1 bg-green-600 text-white cursor-pointer">Register</NavLink>
            </div>
        </div>
        <div className="bg-gray-300 w-full h-[500px] flex justify-center flex-col items-center">
        <form className="max-w-[400px] lg:max-w-[600px] w-full mx-auto bg-white p-4 rounded-lg">
            <p className="text-xl font-bold mb-4 pb-4 border-b-2">Reset Your Password</p>
            <p className="mb-4">Input email to reset your password</p>
            <input placeholder="Email" className="border w-full bg-gray-100 p-2 mb-4 rounded-lg" type="text" />
            <div className="flex gap-4 justify-end">
                <button to="/" className="border px-2 py-1 bg-slate-300 cursor-pointer">Cancel</button>
                <button to="/" className="border px-2 py-1 bg-blue-600 text-white cursor-pointer">Find</button>
            </div>
        </form>
        </div>
    </div>
  )
}
