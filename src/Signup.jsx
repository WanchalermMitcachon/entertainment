// src/components/SignUp.js
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    // If user does not exist, proceed with creating new account
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage("Sign up successful!");
      setError(null);
      // You can redirect or handle navigation here after successful signup
    } catch (createUserError) {
      setError(createUserError.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className="bg-darkblue w-screen md:flex md:flex-col md:items-center md:mt-20">
      <div className="flex justify-center items-center my-16">
        <img src={logo} alt="logo" />
      </div>
      <form
        className="bg-semiDarkBlue mx-10 p-5 rounded-lg md:min-w-[450px]"
        onSubmit={handleSignUp}
      >
        <h2 className="text-3xl font-light my-8">Sign Up</h2>
        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}{" "}
        {error && <p className="text-red  mb-4">{error}</p>}
        <div className="mb-4 border-b-[0.5px] border-gray-500 pb-3 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 outline-none bg-semiDarkBlue focus:outline-none caret-red"
            required
            placeholder="Email address"
          />
        </div>
        <div
          className={`mb-6 border-b-[0.5px] border-gray-500 pb-3 ${
            error && error === "Passwords do not match" && "border-red"
          }`}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-semiDarkBlue focus:outline-none caret-red"
            required
            placeholder="Password"
          />
        </div>
        <div
          className={`mb-6 border-b-[0.5px] border-gray-500 pb-3 relative ${
            error && error === "Passwords do not match" && "border-red"
          }`}
        >
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="w-full px-3 py-2 rounded bg-semiDarkBlue focus:outline-none caret-red"
            required
            placeholder="Repeat Password"
          />
        </div>
        <button
          type="submit"
          className="my-2 bg-red text-white mx-auto w-full p-3 rounded-lg"
        >
          Sign Up
        </button>
        <h1 className="text-center my-3 font-light">
          Already have an account?
          <Link to="/login">
            <span className="text-red"> Login</span>
          </Link>
        </h1>
      </form>
    </div>
  );
}

export default Signup;
