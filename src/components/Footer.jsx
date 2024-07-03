import Icon from '/images/brand/icon.png';
import { FaFacebook, FaWhatsapp, FaViber, FaYoutube } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';

const Footer = () => {
   return (
      <footer className="footer bg-brand-100">
         <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
               <div className="mb-6 md:mb-0">
                  <a href="/" className="flex items-center">
                     <img
                        src={Icon}
                        className="me-3 h-20"
                        alt="FlowBite Logo"
                     />
                     <span className="self-center whitespace-nowrap font-revue text-2xl dark:text-white">
                        Indradhanush <br /> Investment Pvt. Ltd.
                     </span>
                  </a>
                  <p className="mt-4 text-sm font-light leading-8 tracking-wider text-slate-300">
                     इन्द्रधनुष इन्भेष्टमेन्ट प्रा{' '}
                     <span className="font-sans">.</span> लि
                     <span className="font-sans">.</span> एक विश्वसनीय निवेशको
                     व्यवसाय गर्दछ। घर जग्गा खरिद विक्री, सट्टापट्टा, प्लटिङ र
                     निर्माण कार्य गर्न परेमा सम्पर्क गर्नुहोस।
                  </p>
               </div>
               <div className="ml-40">
                  <h2 className="text-normal mb-6 font-nepali font-semibold uppercase text-gray-900 dark:text-white">
                     उपयोगी लिंकहरु
                  </h2>
                  <ul className="flex flex-col gap-2 text-sm font-light text-slate-300">
                     <li className="font-nepali tracking-wider">
                        इन्द्रधनुष इन्भेष्टमेन्ट प्रा{' '}
                        <span className="font-sans">.</span> लि
                        <span className="font-sans">.</span>
                     </li>
                     <li className="font-nepali tracking-wider">
                        पोखरा माहा नगर पालिका{' '}
                        <span className="font-sans">-</span> २
                     </li>
                     <li className="font-nepali tracking-wider">
                        अर्चलबोट, पोखरा
                     </li>
                  </ul>
                  <br />
                  <ul className="flex gap-4 text-xl font-light text-slate-300">
                     <li className="duration-200 hover:text-blue-300">
                        <a
                           target="_blank"
                           href="https://www.facebook.com/profile.php?id=61557708607039"
                        >
                           <FaFacebook />
                        </a>
                     </li>
                     <li className="duration-200 hover:text-blue-400">
                        <a href="">
                           <FaViber />
                        </a>
                     </li>
                     <li className="duration-200 hover:text-green-400">
                        <a href="">
                           <FaWhatsapp />
                        </a>
                     </li>
                     <li className="duration-200 hover:text-green-400">
                        <a
                           target="_blank"
                           href="https://www.youtube.com/watch?v=wuLXoyPFFJY&ab_channel=KrishnaPrasadGautam"
                        >
                           <FaYoutube />
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="ml-40">
                  <h2 className="text-normal mb-4 font-nepali font-semibold uppercase text-gray-900 dark:text-white">
                     सम्पर्क ठेगाना{' '}
                  </h2>
                  <ul className="flex flex-col gap-2 text-sm font-light text-slate-300">
                     <li className="font-nepali tracking-wider">
                        इन्द्रधनुष इन्भेष्टमेन्ट प्रा{' '}
                        <span className="font-sans">.</span> लि
                        <span className="font-sans">.</span>
                     </li>
                     <li className="font-nepali tracking-wider">
                        पोखरा माहा नगर पालिका{' '}
                        <span className="font-sans">-</span> २
                     </li>
                     <li className="font-nepali tracking-wider">
                        अर्चलबोट, पोखरा
                     </li>
                     <br />
                     <li className="flex items-center gap-2">
                        <MdCall />
                        <a
                           href="tel:+977-9856039529"
                           className="hover:underline"
                        >
                           +977-9856039529
                        </a>
                     </li>
                     <li className="flex items-center gap-2">
                        <MdCall />
                        <a
                           href="tel:+977-9863066196"
                           className="hover:underline"
                        >
                           +977-9863066196
                        </a>
                     </li>
                     <li className="flex items-center gap-2">
                        <MdCall />
                        <a
                           href="tel:+977-9805847602"
                           className="hover:underline"
                        >
                           +977-9805847602
                        </a>
                     </li>
                     <li className="flex items-center gap-2">
                        <MdCall />
                        <a
                           href="tel:+977-9846034768"
                           className="hover:underline"
                        >
                           +977-9846034768
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="mt-8 flex flex-col border-t border-gray-400 pt-6 md:flex-row md:items-center md:justify-between">
               <div className="text-sm text-gray-500 dark:text-gray-400">
                  © 2024 Indradhanush Investment Pvt. Ltd. All rights reserved.
               </div>
               <div className="mt-4 flex text-sm md:mt-0">
                  <a
                     href="#"
                     className="me-8 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                     Privacy Policy
                  </a>
                  <a
                     href="#"
                     className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                     Terms &amp; Conditions
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
