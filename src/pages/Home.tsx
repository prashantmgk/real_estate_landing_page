import Hero from "../components/Hero"
import Featured from "../components/Featured"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OurServices from "../components/OurServices"
import OurTeam from "../components/OurTeam"
import SideScrolling from "../components/SideScrolling"
import WhyChooseUs from "../components/WhyChooseUs"

import React from "react"

const Home = () => {
   return (
      <>
         {/* <Navbar /> */}
         <Hero />
         <WhyChooseUs />
         <Featured />
         <OurServices />
         <OurTeam />
         {/* <Footer /> */}
      </>
   )
}

export default Home