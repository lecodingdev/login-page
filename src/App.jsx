import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/homepage" Component={HomePage} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/forget" Component={ForgetPassword} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
