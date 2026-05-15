import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import StaggeredMenu from './components/StaggeredMenu';
import FleetOverlay from './components/FleetOverlay';
import BrandManifesto from './components/BrandManifesto';
import Experiences from './components/Experiences';
import CarSpecs from './components/CarSpecs';
import SpecDrawer from './components/SpecDrawer';
import Testimonials from './components/Testimonials';
import Membership from './components/Membership';
import Academy from './components/Academy';
import BookingForm from './components/BookingForm';
import Faq from './components/Faq';
import PressStrip from './components/PressStrip';
import Footer from './components/Footer';
import RippleTrail from './components/RippleTrail';
import CookieConsent from './components/CookieConsent';
import Blog from './pages/Blog';
import JourneysPage from './pages/JourneysPage';
import MembershipPage from './pages/MembershipPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [specDrawerOpen, setSpecDrawerOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [blogOpen, setBlogOpen] = useState(false);
  const [journeysOpen, setJourneysOpen] = useState(false);
  const [membershipPageOpen, setMembershipPageOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div style={{ backgroundColor: 'var(--bg-base)', minHeight: '100vh' }}>
      <RippleTrail />
      <Header
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onFleetOpen={() => setFleetOpen(true)}
        onBlogOpen={() => setBlogOpen(true)}
        onJourneysOpen={() => setJourneysOpen(true)}
        onMembershipOpen={() => setMembershipPageOpen(true)}
        onAboutOpen={() => setAboutOpen(true)}
      />
      <Hero fleetOpen={fleetOpen} menuOpen={menuOpen} />
      <BrandManifesto />
      <Experiences />
      <CarSpecs onSpecOpen={(car) => { setSelectedCar(car); setSpecDrawerOpen(true); }} />
      <Testimonials />
      <Membership />
      <Academy />
      <BookingForm />
      <Faq />
      <PressStrip />
      <Footer />
      <CookieConsent />

      <StaggeredMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onFleetOpen={() => { setMenuOpen(false); setFleetOpen(true); }}
      />

      <AnimatePresence>
        {fleetOpen && (
          <FleetOverlay
            isOpen={fleetOpen}
            onClose={() => setFleetOpen(false)}
            onSpecOpen={(car) => { setSelectedCar(car); setFleetOpen(false); setSpecDrawerOpen(true); }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {specDrawerOpen && selectedCar && (
          <SpecDrawer
            isOpen={specDrawerOpen}
            onClose={() => { setSpecDrawerOpen(false); setSelectedCar(null); }}
            car={selectedCar}
          />
        )}
      </AnimatePresence>

      <Blog isOpen={blogOpen} onClose={() => setBlogOpen(false)} />
      <JourneysPage isOpen={journeysOpen} onClose={() => setJourneysOpen(false)} />
      <MembershipPage isOpen={membershipPageOpen} onClose={() => setMembershipPageOpen(false)} />
      <AboutPage isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  );
}
