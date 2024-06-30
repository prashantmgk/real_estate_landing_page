import React from "react";
import { useAuth } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormValues } from '../../types/types';

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
   email: yup.string().email().required(),
   password: yup.string().required()
})

const Login = () => {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<LoginFormValues>({
      resolver: yupResolver(schema)
   });
   const navigate = useNavigate();
   const { SignIn } = useAuth();

   const onSuccess = () => {
      console.log('Successfully Logged In');
      navigate('/property');
   };

   const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
      SignIn(data, onSuccess);
      // console.log(data)
   }

   return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-100">
         <div className="flex flex-col bg-white p-4 shadow-md">
            <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
            <h1 className="text-h2 font-medium">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
               <input
                  {
                  ...register("email")
                  }
                  type="email"
                  placeholder="Email"
                  className="rounded-md border border-gray-300 p-2"
               />
               {errors.email && <span>{errors.email.message}</span>}

               <input
                  {
                  ...register("password")
                  }
                  type="password"
                  placeholder="Password"
                  className="rounded-md border border-gray-300 p-2"
               />
               {errors.password && <span>{errors.password.message}</span>}
               <input
                  type="submit"
                  value="Login"
                  className="bg-blue-500 p-2 text-white"
               />
            </form>
         </div>
      </div>
   );
};

export default Login;
