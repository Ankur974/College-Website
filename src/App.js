import Navbar from './Components/Navbar';
import Hero from './Components/Hero'; //
import Affiliations from './Components/Affiliations';
import AboutSection from './Components/AboutSection';
import Publications from './Components/Publications';
import Announcements from './Components/Announcements';
import CampusInfrastructure from './Components/CampusInfrastructure';
import LatestNews from './Components/LatestNews';
import Moments from './Components/Moments';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <Affiliations/>
      <AboutSection/>
      <Publications/>
      <Announcements/>
      <CampusInfrastructure/>
      <LatestNews/>
      <Moments/>
      <Footer/>
    </div>
  );
}

export default App;