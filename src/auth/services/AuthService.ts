import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";
import { firebaseAuth } from "../BaseConfig";
import { LoginFormValues, UserFormValues } from "../../types/types";

setPersistence(firebaseAuth, browserLocalPersistence);

export const SignIn = async ({ email, password }: LoginFormValues) => {
   try {
      const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
      return res;
   } catch (error) {
      return error;
   }

}

export const SignUp = async ({ email, password }: UserFormValues) => {

   const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
   return res;
}

export const SignOut = async () => {
   await signOut(firebaseAuth);
}

const TAuth = {
   SignIn,
   SignOut,
   SignUp,
}

export default TAuth;