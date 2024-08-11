import React, { useEffect } from 'react'
import { Carousel } from 'react-carousel-minimal';
import { PropertyExtended } from '../types/types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../auth/BaseConfig';
import { FaTags, FaPhone, FaBed, FaBuilding, FaUtensils, FaCouch, FaBath, FaPencilRuler, FaCompass } from "react-icons/fa";

const PropertyDetails = () => {
   const docRef = doc(db, "properties", "5HO6FFdEw44J3wxrjxZ6");
   const [property, setProperty] = React.useState<PropertyExtended | null>(null);

   useEffect(() => {
      const getProperty = async () => {
         const docSnap = await getDoc(docRef);
         setProperty(docSnap.data() as PropertyExtended);
         console.log(docSnap.data());
      }
      getProperty();
   }, []);


   return (
      <div className='mx-8 lg:mx-48 my-8 flex justify-center flex-col gap-8'>
         <h1 className='text-3xl font-semibold'>{property?.title}</h1>
         <ImageGallery images={property?.images} />
         <div className='flex justify-between'>
            <div>
               <div className='flex justify-start items-center gap-2'>
                  <FaTags className='text-2xl text-green-600 pt-1' />
                  <h2 className='text-2xl font-semibold '>रू {property?.priceInNumber?.toLocaleString('en-IN')} /-</h2>
               </div>
               <h3 className='text-lg font-medium mt-4'>{property?.priceInWords}</h3>
            </div>

            <div className='flex flex-col items-end gap-2'>
               <h2 className='text-lg font-medium'>{property?.address}, {property?.district}</h2>
               <div className='flex items-center gap-2'>
                  <FaPhone />
                  <h3 className='text-md'><a href={`tel:${property?.phone}`}>{property?.phone}</a></h3>
               </div>
            </div>
         </div>
         <hr />
         <div>
            <h2 className='text-xl font-semibold mb-4'>Estate Details</h2>

            <div className='grid grid-cols-3 lg:grid-cols-5 gap-y-8'>
               <div className='flex flex-col items-center'>
                  <FaBuilding className='text-3xl text-blue-400' />
                  <h2 className='text-sm font-medium text-gray-500 mb-4'>{property?.floors} Floors</h2>
               </div>
               <div className='flex flex-col items-center'>
                  <FaBed className='text-3xl text-blue-400' />
                  <h2 className='text-sm font-medium text-gray-500 mb-4'>{property?.beds} Beds</h2>
               </div>

               <div className='flex flex-col items-center'>
                  <FaUtensils className='text-3xl text-blue-400' />
                  <h2 className='text-sm font-medium text-gray-500 mb-4'>{property?.kitchen} Kitchen</h2>
               </div>

               <div className='flex flex-col items-center'>
                  <FaCouch className='text-3xl text-blue-400' />
                  <h2 className='text-sm font-medium text-gray-500 mb-4 whitespace-nowrap'>{property?.living} Living Rooms</h2>
               </div>

               <div className='flex flex-col items-center'>
                  <FaBath className='text-3xl text-blue-400' />
                  <h2 className='text-sm font-medium text-gray-500 mb-4 whitespace-nowrap'>{property?.bath} Bathrooms</h2>
               </div>

               <div className='flex flex-col items-center'>
                  <FaPencilRuler className='text-3xl text-blue-400' />
                  <h2 className='text-sm text-gray-500 whitespace-nowrap my-1'>Area</h2>
                  <h2 className='text-sm font-medium text-gray-500 whitespace-nowrap'>{property?.measurement} {property?.area}</h2>
               </div>

               <div className='flex flex-col items-center'>
                  <FaBath className='text-3xl text-blue-400' />
                  <h2 className='text-sm text-gray-500 whitespace-nowrap my-1'>Property Type</h2>
                  <h2 className='text-sm font-medium text-gray-500 whitespace-nowrap'>{property?.propertyType}</h2>
               </div>


               <div className='flex flex-col items-center'>
                  <FaBath className='text-3xl text-blue-400' />
                  <h2 className='text-sm text-gray-500 whitespace-nowrap my-1'>Furnishing</h2>
                  <h2 className='text-sm font-medium text-gray-500 whitespace-nowrap'>{property?.furnishing}</h2>
               </div>

               <div className='flex flex-col items-center'>
                  <FaCompass className='text-3xl text-blue-400' />
                  <h2 className='text-sm text-gray-500 whitespace-nowrap my-1'>Faced</h2>
                  <h2 className='text-sm font-medium text-gray-500 whitespace-nowrap'>{property?.faceTowards}</h2>
               </div>

               <div className='flex flex-col items-center'>
                  <FaBath className='text-3xl text-blue-400' />
                  <h2 className='text-sm text-gray-500 whitespace-nowrap my-1'>Building Type</h2>
                  <h2 className='text-sm font-medium text-gray-500 whitespace-nowrap'>{property?.buildingType}</h2>
               </div>
            </div>
         </div>
         <div>
            <h2 className='text-xl font-semibold mb-4'>Description</h2>
            <p className='text-slate-600'>{property?.description}</p>
         </div>
      </div >
   )
}

export default PropertyDetails;

export const ImageGallery = ({ images }) => {

   const dataImage = images?.map(image => ({
      image: image,
      caption: ""
   }));

   const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
   }
   const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
   }
   return (
      <div>
         {
            images &&
            <Carousel
               data={dataImage}
               time={2000}
               width="100%"
               height="540px"
               radius="10px"
               slideNumber={true}
               slideNumberStyle={slideNumberStyle}
               automatic={true}
               dots={true}
               pauseIconColor="white"
               pauseIconSize="40px"
               slideBackgroundColor="darkgrey"
               slideImageFit="cover"
               thumbnails={true}
               thumbnailWidth="160px"
               style={{
                  textAlign: "center",
               }}
            />
         }

      </div>
   );
}

