import Icon from "/images/brand/icon.png"
import { FaFacebook, FaWhatsapp, FaViber } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Footer = () => {
   return (
      <footer className="bg-brand-100">
         <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="mb-6 md:mb-0 ">
                  <a href="/" className="flex items-center">
                     <img src={Icon} className="h-20 me-3" alt="FlowBite Logo" />
                     <span className="self-center font-revue text-2xl whitespace-nowrap dark:text-white">Indradhanush <br />  Investment Pvt. Ltd.</span>
                  </a>
                  <p className="mt-4 text-slate-300 text-sm font-light leading-8 tracking-wider">इन्द्रधनुष इन्भेष्टमेन्ट प्रा <span className="font-sans">.</span> लि<span className="font-sans">.</span> एक विश्वसनीय निवेशको व्यवसाय गर्दछ। घर जग्गा खरिद विक्री, सट्टापट्टा, प्लटिङ र निर्माण कार्य गर्न परेमा सम्पर्क गर्नुहोस।</p>
               </div>
               <div className="ml-40">
                  <h2 className="mb-6 text-normal font-semibold text-gray-900 uppercase dark:text-white font-nepali">उपयोगी लिंकहरु</h2>
                  <ul className="text-slate-300 text-sm font-light flex flex-col gap-2">
                     <li className="font-nepali tracking-wider">
                        इन्द्रधनुष इन्भेष्टमेन्ट प्रा <span className="font-sans">.</span> लि<span className="font-sans">.</span>
                     </li>
                     <li className="font-nepali tracking-wider">
                        पोखरा माहा नगर पालिका <span className="font-sans">-</span> २
                     </li>
                     <li className="font-nepali tracking-wider">
                        अर्चलबोट, पोखरा
                     </li>
                  </ul>
                  <br />
                  <ul className="text-slate-300 text-xl font-light flex gap-4">
                     <li className="hover:text-blue-300 duration-200"><a href=""><FaFacebook/></a></li>
                     <li className="hover:text-blue-400 duration-200"><a href=""><FaViber/></a></li>
                     <li className="hover:text-green-400 duration-200"><a href=""><FaWhatsapp/></a></li>
                  </ul>
               </div>
               <div className="ml-40">
                  <h2 className="mb-4 text-normal font-semibold text-gray-900 uppercase dark:text-white font-nepali">सम्पर्क ठेगाना </h2>
                  <ul className="text-slate-300 text-sm font-light flex flex-col gap-2">
                     <li className="font-nepali tracking-wider">
                        इन्द्रधनुष इन्भेष्टमेन्ट प्रा <span className="font-sans">.</span> लि<span className="font-sans">.</span>
                     </li>
                     <li className="font-nepali tracking-wider">
                        पोखरा माहा नगर पालिका <span className="font-sans">-</span> २
                     </li>
                     <li className="font-nepali tracking-wider">
                        अर्चलबोट, पोखरा
                     </li>
                     <br />
                     <li className="flex items-center gap-2">
                        <MdCall/>
                        <a href="tel:+977-61-560-560" className="hover:underline">+977-61-560-560</a>
                     </li>
                     <li className="flex items-center gap-2">
                        <MdCall/>
                        <a href="tel:+977-61-560-560" className="hover:underline">+977-61-560-560</a>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="mt-8 border-t border-gray-400 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
               <div className="text-sm text-gray-500 dark:text-gray-400">© 2021 Indradhanush Investment Pvt. Ltd. All rights reserved.</div>
               <div className="text-sm flex mt-4 md:mt-0">
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 me-8">Privacy Policy</a>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">Terms &amp; Conditions</a>
               </div>
            </div>
         </div>
      </footer>

   );
};

export default Footer;