import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../store/AuthContext";

const ProtectedRoutes = () => {
   const { user } = useAuth();

   console.log("user", user)

   return user ? <Outlet /> : <Navigate to="/property/login" />;
}

export default ProtectedRoutes;