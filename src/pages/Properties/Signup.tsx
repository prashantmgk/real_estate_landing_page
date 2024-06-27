import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Signup = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const onSubmit = async (e) => {
      e.preventDefault();
      console.log(e)
   };

   return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-100">
         <div className="flex flex-col bg-white p-4 shadow-md">
            <h1 className="text-h2 font-medium">Sign up</h1>
            <form className="flex flex-col gap-4">
               <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username"
                  className="rounded-md border border-gray-300 p-2"
               />
               <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-md border border-gray-300 p-2"
               />
               <input
                  type="submit"
                  onClick={onSubmit}
                  className="bg-blue-500 p-2 text-white"
               />
            </form>
         </div>
      </div>
   );
};

export default Signup;
