import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Footer from './components/Footer';
import End from './components/End';
import AboutHome from './components/AboutHome';
import Education from './components/Education';
import Experience from './components/Experience';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/end" element={<End />} />
          <Route path="/about-home" element={<AboutHome />} />
          <Route path="/experience" element={<Experience />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
