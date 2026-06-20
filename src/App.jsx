import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import MissionVision from './pages/MissionVision';
import Programs from './pages/Programs';
import ScholarshipFinder from './pages/ScholarshipFinder';
import CareerGuidance from './pages/CareerGuidance';
import VolunteerHub from './pages/VolunteerHub';
import Events from './pages/Events';
import ResourceLibrary from './pages/ResourceLibrary';
import SuccessStories from './pages/SuccessStories';
import PhotoGallery from './pages/PhotoGallery';
import VideoGallery from './pages/VideoGallery';
import ImpactDashboard from './pages/ImpactDashboard';
import Donate from './pages/Donate';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/scholarships" element={<ScholarshipFinder />} />
          <Route path="/careers-hub" element={<CareerGuidance />} />
          <Route path="/volunteer" element={<VolunteerHub />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<ResourceLibrary />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/impact" element={<ImpactDashboard />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

