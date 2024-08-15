import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-carousel-minimal';
import { PropertyExtended } from '../types/types';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../auth/BaseConfig';
import { FaTags, FaPhone, FaBed, FaBuilding, FaUtensils, FaCouch, FaBath, FaPencilRuler, FaCompass, FaArrowLeft } from "react-icons/fa";
import { MdCheckBox } from "react-icons/md";
import LocationMap from '../common/map/LocationMap';
import { useParams } from 'react-router-dom';
import { Button } from '@mantine/core';
import OurPropertyCard from '../components/PropertyCard';

const PropertyDetails = () => {
   const { userId } = useParams();
   const docRef = doc(collection(db, "properties"), userId);

   const propertyCollectionRef = collection(db, "properties");
   const [property, setProperty] = React.useState<PropertyExtended | null>(null);
   const [properties, setProperties] = useState<PropertyExtended[]>([]);

   let latAndLng;

   useEffect(() => {
      const getProperty = async () => {
         const docSnap = await getDoc(docRef);
         setProperty(docSnap.data() as PropertyExtended);
         console.log(docSnap.data());
      }
      getProperty();
   }, []);

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

   if (property) {
      console.log(latAndLng, " before");
      latAndLng = [property.location?.lat ?? 27.700769, property.location?.lng ?? 85.3240];
      console.log([property.location?.lat, property.location?.lng]);
      console.log(latAndLng, " after");
   }

   return (
      <div className='flex justify-center flex-col lg:flex-row gap-8'>
         <div className='flex justify-center flex-col gap-8 bg-slate-100 w-full lg:w-3/5 px-4 lg:px-10  py-8'>
            <div className="flex justify-between">
               <h1 className='text-3xl font-semibold text-brand-100'>{property?.title}</h1>
               <Button color="blue" onClick={() => window.history.back()}><FaArrowLeft /> &nbsp; &nbsp; फिर्ता जानुहोस्
               </Button>
            </div>
            <ImageGallery images={property?.images} />
            <div className='flex flex-col lg:flex-row justify-between'>
               <div>
                  <div className='flex justify-start items-center gap-2'>
                     <FaTags className='text-2xl text-green-600 pt-1' />
                     <h2 className='text-2xl font-semibold '>रू {property?.priceInNumber?.toLocaleString('en-IN')} /-</h2>
                  </div>
                  <h3 className='text-lg font-medium mt-4'>{property?.priceInWords}</h3>
               </div>

               <div className='flex flex-col items-start lg:items-end gap-2'>
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
            <div className='w-full '>
               <h2 className='text-xl font-semibold mb-4'>Facilites</h2>
               <ul
                  className='grid grid-cols-2 md:grid-cols-4 gap-y-4 max-h-40 overflow-y-scroll scrollbar-hide'
               >
                  {

                     property?.facilities.map((facility, index) => {
                        return (
                           <div key={`${facility} - ${index}`} className='flex items-center gap-1'>
                              <MdCheckBox className='pt-1 text-2xl text-accent-100' />
                              <li className=' text-md font-medium text-slate-800' >{facility}</li>
                           </div>
                        )
                     })
                  }
               </ul>
            </div>
            <div>
               <h2 className='text-xl font-semibold mb-4'>Description</h2>
               <p className='text-slate-700'>{property?.description}</p>
            </div>
            <div>
               <h2 className='text-xl font-semibold mb-4'>Map Location</h2>
               {
                  latAndLng && (
                     <>
                        <LocationMap position={latAndLng} draggable={false} />
                        <h3 className='font-semibold text-base text-slate-500 inline-block mt-2' >Address :</h3> <span style={{ color: 'blue', fontStyle: 'italic', fontSize: '14px' }}>{property?.address} </span>
                     </>
                  )
               }
            </div>
            <div className='w-full lg:w-9/12'>
               <video src={property?.videos} controls />
            </div>
         </div >
         <div className="py-8">
            <h2 className="text-start text-h5 font-semibold text-slate-600 tracking-tight lg:text-h4 px-6">
               अन्य प्रोपर्टीहरु
            </h2>
            <hr />
            {
               properties.map((property: PropertyExtended, index: number) => {
                  if (property.id === userId || index === 4) {
                     return null;
                  }
                  return (
                     <div className='w-full lg:w-96 my-6 px-6 lg:px-2'>
                        <OurPropertyCard key={property.id} property={property} removeDelete={true} />
                     </div>
                  )
               })
            }
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

