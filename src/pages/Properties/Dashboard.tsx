import React from "react";
import { SignOut } from "../../auth/services/AuthService";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdAdd } from "react-icons/md";

import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

import PorpertyImage from '/images/kapan-6.jpg'

const facilites: string[] = [
   "Earthquake", "Electricity", "Water", "Supply", "Telephone", "Internet", "Drainage", "Solar", "Water"
]

const OurPropertyCard = () => {
   return (
      <div className="border-2 border-slate-200 rounded-md overflow-hidden">
         <img src={PorpertyImage} alt="property image" className="min-h-48 object-cover" />
         <div className="flex flex-col m-4 gap-4">
            <div className="flex justify-between items-center">
               <h3 className="font-semibold text-h6">
                  Nerf was her dog too
               </h3>

               <h3 className="font-bold font-nepali text-nowrap ">
                  रू १०,००,०००
               </h3>
            </div>
            <div className="facilities flex overflow-hidden">
               {
                  facilites.map((facility) => {
                     return (
                        <div className="rounded-xl bg-blue-200 inline-block px-4 py-1 mr-2 text-xs text-slate-700">
                           {facility}
                        </div>
                     )
                  })
               }
            </div>
            <p className="text-xs text-slate-600 leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ducimus dicta incidunt magni quae consequuntur aliquid eaque incidunt magni quae consequuntur aliquid eaque incidunt magni quae consequuntur aliquid eaque incidunt magni quae consequuntur aliquid eaque...</p>


            <div className="flex gap-2 justify-end float-end">
               <button className="px-4 py-2 border-2 rounded-md flex items-center gap-2 bg-red-400 text-white font-semibold">Delete <MdDeleteOutline /></button>
               <button className="px-4 py-2 border-2 rounded-md flex items-center gap-2 bg-blue-400 text-white font-semibold">Edit <MdOutlineModeEditOutline /></button>
            </div>

         </div>
      </div>
   );
}

const Dashboard = () => {

   const navigate = useNavigate();
   const { SignOut, user } = useContext(AuthContext);

   const onSuccess = () => {
      navigate("/property/login");
   }

   const handleLogout = () => {
      SignOut(onSuccess);
   };

   const propertyList = () => {
      let properties: React.JSX.Element[] = []
      for (let i = 0; i < 10; i++) {
         properties.push(<OurPropertyCard key={i} />)
      }
      return properties
   }

   return (
      <div className="lg:px-32 py-12 flex flex-col gap-8">
         <div className="flex justify-between items-center">
            <h1 className="text-h3 font-bold font-nepali">हाम्रो प्रोपर्टीहरु</h1>
            <div className="flex gap-8">
               <div>
                  <p className="text-h6 font-medium">{`Welcome, ${user?.displayName || "Admin"}`}</p>
                  <p className="text-sm text-slate-600">{user?.email}</p>
               </div>

               <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded-md">
                  logout
               </button>
            </div>
         </div>

         <div className="flex justify-end">
            <button className=""></button>
            <button onClick={() => navigate("/property/create")} className="px-4 py-2 border-2 rounded-md flex items-center gap-2 bg-brand-100 text-white font-semibold"><MdAdd className="text-2xl" /> Add Property </button>
         </div>
         <div className="grid grid-cols-3 gap-6">
            {propertyList()}  {/* TODO: why does it behave like this */}
         </div>
      </div>
   );
};

export default Dashboard;
