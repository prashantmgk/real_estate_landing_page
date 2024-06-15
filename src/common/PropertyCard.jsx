/* eslint-disable react/prop-types */


const PropertyCard = ({property}) => {
   return (
      <figure className="snap-start relative items-center w-96 h-96 flex-shrink-0 text-white">
         <a href="/" className="w-full h-full"><img className="w-full h-full object-cover" src={property.image} alt="property" /></a>
         <p className="absolute top-0 right-0 px-3 pt-2 pb-1 m-4 bg-lime-700 rounded-full color-white z-10 font-nepali" >{property.price}</p>
         <figcaption>
            <main>
               <h4 className="font-nepali text-h4 font-semibold">{property.title}</h4>
               <h6 className="font-nepali text-h6 font-extralight">{property.location} </h6>
               <p className="font-light">{property.description} </p>
               <div className="flex justify-between text-xs mt-2 font-extralight tracking-wide">
                  <p>{property.owner}</p>
                  <p>{property.code}</p>
               </div>
            </main>
         </figcaption>
      </figure>
   )
}

export default PropertyCard