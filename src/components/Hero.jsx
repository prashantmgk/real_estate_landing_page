import HeroImage from "../../public/images/kapan-6.jpg";

const Hero = () => {
  return (
    <section className="w-full h-[80vh] relative">
      <img
        src={HeroImage}
        alt="hero image"
        className="w-full h-full object-cover object-center absolute"
      />
      <div className="absolute w-full h-full bg-gradient-to-tl from-slate-800">
        <div className="container mx-auto h-full flex justify-evenly items-center">
          <div>
            <h1 className="font-nepali font-bold lg:text-h1 text-white text-start">
            इन्द्रधनुष इन्भेष्टमेन्ट प्रा<span className="font-mono">.</span> लि<span className="font-mono">.</span>
            </h1>
            <p className="text-white text-p text-start mt-4">
            पोखराको रमाइलो दृश्य र शान्त वातावरणमा आफ्नो सपनाको घर खोज्दै हुनुहुन्छ? <br /> हामी तपाईंलाई सहयोग गर्छौं! सही मूल्यमा
            </p>
            <p className="text-white text-p text-start mt-4">
            पोखराको रमाइलो दृश्य र शान्त वातावरणमा आफ्नो सपनाको घर खोज्दै हुनुहुन्छ? <br /> हामी तपाईंलाई सहयोग गर्छौं! सही मूल्यमा, तपाईंको लागि उपयुक्त सम्पत्ति खोज्न<br /> हामी यहाँ छौँ। सम्पर्क गर्नुहोस्!
            </p>
          </div>
          <div>
            <button className="bg-white text-emerald-800 px-4 py-2 rounded-md">
              Explore
            </button>
            <button className="bg-white text-emerald-800 px-4 py-2 rounded-md ml-4">
              Contact
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
