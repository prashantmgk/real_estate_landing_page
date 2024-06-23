
import House from '/images/house.png';
import { LuCheckCircle } from "react-icons/lu";

const services = [
   "घर जग्गा खरिद विक्री, सट्टापट्टा, प्लटिङ र निर्माण कार्य गर्ने।",
   "निर्माण कार्यमा - घर, बाटो, पुल आदिको तयार गरि सेवा प्रदान गर्ने।",
   "दक्ष्य जनशक्ति तयार तथा क्षमता अभिवृद्धिको कार्य गर्ने।",
   "शिक्षा, स्वास्थय लगायत उत्पादनशिल पर्यटन, यातायात, ट्रेडिङ उद्योग व्यवसायमा लगानी गर्ने।",
   "विभिन्न कृषि तथा पशुपालनमा लगानी तथा उत्पादित बस्तुहरुको बजारीकरण गर्ने।",
   "स्वदेशी वा विदेशी वित्तिय बैंक वा संघ संस्थाबाट थोक कर्जा लिई लगानी गर्ने।",
]

const OurServices = () => {
   return (
      <section className="lg:px-32 pb-20 py-8">
         < h2 className="text-center font-bold text-h2 font-nepali tracking-tight" > हाम्रा सेवाहरु </h2>
         <div className="flex justify-between gap-16">
            <div className='w-1/2 h-[32rem]'>
               <img className='w-full h-full object-cover transform ' src={House} />
            </div>

            <div className='w-1/2 flex justify-center flex-col gap-6'>
               <p className='font-nepali text-sm tracking-wider text-slate-600'>
                  इन्द्रधनुष इन्भेष्टमेन्ट लिमिटेडले विभिन्न वित्तीय।
               </p>
               <h4 className='font-nepali font-semibold text-h3'>इन्द्रधनुष इन्भेष्टमेन्टद्वारा प्रस्तुत <br />गरिएका सेवाहरु।</h4>
               <ul className='flex flex-col gap-4'>
                  {
                     services && services.map((service, index) => (
                        <li key={index} className='flex gap-4 items-center'>
                           <LuCheckCircle className='text-accent-100 text-xl'/>
                           <p className='font-nepali tracking-wide text-p'>{service}</p>
                        </li>
                     ))
                  }
                  
               </ul>
            </div>
         </div>
      </section>
   )
};

export default OurServices;
