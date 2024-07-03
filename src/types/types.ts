import { User } from "firebase/auth";

export type LoginFormValues = {
   email: string;
   password: string;
}

export type UserFormValues = {
   email: string;
   password: string;
   displayName: string;
}

export interface IAuth {
   user: User | null;
   loading: boolean;
   SignIn: (creds: LoginFormValues, onSuccess: () => void) => void;
   SignUp: (creds: UserFormValues, onSuccess: () => void) => void;
   SignOut: (onSuccess: () => void) => void;

} 