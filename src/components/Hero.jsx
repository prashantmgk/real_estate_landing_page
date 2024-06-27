import House from '/images/hero/house.jpg';
import Money from '/images/hero/money.jpg';
import LandPlot from '/images/hero/land_plot.jpg';

import { FaViber, FaWhatsapp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {
   Autoplay,
   Pagination,
   Navigation,
   EffectCreative,
} from 'swiper/modules';
const Hero = () => {
   return (
      <section className="relative h-[85vh] w-full p-4">
         <Swiper
            // grabCursor={true}
            effect={'creative'}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 4000,
               pauseOnMouseEnter: true,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            creativeEffect={{
               prev: {
                  shadow: true,
                  translate: [0, 0, -200],
               },
               next: {
                  translate: ['100%', 0, 0],
               },
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
            // modules={[Pagination, Navigation, EffectCreative]}
            className="mySwiper h-full w-full"
         >
            <SwiperSlide>
               <div className="flex h-full w-full items-center justify-between overflow-hidden bg-gradient-to-tl from-[#6b2d94] to-[#2d3194]">
                  <div className="flex-6 flex flex-col gap-4 px-32">
                     <h1 className="text-start font-nepali text-h3 font-semibold tracking-wide text-white">
                        {' '}
                        घर जग्गा खरिद विक्री,
                        <br /> सट्टापट्टा, प्लटिङ।{' '}
                     </h1>
                     <p className="mt-4 font-nepali text-p font-extralight leading-8 tracking-wide text-white">
                        पोखराको रमाइलो दृश्य र शान्त वातावरणमा आफ्नो सपनाको घर
                        खोज्दै हुनुहुन्छ? हामी तपाईंलाई सहयोग गर्छौं।
                     </p>

                     <div className="flex gap-4">
                        <a href="viber://chat?number=%2B9779816144937">
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaViber className="text-h4 text-blue-400" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 Viber
                              </h4>
                           </button>
                        </a>
                        <a
                           aria-label="Chat on WhatsApp"
                           href="https://wa.me/9814150525"
                           target="_blank"
                        >
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaWhatsapp className="text-h4 text-accent-100" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 WhatsApp
                              </h4>
                           </button>
                        </a>
                     </div>
                  </div>

                  <div className="flex-2 h-full w-full">
                     <img
                        className="h-full w-full object-cover object-left"
                        src={House}
                     />
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="flex h-full w-full items-center justify-between overflow-hidden bg-gradient-to-tl from-[#6b2d94] to-[#2d3194]">
                  <div className="flex-6 flex flex-col gap-4 px-32">
                     <h1 className="text-start font-nepali text-h3 font-semibold tracking-wide text-white">
                        {' '}
                        निर्माण कार्यमा <span className="font-sans">-</span> घर,
                        बाटो, पुल आदिको <br /> तयार गरि सेवा प्रदान गर्ने।{' '}
                     </h1>
                     <p className="mt-4 font-nepali text-p font-extralight leading-8 tracking-wide text-white">
                        पोखराको रमाइलो दृश्य र शान्त वातावरणमा आफ्नो सपनाको घर
                        खोज्दै हुनुहुन्छ? हामी तपाईंलाई सहयोग गर्छौं।
                     </p>

                     <div className="flex gap-4">
                        <a href="viber://chat?number=%2B9779816144937">
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaViber className="text-h4 text-blue-400" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 Viber
                              </h4>
                           </button>
                        </a>
                        <a
                           aria-label="Chat on WhatsApp"
                           href="https://wa.me/9814150525"
                           target="_blank"
                        >
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaWhatsapp className="text-h4 text-accent-100" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 WhatsApp
                              </h4>
                           </button>
                        </a>
                     </div>
                  </div>

                  <div className="flex-2 h-full w-full">
                     <img
                        className="h-full w-full object-cover object-left"
                        src={LandPlot}
                     />
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="flex h-full w-full items-center justify-between overflow-hidden bg-gradient-to-tl from-[#6b2d94] to-[#2d3194]">
                  <div className="flex-6 flex flex-col gap-4 px-32">
                     <h1 className="text-start font-nepali text-h3 font-semibold tracking-wide text-white">
                        {' '}
                        दक्ष्य जनशक्ति तयार <br /> तथा क्षमता अभिवृद्धिको कार्य
                        गर्ने।
                     </h1>
                     <p className="mt-4 font-nepali text-p font-extralight leading-8 tracking-wide text-white">
                        पोखराको रमाइलो दृश्य र शान्त वातावरणमा आफ्नो सपनाको घर
                        खोज्दै हुनुहुन्छ? हामी तपाईंलाई सहयोग गर्छौं।
                     </p>

                     <div className="flex gap-4">
                        <a href="viber://chat?number=%2B9779816144937">
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaViber className="text-h4 text-blue-400" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 Viber
                              </h4>
                           </button>
                        </a>
                        <a
                           aria-label="Chat on WhatsApp"
                           href="https://wa.me/9814150525"
                           target="_blank"
                        >
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaWhatsapp className="text-h4 text-accent-100" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 WhatsApp
                              </h4>
                           </button>
                        </a>
                     </div>
                  </div>

                  <div className="flex-2 h-full w-full">
                     <img
                        className="h-full w-full object-cover object-right"
                        src={Money}
                     />
                  </div>
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className="flex h-full w-full items-center justify-between overflow-hidden bg-gradient-to-tl from-[#6b2d94] to-[#2d3194]">
                  <div className="flex-6 flex flex-col gap-4 px-32">
                     <h1 className="text-start font-nepali text-h3 font-semibold tracking-wide text-white">
                        {' '}
                        शिक्षा, स्वास्थय लगायत उत्पादनशिल पर्यटन, यातायात,
                        <br /> ट्रेडिङ उद्योग व्यवसायमा लगानी गर्ने।
                     </h1>
                     <p className="mt-4 font-nepali text-p font-extralight leading-8 tracking-wide text-white">
                        पोखराको रमाइलो दृश्य र शान्त वातावरणमा आफ्नो सपनाको घर
                        खोज्दै हुनुहुन्छ? हामी तपाईंलाई सहयोग गर्छौं।
                     </p>

                     <div className="flex gap-4">
                        <a href="viber://chat?number=%2B9779816144937">
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaViber className="text-h4 text-blue-400" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 Viber
                              </h4>
                           </button>
                        </a>
                        <a
                           aria-label="Chat on WhatsApp"
                           href="https://wa.me/9814150525"
                           target="_blank"
                        >
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaWhatsapp className="text-h4 text-accent-100" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 WhatsApp
                              </h4>
                           </button>
                        </a>
                     </div>
                  </div>

                  <div className="flex-2 h-full w-full">
                     <img
                        className="h-full w-full object-cover object-right"
                        src={Money}
                     />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="flex h-full w-full items-center justify-between overflow-hidden bg-gradient-to-tl from-[#6b2d94] to-[#2d3194]">
                  <div className="flex-6 flex flex-col gap-4 px-32">
                     <h1 className="text-start font-nepali text-h3 font-semibold tracking-wide text-white">
                        {' '}
                        विभिन्न कृषि तथा <br /> पशुपालनमा लगानी तथा <br />
                        उत्पादित बस्तुहरुको बजारीकरण गर्ने।
                     </h1>
                     <p className="mt-4 font-nepali text-p font-extralight leading-8 tracking-wide text-white">
                        पोखराको रमाइलो दृश्य र शान्त वातावरणमा आफ्नो सपनाको घर
                        खोज्दै हुनुहुन्छ? हामी तपाईंलाई सहयोग गर्छौं।
                     </p>

                     <div className="flex gap-4">
                        <a href="viber://chat?number=%2B9779816144937">
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaViber className="text-h4 text-blue-400" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 Viber
                              </h4>
                           </button>
                        </a>
                        <a
                           aria-label="Chat on WhatsApp"
                           href="https://wa.me/9814150525"
                           target="_blank"
                        >
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaWhatsapp className="text-h4 text-accent-100" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 WhatsApp
                              </h4>
                           </button>
                        </a>
                     </div>
                  </div>

                  <div className="flex-2 h-full w-full">
                     <img
                        className="h-full w-full object-cover object-right"
                        src={Money}
                     />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="flex h-full w-full items-center justify-between overflow-hidden bg-gradient-to-tl from-[#6b2d94] to-[#2d3194]">
                  <div className="flex-6 flex flex-col gap-4 px-32">
                     <h1 className="text-start font-nepali text-h3 font-semibold tracking-wide text-white">
                        {' '}
                        स्वदेशी वा विदेशी <br /> वित्तिय बैंक वा संघ <br />{' '}
                        संस्थाबाट थोक कर्जा लिई लगानी गर्ने।
                     </h1>
                     <p className="mt-4 font-nepali text-p font-extralight leading-8 tracking-wide text-white">
                        पोखराको रमाइलो दृश्य र शान्त वातावरणमा आफ्नो सपनाको घर
                        खोज्दै हुनुहुन्छ? हामी तपाईंलाई सहयोग गर्छौं।
                     </p>

                     <div className="flex gap-4">
                        <a href="viber://chat?number=%2B9779816144937">
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaViber className="text-h4 text-blue-400" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 Viber
                              </h4>
                           </button>
                        </a>
                        <a
                           aria-label="Chat on WhatsApp"
                           href="https://wa.me/9814150525"
                           target="_blank"
                        >
                           <button className="mt-8 flex items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-h1">
                              <FaWhatsapp className="text-h4 text-accent-100" />
                              <h4 className="text-h6 font-semibold text-slate-800">
                                 WhatsApp
                              </h4>
                           </button>
                        </a>
                     </div>
                  </div>

                  <div className="flex-2 h-full w-full">
                     <img
                        className="h-full w-full object-cover object-right"
                        src={Money}
                     />
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </section>
   );
};

export default Hero;
