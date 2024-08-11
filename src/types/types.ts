import { User } from "firebase/auth";

export type LoginFormValues = {
   email: string;
   password: string;
}

export type Facility = {
   id: number;
   name: string;
};

export type UserFormValues = {
   email: string;
   password: string;
   displayName: string;
}

export enum PropertyType {
   house = 'घर (House)',
   land = 'जग्गा (Land)',
   shop = 'दुकान (Shop)',
   others = 'अन्य (Others)'
}

export enum TransactionType {
   rent = 'भाडा (Rent)',
   buy = 'बिक्री (Rent)',
}

export type PositionType = {
   lat: number;
   lng: number;
   address: string;
}

export type PropertyFormValues = {
   title: string;
   description: string;
   propertyType: PropertyType;
   transactionType: TransactionType;
   address: string;
   district: string;
   area: string;
   measurement: number;
   priceInNumber: number;
   priceInWords: string;
   priceNegotiable: boolean;
   facilities: string[];
   furnishing: string;
   faceTowards: string;
   buildingType: string;
   floors: number;
   beds: number;
   kitchen: number;
   living: number;
   bath: number;
   images: string[];
   videos: string;
   location: {
      lat?: number;
      lng?: number;
   };
   email: string;
   phone: string;
}

export type PropertyExtended = PropertyFormValues & { id: string };

export interface IAuth {
   user: User | null;
   loading: boolean;
   SignIn: (creds: LoginFormValues, onSuccess: () => void) => void;
   SignUp: (creds: UserFormValues, onSuccess: () => void) => void;
   SignOut: (onSuccess: () => void) => void;

} 