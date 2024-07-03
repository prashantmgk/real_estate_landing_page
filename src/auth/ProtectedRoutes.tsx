import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import React from 'react';

const PrivateRoutes = () => {
   const { user } = useContext(AuthContext);

   return user ? <Outlet /> : <Navigate to="/property/login" />;
};

export default PrivateRoutes;