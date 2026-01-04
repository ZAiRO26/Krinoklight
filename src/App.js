import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Critical components loaded immediately
import FloatingNav from './components/FloatingNav';
import Footer from './components/Footer';
import CinematicTransition from './components/CinematicTransition';
import ScrollToTop from './components/ScrollToTop';
import ImmersiveBackground from './components/ImmersiveBackground';

// Lazy loaded pages - significantly reduces initial bundle size
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const Clients = lazy(() => import('./pages/Clients'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const About = lazy(() => import('./pages/About'));
const HowWeWork = lazy(() => import('./pages/HowWeWork'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Careers = lazy(() => import('./pages/Careers'));
const Insights = lazy(() => import('./pages/Insights'));
const Packages = lazy(() => import('./pages/Packages'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const LatestNews = lazy(() => import('./pages/LatestNews'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy loaded non-critical components
const ScrollToTopButton = lazy(() => import('./components/ScrollToTopButton'));
const WhatsAppFloatingButton = lazy(() => import('./components/WhatsAppFloatingButton'));
const GlobalChatbot = lazy(() => import('./components/GlobalChatbot'));
const SmoothScroll = lazy(() => import('./components/SmoothScroll'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-slate-500 text-sm font-medium tracking-wide">Loading...</span>
    </div>
  </div>
);

// Animated Routes component for page transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Main Pages */}
          <Route path="/" element={<CinematicTransition><Home /></CinematicTransition>} />
          <Route path="/services" element={<CinematicTransition><Services /></CinematicTransition>} />
          <Route path="/services/products" element={<CinematicTransition><Products /></CinematicTransition>} />
          <Route path="/services/:slug" element={<CinematicTransition><ServiceDetail /></CinematicTransition>} />
          <Route path="/industries" element={<CinematicTransition><Industries /></CinematicTransition>} />
          <Route path="/industries/:slug" element={<CinematicTransition><IndustryDetail /></CinematicTransition>} />
          <Route path="/clients" element={<CinematicTransition><Clients /></CinematicTransition>} />
          <Route path="/clients/case-studies" element={<CinematicTransition><Clients /></CinematicTransition>} />
          <Route path="/clients/projects" element={<CinematicTransition><Clients /></CinematicTransition>} />
          <Route path="/clients/case-study/:id" element={<CinematicTransition><CaseStudyDetail /></CinematicTransition>} />
          <Route path="/about" element={<CinematicTransition><About /></CinematicTransition>} />
          <Route path="/about/how-we-work" element={<CinematicTransition><HowWeWork /></CinematicTransition>} />
          <Route path="/about/sustainability" element={<CinematicTransition><Sustainability /></CinematicTransition>} />
          <Route path="/about/careers" element={<CinematicTransition><Careers /></CinematicTransition>} />
          <Route path="/insights" element={<CinematicTransition><Insights /></CinematicTransition>} />
          <Route path="/insights/blog" element={<CinematicTransition><Insights /></CinematicTransition>} />
          <Route path="/insights/newsletters" element={<CinematicTransition><Insights /></CinematicTransition>} />
          <Route path="/insights/packages" element={<CinematicTransition><Packages /></CinematicTransition>} />
          <Route path="/latest-news" element={<CinematicTransition><LatestNews /></CinematicTransition>} />
          <Route path="/contact" element={<CinematicTransition><Contact /></CinematicTransition>} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<CinematicTransition><Privacy /></CinematicTransition>} />
          <Route path="/terms" element={<CinematicTransition><Terms /></CinematicTransition>} />
          <Route path="/cookies" element={<CinematicTransition><Cookies /></CinematicTransition>} />

          {/* 404 */}
          <Route path="*" element={<CinematicTransition><NotFound /></CinematicTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <SmoothScroll>
          <ImmersiveBackground>
            <ScrollToTop />
            <div className="min-h-screen">
              <FloatingNav />
              <main>
                <AnimatedRoutes />
              </main>
              <Footer />
              <Suspense fallback={null}>
                <GlobalChatbot />
                <WhatsAppFloatingButton />
                <ScrollToTopButton />
              </Suspense>
            </div>
          </ImmersiveBackground>
        </SmoothScroll>
      </Suspense>
    </Router>
  );
}

export default App;
