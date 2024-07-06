import { useRef } from 'react';
import PropertyCard from '../common/PropertyCard';

import PorpertyImage from '/images/kapan-6.jpg';

const PropertyDetails = [
   {
      id: 1,
      title: 'बिक्रीमा जग्गा जमिन',
      location: 'काठमाडौं, नेपाल',
      price: 'रू १,००,००,०००',
      description: '5 Ropani 26+ Ft Road',
      owner: 'Chetan Phakami Pun',
      code: 'CI4DW6BB23',
      image: PorpertyImage,
   },
   {
      id: 2,
      title: 'बिक्रीमा जग्गा जमिन',
      location: 'काठमाडौं, नेपाल',
      price: 'रू १,००,००,०००',
      description: '5 Ropani 26+ Ft Road',
      owner: 'Chetan Phakami Pun',
      code: 'CI4DW6BB23',
      image: PorpertyImage,
   },

   {
      id: 3,
      title: 'बिक्रीमा जग्गा जमिन',
      location: 'काठमाडौं, नेपाल',
      price: 'रू १,००,००,०००',
      description: '5 Ropani 26+ Ft Road',
      owner: 'Chetan Phakami Pun',
      code: 'CI4DW6BB23',
      image: PorpertyImage,
   },
   {
      id: 4,
      title: 'बिक्रीमा जग्गा जमिन',
      location: 'काठमाडौं, नेपाल',
      price: 'रू १,००,००,०००',
      description: '5 Ropani 26+ Ft Road',
      owner: 'Chetan Phakami Pun',
      code: 'CI4DW6BB23',
      image: PorpertyImage,
   },
];

const Featured = () => {
   const scrollContainerRef = useRef(null);

   const handleClickNext = () => {
      const snapWidth =
         scrollContainerRef.current.querySelector('.snap-start').clientWidth;
      scrollContainerRef.current.scrollBy({
         left: snapWidth,
         behavior: 'smooth',
      });
   };

   const handleClickPrev = () => {
      const snapWidth =
         scrollContainerRef.current.querySelector('.snap-start').clientWidth;
      scrollContainerRef.current.scrollBy({
         left: -snapWidth,
         behavior: 'smooth',
      });
   };

   return (
      <section className="pb-20 lg:px-32">
         <div className="flex items-end justify-between py-8">
            <div className="flex flex-col gap-4 px-4 lg:px-0">
               <h2 className="font-nepali text-h3 font-bold tracking-tight after:font-bold lg:text-h2">
                  विशेष गरिएको
               </h2>
               <p className="font-nepali text-p tracking-wider lg:text-h6">
                  हाम्रा सबैभन्दा राम्रो र पैसा वसुल जग्गा जमिनहरु
               </p>
            </div>

            <div className="hidden items-center justify-between gap-4 lg:flex">
               <button
                  onClick={handleClickPrev}
                  className="rounded-full bg-brand-100 p-2 text-white"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                     />
                  </svg>
               </button>
               <button
                  onClick={handleClickNext}
                  className="rounded-full bg-brand-100 p-2 text-white"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                     />
                  </svg>
               </button>
            </div>
         </div>

         <div className="relative overflow-hidden">
            <div
               ref={scrollContainerRef}
               className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto"
            >
               {PropertyDetails &&
                  PropertyDetails.map((property) => (
                     <PropertyCard key={property.id} property={property} />
                  ))}
            </div>
         </div>
      </section>
   );
};

export default Featured;
