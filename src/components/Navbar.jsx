import Icon from '/images/brand/icon.png';

const Navbar = () => {
   return (
      <header className="flex w-full items-center justify-center bg-brand-100 px-1 py-4 lg:justify-between lg:px-32">
         <div className="flex items-center">
            <a href="/">
               <img
                  className="h-14 min-w-14 lg:h-20 lg:min-w-20"
                  src={Icon}
                  alt="icon"
               />
            </a>
            <div className="ml-4 lg:ml-6">
               <h1 className="font-revue text-[18px] tracking-tight text-white lg:text-h4">
                  INDRADHANUSH INVESTMENT PVT. LTD.
               </h1>
               <hr className="mb-2" />
               <p className="font-nepali text-[12px] font-thin tracking-wider text-white lg:text-p">
                  भरपर्दो जग्गा जमिन को खोजिमा हामीलाई सम्झिनु होस्।
                  {/* TODO: change this tagline */}
               </p>
            </div>
         </div>
         <nav className="hidden lg:block">
            <ul className="flex space-x-8 text-white">
               <li className="text-md font-nepali font-normal tracking-wide">
                  हाम्रा सेवाहरु
               </li>
               <li className="text-md font-nepali font-normal tracking-wide">
                  कार्यकर्ता
               </li>
               <li className="text-md font-nepali font-normal tracking-wide">
                  सम्पर्क
               </li>
               <li className="text-md font-nepali font-normal tracking-wide">
                  संस्था जानकारी
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
