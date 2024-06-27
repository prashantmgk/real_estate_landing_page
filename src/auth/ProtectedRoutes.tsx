import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../store/AuthContext";

const ProtectedRoutes = () => {
   const { user } = useAuth();

   return user ? <Outlet /> : <Navigate to="/login" />; //TODO: navigate to proper login route
}

export default ProtectedRoutes;