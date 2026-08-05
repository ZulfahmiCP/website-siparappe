export default function Footer() {
  return (
    <footer className="w-full bg-surface py-10 px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-4">
          <img 
            src="/assets/logo/logo-pinrang.png"  
            alt="Logo Kabupaten Pinrang" 
            className="w-10 h-12 md:w-12 md:h-14 object-contain drop-shadow-sm"
          />
          <div className="flex flex-col text-center md:text-left">
            <span className="text-slate-900 font-bold text-sm md:text-base">Kelurahan Siparappe</span>
            <span className="text-slate-500 text-xs mt-0.5">Kecamatan Watang Sawitto, Kabupaten Pinrang</span>
          </div>
        </div>
        
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-slate-500 text-xs font-semibold">
            © 2026 Portal Informasi Resmi Kelurahan Siparappe.
          </p>
          <p className="text-slate-400 text-[10px] mt-1">
            Program Kerja KKNT 116 Universitas Hasanuddin
          </p>
        </div>

      </div>
    </footer>
  );
}