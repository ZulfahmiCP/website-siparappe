import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ProfilSection from './sections/ProfilSection';
import StatistikSection from './sections/StatistikSection';
import PemerintahanSection from './sections/PemerintahanSection';
import PotensiSection from './sections/PotensiSection';
import GaleriSection from './sections/GaleriSection';
import KontakSection from './sections/KontakSection';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-surface text-slate-900 font-sans selection:bg-primary selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <ProfilSection />
        <StatistikSection />
        <PemerintahanSection />
        <PotensiSection />
        <GaleriSection />
        <KontakSection />
      </main>
      <Footer />
    </div>
  );
}