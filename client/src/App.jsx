import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicePage from './pages/ServicePage';
import Services from './pages/Services';
import Industries from './pages/Industries';
import ConsultationModal from './components/ConsultationModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#33312A] font-sans antialiased">
        <Header onRequestConsultation={handleOpenConsultation} />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onRequestConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About onRequestConsultation={handleOpenConsultation} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServicePage onRequestConsultation={handleOpenConsultation} />} />
            <Route path="/industries" element={<Industries onRequestConsultation={handleOpenConsultation} />} />
          </Routes>
        </div>

        <Footer onRequestConsultation={handleOpenConsultation} />

        {/* Global Consultation Modal */}
        <ConsultationModal isOpen={isModalOpen} onClose={handleCloseConsultation} />
      </div>
    </Router>
  );
}
