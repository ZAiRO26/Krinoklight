import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Clients from './pages/Clients';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <SmoothScroll>
          <ScrollToTop />
          <div className="min-h-screen theme-transition" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
            <Navbar />
            <main>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/products" element={<Products />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/:slug" element={<IndustryDetail />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/clients/case-studies" element={<Clients />} />
                <Route path="/clients/projects" element={<Clients />} />
                <Route path="/clients/case-study/:id" element={<CaseStudyDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/how-we-work" element={<About />} />
                <Route path="/about/sustainability" element={<About />} />
                <Route path="/about/careers" element={<About />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/blog" element={<Insights />} />
                <Route path="/insights/newsletters" element={<Insights />} />
                <Route path="/contact" element={<Contact />} />

                {/* Legal Pages */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppFloatingButton />
            <ScrollToTopButton />
          </div>
        </SmoothScroll>
      </Router>
    </ThemeProvider>
  );
}

export default App;