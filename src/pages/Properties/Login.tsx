import { useContext, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { LoginFormValues } from '../../types/types';
import React from 'react';

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { AuthContext } from '../../store/AuthContext';
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

   const { SignIn, user } = useContext(AuthContext);
   const navigate = useNavigate();

   useEffect(() => {
      if (user) {
         navigate("/property");
      }
   }, [navigate])

   const onSuccess = () => {
      navigate("/property");
   }


   const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
      SignIn(data, onSuccess);
   }

   return (
      <div className="flex my-28 w-full items-center justify-center ">
         <div className="flex min-w-96 flex-col gap-8 bg-white p-8 py-10 border-2 border-slate-200 rounded-sm">
            <h1 className="text-h3 font-medium">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
               <input
                  {
                  ...register("email")
                  }
                  type="email"
                  placeholder="Email"
                  className="rounded-md border border-gray-300 p-2"
               />
               {errors.email && <span className='font-normal text-sm text-red-600'>{errors.email.message}</span>}

               <input
                  {
                  ...register("password")
                  }
                  type="password"
                  placeholder="Password"
                  className="rounded-md border border-gray-300 p-2"
               />
               {errors.password && <span className='font-normal text-sm text-red-600'>{errors.password.message}</span>}
               <input
                  type="submit"
                  value="Login"
                  className="bg-brand-300 p-2 my-4 text-white"
               />
            </form>
         </div>
      </div>
   );
};

export default Login;
