import Team from '../../public/images/Team.jpeg'


const WhyChooseUs = () => {
   return (
      <section className="lg:px-32 py-20">
      <h2 className="font-bold text-h2 font-nepali tracking-tight text-center pb-16">हाम्रो बिशेषता</h2>
         <div className="flex justify-between gap-16">
            <div className='w-1/2 flex flex-col gap-6'>
               <h4 className='font-nepali font-semibold text-h3'>हजुरको जग्गा बिक्रि, खरिद तथा <br /> लगानी  साहायक।</h4>
               <p className='font-nepali text-p text-justify leading-8'>लोकप्रिय विश्वासको विपरीत, लोरेम इप्सम केवल अनियमित पाठ होइन। यसको जरा ईसा पूर्वको शास्त्रीय ल्याटिन साहित्यको टुक्रामा छ, यसले यसलाई वर्ष भन्दा पुरानो बनाउँछ।<br /><br /> भर्जिनियाको ह्याम्पडेन-सिडनी कलेजका ल्याटिन प्रोफेसर रिचर्ड म्याकक्लिन्टकले लोरेम इप्सम खण्डबाट थप अस्पष्ट ल्याटिन शब्दहरू मध्ये एक कन्सेक्टुर खोजे र शास्त्रीय साहित्यमा यस शब्दको उद्धृतहरू मार्फत जाँदा शंका गर्न नसकिने स्रोत पत्ता लगाए। कन्सेक्टुर खोजे र शास्त्रीय साहित्यमा यस शब्दको उद्धृतहरू मार्फत जाँदा शंका गर्न नसकिने स्रोत पत्ता लगाए। </p>
               <div className='bg-brand-100 text-white w-full h-full grid grid-cols-3 justify-center items-center'>
                  <div className='text-center'>
                     <h4 className='font-nepali text-h4 font-semibold'>४०<span className='font-serif'>+</span></h4>
                     <p className='font-nepali font-extralight'>वर्षको अनुभव</p>
                  </div>
                  <div className='text-center'>
                     <h4 className='font-nepali text-h4 font-semibold'>१४ <span className='font-serif'>+</span></h4>
                     <p className='font-nepali font-extralight'>जग्गा बिक्रि </p>
                  </div>
                  <div className='text-center'>
                     <h4 className='font-nepali text-h4 font-semibold'>२३<span className='font-serif'>+</span></h4>
                     <p className='font-nepali font-extralight'>क्षेत्रमा लगानी </p>
                  </div>
               </div>
            </div>
            <div className='w-1/2 h-[32rem]'>
               <img className='w-full h-full object-cover ' src={Team} />
            </div>
         </div>
      </section>
   )
}

export default WhyChooseUs