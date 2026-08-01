import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ProfilSection from './sections/ProfilSection';
import StatistikSection from './sections/StatistikSection';
import PemerintahanSection from './sections/PemerintahanSection';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-surface text-slate-900 font-sans selection:bg-primary selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <ProfilSection />
        <StatistikSection />
        <PemerintahanSection />
      </main>
      <Footer />
    </div>
  );
}