export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative w-full h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559628233-eb1b1a45564b?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 text-white select-none">
        <div className="max-w-4xl space-y-6">
          <span 
            className="inline-block bg-primary/90 text-white text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-primary-light/20"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
          >
            Selamat Datang
          </span>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none"
            style={{ textShadow: '0 3px 12px rgba(0,0,0,0.5)' }}
          >
            Website Kelurahan Siparappe
          </h1>
          
          <p 
            className="text-base sm:text-lg md:text-xl text-slate-100 font-normal max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}
          >
            Portal informasi resmi kemitraan, pelayanan administrasi, dan pembangunan berkelanjutan di Kabupaten Pinrang.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button 
              onClick={() => handleScrollTo('profil')}
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Mulai Menelusuri
            </button>
            <button 
              onClick={() => handleScrollTo('kontak')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 hover:border-accent hover:text-accent transition-all cursor-pointer"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}