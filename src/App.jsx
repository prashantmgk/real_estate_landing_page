import Hero from "./components/Hero"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import OurServices from "./components/OurServices"
import OurTeam from "./components/OurTeam"
import SideScrolling from "./components/SideScrolling"
import WhyChooseUs from "./components/WhyChooseUs"



function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <SideScrolling/>
      <WhyChooseUs/>
      <Featured/>
      <OurServices/>
      <OurTeam/>
      <Footer/>
    </div>
  )
}

export default App
