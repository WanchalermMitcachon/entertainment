import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";
import ProtectedLogin from "./ProtectedLogin";

function App() {
  return (
    <>
      <Routes>
        {" "}
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/login"
          element={
            <ProtectedLogin>
              <Login />
            </ProtectedLogin>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedLogin>
              <Signup />
            </ProtectedLogin>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
