import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import your components
import { Footer } from './Pages/Footer';
import { NavBar } from './Pages/Header';

// Import your pages
import HomePage from './Pages/Homepage';
import ContactPage from './Pages/Contact';

import { Gallery } from './Pages/Gallery';
// import Graphics from './Pages/Graphicspage';
import Skills from './Pages/Skills';
import AboutMe from './Pages/About';
import ProjectsPage from './Pages/Projects';


function App() {
  return (
    <Router>
      {/* NavBar will appear on all pages */}
      <NavBar />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutMe />} />
        {/* <Route path="/graphics" element={<Graphics />} /> */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsPage />} />
       
       
        <Route path="/gallery" element={<Gallery />} />

        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
