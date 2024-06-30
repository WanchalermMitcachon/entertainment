// src/components/Login.js
import React, { useState } from "react";
import { auth } from "./firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";
import logo from "/assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [inputError, setInputError] = useState(false); // State to manage input error
  const user = useSelector((state) => state);
  console.log("user at login", user.user.user);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password) {
      setInputError(true);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        dispatch(login(user));
        navigate("/");
      })
      .catch((err) => {
        console.log("xxx");
        setError(err.message);
        setInputError(true);
      });
  };

  const handleInputChange = () => {
    setInputError(false);
    setError(null); // Reset error message when input changes
  };

  console.log("err", error);
  return (
    <div className="bg-darkblue w-screen md:flex md:flex-col md:items-center md:mt-20">
      <div className="flex justify-center items-center my-16 ">
        <img src={logo} alt="logo" />
      </div>
      <form
        className="bg-semiDarkBlue mx-10  p-5 rounded-lg md:w-[450px]"
        onSubmit={handleLogin}
      >
        <div className="my-8 flex flex justify-between">
          {" "}
          <h2 className="text-3xl font-light ">Login</h2>
          <div className="text-sm text-yellow-400">
            <p>Quick access</p>
            <p>ID: test@gmail.com</p>
            <p>PW: 123456</p>
          </div>
        </div>
        {error && <p className="text-red my-3">{error}</p>}
        <div
          className={`mb-4 border-b-[0.5px] pb-3 relative ${
            error ? "border-red" : "border-gray-500 "
          }`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange();
            }}
            className="w-full px-3 py-2 outline-none bg-semiDarkBlue 
            focus:outline-none caret-red"
            required
            placeholder="Email address"
          />
        </div>
        <div
          className={`mb-4 border-b-[0.5px] pb-3 relative ${
             error ? "border-red" : "border-gray-500 "
          }`}
        >
          {" "}
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
            className="w-full px-3 py-2 bg-semiDarkBlue    
            focus:outline-none focus:bg-semiDarkBlue caret-red"
          />
          {inputError && !password && (
            <p className="text-red mt-1 absolute right-0 top-[10%]">
              Can't be empty
            </p>
          )}
        </div>
        <button
          type="submit"
          className="my-2 bg-red text- mx-auto w-full p-3 rounded-lg"
        >
          Login to your account
        </button>
        <h1 className="text-center my-3 font-light ">
          Don't have an account?
          <Link to="/signup">
            {" "}
            <span className="text-red text-center"> Sign Up</span>
          </Link>
        </h1>
      </form>
    </div>
  );
}

export default Login;
