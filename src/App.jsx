// import './App.css'
// import AboutUs from './Components/AboutUs'
// import CoverSection from './Components/CoverSection'
// import HowItWorks from './Components/HowItWorks'
// import NavigationBar from './Components/NavigationBar'
// import PriceList from './Components/PriceList'
// import Services from './Components/Services'
// import Footer from './Components/Footer'
// import WhyChooseUs from './Components/WhyChooseUs'
// import TeamMember from './Components/TeamMember'
// import Contact from './Components/Contact'
// import Packages from './Components/Packages'


// function App() {

//   return (
//     <div>
//       <NavigationBar />
//       <CoverSection />
//       <HowItWorks /> 
//       <AboutUs />
//       <Services />
//       <PriceList />
//       <Packages />
//       <WhyChooseUs />
//       <TeamMember />
//       <Contact />
//       <Footer />
      
//     </div>
    
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import CoverSection from './Components/CoverSection';
import HowItWorks from './Components/HowItWorks';
import NavigationBar from './Components/NavigationBar';
import PriceList from './Components/PriceList';
import Services from './Components/Services';
import Footer from './Components/Footer';
import WhyChooseUs from './Components/WhyChooseUs';
import TeamMember from './Components/TeamMember';
import Contact from './Components/Contact';
import Packages from './Components/Packages';
import Leisure from './Components/Leisure';

function HomePage() {
  return (
    <>
      <CoverSection />
      <HowItWorks />
      <Leisure />
      <TeamMember />
      <WhyChooseUs />
    </>
  );
}

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
