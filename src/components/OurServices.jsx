import House from '/images/house.png';
import { LuCheckCircle } from 'react-icons/lu';

const services = [
   'घर जग्गा खरिद विक्री, सट्टापट्टा, प्लटिङ र निर्माण कार्य गर्ने।',
   'निर्माण कार्यमा - घर, बाटो, पुल आदिको तयार गरि सेवा प्रदान गर्ने।',
   'दक्ष्य जनशक्ति तयार तथा क्षमता अभिवृद्धिको कार्य गर्ने।',
   'शिक्षा, स्वास्थय लगायत उत्पादनशिल पर्यटन, यातायात, ट्रेडिङ उद्योग व्यवसायमा लगानी गर्ने।',
   'विभिन्न कृषि तथा पशुपालनमा लगानी तथा उत्पादित बस्तुहरुको बजारीकरण गर्ने।',
   'स्वदेशी वा विदेशी वित्तिय बैंक वा संघ संस्थाबाट थोक कर्जा लिई लगानी गर्ने।',
];

const OurServices = () => {
   return (
      <section className="px-4 py-8 pb-20 lg:px-32">
         <h2 className="text-center font-nepali text-h3 font-bold tracking-tight lg:text-h2">
            {' '}
            हाम्रा सेवाहरु{' '}
         </h2>
         <div className="flex flex-col gap-16 lg:lg:flex-row lg:justify-between">
            <div className="h-[24rem] lg:h-[32rem] lg:w-1/2">
               <img
                  className="h-full w-full transform object-cover"
                  src={House}
               />
            </div>

            <div className="flex flex-col justify-center gap-6 lg:w-1/2">
               <p className="font-nepali text-sm tracking-wider text-slate-600">
                  इन्द्रधनुष इन्भेष्टमेन्ट लिमिटेडले विभिन्न वित्तीय।
               </p>
               <h4 className="font-nepali text-h4 font-semibold lg:text-h3">
                  इन्द्रधनुष इन्भेष्टमेन्टद्वारा प्रस्तुत <br />
                  गरिएका सेवाहरु।
               </h4>
               <ul className="flex flex-col gap-4">
                  {services &&
                     services.map((service, index) => (
                        <li key={index} className="flex items-center gap-4">
                           <LuCheckCircle className="text-xl text-accent-100" />
                           <p className="font-nepali text-p tracking-wide">
                              {service}
                           </p>
                        </li>
                     ))}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default OurServices;
