import companyLogo from '/images/brand/icon.png';

const logos = [
   { src: companyLogo, alt: 'Company Logo' },
   { src: companyLogo, alt: 'BlackBerry' },
   { src: companyLogo, alt: 'Nokia' },
   { src: companyLogo, alt: 'Samsung' },
   { src: companyLogo, alt: 'Sony' },
   { src: companyLogo, alt: 'Toshiba' },
   { src: companyLogo, alt: 'Virgin' },
];

const SideScrolling = () => {
   return (
      <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
         <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 lg:[&_li]:mx-16">
            {logos.map((logo, index) => (
               <li key={index}>
                  <img
                     className="h-auto w-16 lg:w-24"
                     src={logo.src}
                     alt={logo.alt}
                  />
               </li>
            ))}
         </ul>
         <ul
            className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 lg:[&_li]:mx-16"
            aria-hidden="true"
         >
            {logos.map((logo, index) => (
               <li key={index}>
                  <img
                     className="h-auto w-16 lg:w-24"
                     src={logo.src}
                     alt={logo.alt}
                  />
               </li>
            ))}
         </ul>
         <ul
            className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 lg:[&_li]:mx-16"
            aria-hidden="true"
         >
            {logos.map((logo, index) => (
               <li key={index}>
                  <img
                     className="h-auto w-16 lg:w-24"
                     src={logo.src}
                     alt={logo.alt}
                  />
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SideScrolling;
