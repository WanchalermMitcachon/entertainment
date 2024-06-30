import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedLogin({ children }) {
  const user = useSelector((state) => state); // เปลี่ยนเป็นการเลือก state.auth.user เพื่อให้ได้เฉพาะข้อมูลที่จำเป็น
  console.log("user redux", user);

  if (user.user.user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedLogin;
