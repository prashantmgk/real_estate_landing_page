import Asus from "/images/logos/asus.svg"
import BlackBerry from "/images/logos/blackberry.svg"
import Nokia from "/images/logos/nokia.svg"
import Samsung from "/images/logos/samsung.svg"
import Sony from "/images/logos/sony.svg"
import Toshiba from "/images/logos/toshiba.svg"
import Virgin from "/images/logos/virgin.svg"

const logos = [
   { src: Asus, alt: 'Asus' },
   { src: BlackBerry, alt: 'BlackBerry' },
   { src: Nokia, alt: 'Nokia' },
   { src: Samsung, alt: 'Samsung' },
   { src: Sony, alt: 'Sony' },
   { src: Toshiba, alt: 'Toshiba' },
   { src: Virgin, alt: 'Virgin' },
]

const SideScrolling = () => {
   return (
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
         <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll">
            {logos.map((logo, index) => (
               <li key={index}>
                  <img className="w-16 h-auto" src={logo.src} alt={logo.alt} />
               </li>
            ))}
         </ul>
         <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {logos.map((logo, index) => (
               <li key={index}>
                  <img className="w-24 h-auto" src={logo.src} alt={logo.alt} />
               </li>
            ))}
         </ul>
         <ul className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {logos.map((logo, index) => (
               <li key={index}>
                  <img className="w-24 h-auto" src={logo.src} alt={logo.alt} />
               </li>
            ))}
         </ul>
      </div>
   )
}

export default SideScrolling