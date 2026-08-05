import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'statistik', label: 'Statistik' },
    { id: 'pemerintahan', label: 'Pemerintahan' },
    { id: 'potensi', label: 'Potensi Lokal' },
    { id: 'kontak', label: 'Kontak' }
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('beranda')}>
          <div className={`p-2 rounded-xl transition-colors duration-500 ${isScrolled ? 'bg-primary text-white' : 'bg-white/10 text-white backdrop-blur-sm border border-white/20'}`}>
            <Shield className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold leading-none tracking-tight transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Siparappe
            </span>
            <span className={`text-[10px] font-bold tracking-widest uppercase mt-1 transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-slate-200'}`}>
              Kab. Pinrang
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-semibold transition-all duration-300 hover:text-accent relative group ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
          ))}
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-sm font-semibold text-slate-600 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}