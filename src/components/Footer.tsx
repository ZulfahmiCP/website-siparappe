import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface py-12 px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-bold text-sm">Kelurahan Siparappe</span>
            <span className="text-slate-500 text-xs mt-0.5">Kecamatan Watang Sawitto, Kabupaten Pinrang</span>
          </div>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-slate-500 text-xs font-semibold">
            © 2026 Portal Informasi Resmi Kelurahan Siparappe.
          </p>
          <p className="text-slate-400 text-xs mt-1">
            Dikembangkan oleh Mahasiswa KKNT 116 Universitas Hasanuddin.
          </p>
        </div>
      </div>
    </footer>
  );
}