import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { Button } from "@mantine/core";
import { MdOutlineLogout } from "react-icons/md";

import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../auth/BaseConfig';
import { PropertyExtended } from "../../types/types";
import OurPropertyCard from "../../components/PropertyCard";

const Dashboard = () => {

   const [properties, setProperties] = useState<PropertyExtended[]>([]);
   const propertyCollectionRef = collection(db, "properties");

   useEffect(() => {
      const fetchProperties = async () => {
         try {
            const data = await getDocs(propertyCollectionRef);
            const filteredData = data.docs.map(doc => ({
               ...doc.data(),
               id: doc.id
            }));
            setProperties(filteredData);
         } catch (err) {
            console.error(err);
         }
      }
      fetchProperties();
   }, []);

   const navigate = useNavigate();
   const { SignOut, user } = useContext(AuthContext);

   const onSuccess = () => {
      navigate("/property/login");
   }

   const handleLogout = () => {
      SignOut(onSuccess);
   };


   return (
      <div className="px-4 lg:px-32 py-12 flex flex-col gap-8">
         <div className="flex justify-between items-center">
            <h1 className="text-h4 lg:text-h3 font-bold font-nepali">हाम्रो प्रोपर्टीहरु</h1>
            <div className="flex items-center gap-8">
               <div className="hidden lg:block">
                  <p className="text-h6 font-medium">{`Welcome, ${user?.displayName || "Admin"}`}</p>
                  <p className="text-sm text-slate-600">{user?.email}</p>
               </div>

               <Button color="red" onClick={handleLogout}>
                  <MdOutlineLogout className="text-xl" />
               </Button>
            </div>
         </div>

         <div className="flex justify-end">
            <button className=""></button>
            <button onClick={() => navigate("/property/create")} className="px-4 py-2 border-2 rounded-md flex items-center gap-2 bg-brand-100 text-white font-semibold"><MdAdd className="text-2xl" /> Add Property </button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
               properties.map((property: PropertyExtended) => {
                  return (
                     <OurPropertyCard key={property.id} property={property} />
                  )
               })
            }
         </div>
      </div>
   );
};

export default Dashboard;
