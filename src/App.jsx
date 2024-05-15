import './App.css'
import AboutUs from './Components/AboutUs'
import CoverSection from './Components/CoverSection'
import HowItWorks from './Components/HowItWorks'
import NavigationBar from './Components/NavigationBar'
import PriceList from './Components/PriceList'
import Services from './Components/Services'
import Footer from './Components/Footer'
import WhyChooseUs from './Components/WhyChooseUs'
import TeamMember from './Components/TeamMember'
import Contact from './Components/Contact'


function App() {

  return (
    <div>
      <NavigationBar />
      <CoverSection />
      <HowItWorks />
      <Services />
      <AboutUs />
      <PriceList />
      <WhyChooseUs />
      <TeamMember />
      <Contact />
      <Footer />
      
    </div>
    
  )
}

export default App
