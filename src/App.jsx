// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/App.css'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import MissionVision from './pages/MissionVision';
import AdmissionRequirements from './pages/AdmissionRequirements';
import CoursesOffered from './pages/CoursesOffered';
import Hymn from './pages/Hymn';
import ProcedureForEnrollment from './pages/ProcedureForEnrollment';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/hymn" element={<Hymn />} />
          <Route path="/what-we-offer" element={<CoursesOffered />} />
          <Route path="/admission-requirements" element={<AdmissionRequirements />} />
          <Route path="/mission-vision" element={<MissionVision/>}/>
          <Route path="/procedure-for-enrollment" element={<ProcedureForEnrollment/>}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
