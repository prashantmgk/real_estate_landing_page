import React from 'react';
import { PropertyExtended } from '../types/types';

const PropertyCard = ({ property }: { property: PropertyExtended }) => {
   return (
      <figure className="relative h-96 w-96 flex-shrink-0 snap-start items-center text-white">
         <a href={`/details/${property.id}`} className="h-full w-full">
            <img
               className="h-full w-full object-cover"
               src={property.images[0]}
               alt="property"
            />
         </a>
         <p className="color-white absolute right-0 top-0 z-10 m-4 rounded-full bg-lime-700 px-3 pb-1 pt-2 ">
            {`रू ${property.priceInNumber.toLocaleString('en-IN')}`}
         </p>
         <figcaption>
            <main>
               <h4 className=" text-h4 font-semibold">
                  {property.title}
               </h4>
               <h6 className=" text-h6 font-extralight">
                  {property.address}{' '}
               </h6>
               <p className="font-light">{`${property.measurement} ${property.area}`}  </p>
               <div className="mt-2 flex justify-between text-xs font-extralight tracking-wide">
                  <p>{property.buildingType}</p>
                  <p>{property.propertyType}</p>
               </div>
            </main>
         </figcaption>
      </figure>
   );
};

export default PropertyCard;
