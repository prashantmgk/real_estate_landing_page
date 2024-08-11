import React, { createContext, useEffect, useState } from "react";

import { firebaseAuth } from "../auth/BaseConfig";
import { IAuth, LoginFormValues, UserFormValues } from "../types/types";
import { User, onAuthStateChanged } from "firebase/auth";
import { Loader } from "@mantine/core";
import { SignIn, SignUp, SignOut } from "../auth/services/AuthService";

export const AuthContext = createContext<IAuth>({
   user: firebaseAuth.currentUser,
   loading: false,
   SignIn: () => { },
   SignUp: () => { },
   SignOut: () => { },
});


const AuthProvider = ({ children }: { children: React.ReactNode }) => {

   const [currentUser, setCurrentUser] = useState<User | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);


   const SignUpUser = (creds: UserFormValues) => {
      setIsLoading(true);
      SignUp(creds)
         .then(async userCredential => {
            const { user } = userCredential; //object destructuring
            if (user) {
               setCurrentUser(user);
               //redirect the user on the targeted route
            }
            else { //do something if user is empty like an alert 
            }
            setIsLoading(false);
         })
         .catch(error => {
            //check for error
            if (error.code === 'auth/email-already-in-use') {
               //show an alert or console
            } else if (error.code === 'auth/too-many-requests') {
               //do something like an alert
            }
            // you can check for more error like email not valid or something
            setIsLoading(false);
         });
   }

   //Sign in
   const SignInUser = async (creds: LoginFormValues, onSuccess: () => void) => {
      setIsLoading(true);
      SignIn(creds)
         .then(userCredential => {
            const { user } = userCredential;
            if (user) {
               setCurrentUser(user);
               //redirect user to targeted route
               onSuccess();
            }
            else { //do something 
            }

            setIsLoading(false);
         })
         .catch(error => {
            if (error.code === 'auth/wrong-password') {
               //show error
            } else if (error.code === 'auth/too-many-requests') {
               //show error
            }
            setIsLoading(false);
         });
   }

   const SignOutUser = async () => {
      setIsLoading(true);
      try {
         await SignOut();
         setCurrentUser(null);
      } catch (error) {
         setIsLoading(false);
         //show error alert
      }
   }

   //create Auth Values
   const authValues: IAuth = {
      user: currentUser,
      loading: isLoading,
      SignIn: SignInUser,
      SignUp: SignUpUser,
      SignOut: SignOutUser,
   }

   useEffect(() => {
      //onAuthStateChanged check if the user is still logged in or not
      const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
         setCurrentUser(user);
         setIsAuthLoading(false);
      });
      return unsubscribe;
   }, []);

   //If loading for the first time when visiting the page
   if (isAuthLoading) return (
      <div className='fixed top-0 left-0 w-full h-full z-[10000] flex justify-center items-center'>
         <Loader color="blue" />
      </div>
   )

   return (
      <AuthContext.Provider value={authValues}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;