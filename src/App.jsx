import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import Navbar from "./components/Navbar";
import TechStackSection from './components/TechStackSection';
import UniqueHero from './components/TraningProgram';

import './index.css'
function App() {

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
       {/* <TechStackSection /> */}
       <ServiceSection/>
       <UniqueHero/>
       </div>

  )
}

export default App
