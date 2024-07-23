import Team from '/images/Team.jpeg';

const WhyChooseUs = () => {
   return (
      <section className="px-4 py-20 lg:px-32">
         <h2 className="pb-16 text-center font-nepali text-h3 font-bold tracking-tight lg:text-h2">
            हाम्रो बिशेषता
         </h2>
         <div className="flex flex-col-reverse gap-16 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-6 lg:w-1/2">
               <h4 className="font-nepali text-h4 font-semibold lg:text-h3">
                  हजुरको जग्गा बिक्रि, खरिद तथा <br /> लगानी साहायक।
               </h4>
               <p className="text-justify font-nepali text-p leading-8">
                  लोकप्रिय विश्वासको विपरीत, लोरेम इप्सम केवल अनियमित पाठ होइन।
                  यसको जरा ईसा पूर्वको शास्त्रीय ल्याटिन साहित्यको टुक्रामा छ,
                  यसले यसलाई वर्ष भन्दा पुरानो बनाउँछ।
                  <br />
                  <br /> भर्जिनियाको ह्याम्पडेन-सिडनी कलेजका ल्याटिन प्रोफेसर
                  रिचर्ड म्याकक्लिन्टकले लोरेम इप्सम खण्डबाट थप अस्पष्ट ल्याटिन
                  शब्दहरू मध्ये एक कन्सेक्टुर खोजे र शास्त्रीय साहित्यमा यस
                  शब्दको उद्धृतहरू मार्फत जाँदा शंका गर्न नसकिने स्रोत पत्ता
                  लगाए। कन्सेक्टुर खोजे र शास्त्रीय साहित्यमा यस शब्दको
                  उद्धृतहरू मार्फत जाँदा शंका गर्न नसकिने स्रोत पत्ता लगाए।{' '}
               </p>
               <div className="grid h-full w-full grid-cols-3 items-center justify-center bg-brand-100 text-white">
                  <div className="text-center">
                     <h4 className="font-nepali text-h4 font-semibold">
                        ६<span className="font-serif">+</span>
                     </h4>
                     <p className="font-nepali font-extralight">वर्षको अनुभव</p>
                  </div>
                  <div className="text-center">
                     <h4 className="font-nepali text-h4 font-semibold">
                        १४ <span className="font-serif">+</span>
                     </h4>
                     <p className="font-nepali font-extralight">
                        घर / जग्गा बिक्रि{' '}
                     </p>
                  </div>
                  <div className="text-center">
                     <h4 className="font-nepali text-h4 font-semibold">
                        २३<span className="font-serif">+</span>
                     </h4>
                     <p className="font-nepali font-extralight">
                        क्षेत्रमा लगानी{' '}
                     </p>
                  </div>
               </div>
            </div>
            <div className="h-[32rem] lg:w-1/2">
               <img className="h-full w-full object-cover" src={Team} />
            </div>
         </div>
      </section>
   );
};

export default WhyChooseUs;
