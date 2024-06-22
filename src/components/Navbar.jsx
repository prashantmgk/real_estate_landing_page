import Icon from "/images/brand/icon.png";

const Navbar = () => {
  return (
    <header className="bg-brand-100 w-full flex justify-between items-center lg:px-32 py-4">
      <div className="flex items-center">
        <a href="/">
          <img className="h-20 w-20" src={Icon} alt="icon" />
        </a>
        <div className="ml-6">
          <h1 className="text-white text-h4 font-revue tracking-tight">
            INDRADHANUSH INVESTMENT PVT. LTD.
          </h1>
          <hr className="mb-2" />
          <p className="text-white text-p font-nepali font-thin tracking-wider">
            भरपर्दो जग्गा जमिन को खोजिमा हामीलाई सम्झिनु होस्।
            {/* TODO: change this tagline */}
          </p>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-8 text-white">
          <li className="text-md font-normal tracking-wide font-nepali">
            हाम्रा सेवाहरु
          </li>
          <li className="text-md font-normal tracking-wide font-nepali">
            कार्यकर्ता
          </li>
          <li className="text-md font-normal tracking-wide font-nepali">
            हाम्रा सेवाहरु
          </li>
          <li className="text-md font-normal tracking-wide font-nepali">
            सम्पर्क
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
