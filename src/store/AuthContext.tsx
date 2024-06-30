import React, { useContext, useEffect, useState } from "react";

import { firebaseAuth } from "../auth/BaseConfig";
import { createContext } from "react";
import { IAuth, LoginFormValues, UserFormValues } from "../types/types";
import { User, onAuthStateChanged } from "firebase/auth";

import TAuth from "../auth/services/AuthService";

export const AuthContext = createContext<IAuth>({
   user: firebaseAuth.currentUser,
   loading: false,
   SignIn: () => { },
   SignUp: () => { },
   SignOut: () => { },
});

export const useAuth = () => useContext(AuthContext);


const AuthProvider = ({ children }: { children: React.ReactNode }) => {

   const [currentUser, setCurrentUser] = useState<User | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);

   const SignUp = (creds: UserFormValues, onSuccess: () => void) => {
      setIsLoading(true);
      TAuth.SignUp(creds)
         .then(async userCredentials => {
            const { user } = userCredentials;
            if (user) {
               setCurrentUser(user)
               onSuccess();
            }
            else {
               //TODO: do something if user is empty like an alert
            }
            setIsLoading(false)
         })
         .catch(error => {

            console.log(error)
            if (error.code === 'auth/email-already-in-use') {
               //TODO: show an alert or console
               console.log(error.code)
               console.log("Email Already Exists")
            } else if (error.code === 'auth/too-many-requests') {
               //TODO: do something like an alert
               console.log(error.code)
            } else if (error.code === 'auth/network-request-failed') {
               console.log("worked ", error.code)
            }
            // you can check for more error like email not valid or something
            setIsLoading(false);
         })
   }

   const SignIn = (creds: LoginFormValues, onSuccess: () => void) => {
      setIsLoading(true);
      TAuth.SignIn(creds)
         .then(userCredentials => {
            const { user } = userCredentials;
            if (user) {
               setCurrentUser(user);
               onSuccess();
            } else {
               //TODO: do something if user is empty like an alert
            }
            setIsLoading(false)
         })
         .catch(error => {
            if (error.code === 'auth/wrong-password') {
               //TODO: show an alert or console
               console.log(error.code)
            } else if (error.code === 'auth/too-many-requests') {
               //TODO: do something like an alert
               console.log(error.code)
            }
            setIsLoading(false);
         });
   }

   const SignOut = async () => {
      setIsLoading(true);
      try {
         await TAuth.SignOut;
         setCurrentUser(null);
         // navigate('signup') TODO: take to login page
      } catch (error) {
         setIsLoading(false);
         //TODO: do something like an alert
         console.log(error.code)
      }
   }

   useEffect(() => {
      const unsub = onAuthStateChanged(firebaseAuth, user => {
         console.log("is running", user)
         setCurrentUser(user);
         setIsAuthLoading(false);
      })

   }, [])

   const authValues: IAuth = {
      user: currentUser,
      loading: isLoading,
      SignUp,
      SignIn,
      SignOut,
   }

   if (isAuthLoading) return <div>Loading...</div>

   return (
      <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
   )
}

export default AuthProvider