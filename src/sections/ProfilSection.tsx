import { dataGeografis } from '../data/statistikData';
import { Map } from 'lucide-react';

export default function ProfilSection() {
  return (
    <section id="profil" className="w-full bg-surface py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Selayang Pandang
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Profil Kelurahan
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Karakter Agraris di Jantung Kabupaten Pinrang
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
              Kelurahan Siparappe merupakan wilayah di Kecamatan Watang Sawitto, Kabupaten Pinrang, Provinsi Sulawesi Selatan. Wilayah ini memiliki karakter agraris yang ditandai oleh hamparan persawahan yang mencakup sekitar 80% dari total luas wilayah.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
              Potensi tersebut didukung oleh sistem irigasi yang menunjang aktivitas pertanian serta keberadaan kelompok-kelompok tani yang secara kolektif mengelola lahan dan meningkatkan produktivitas pertanian. Kondisi tersebut menjadikan Kelurahan Siparappe sebagai salah satu wilayah penyangga produksi pertanian di Kabupaten Pinrang.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="p-5 bg-white rounded-[2rem] rounded-tr-md shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-50 flex-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Luas Wilayah</span>
                <span className="text-2xl font-extrabold text-primary block mt-1 tracking-tight">{dataGeografis.luasWilayah}</span>
              </div>
              <div className="p-5 bg-white rounded-[2rem] rounded-tl-md shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-50 flex-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Lahan Persawahan</span>
                <span className="text-2xl font-extrabold text-primary block mt-1 tracking-tight">{dataGeografis.lahanPersawahan}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] rounded-bl-xl shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-8 -mt-8" />
            
            <h4 className="text-lg font-extrabold text-slate-900 mb-6 tracking-tight">Batas Wilayah Administratif</h4>
            
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center justify-between pb-4 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Utara</span>
                <span className="font-bold text-slate-800">{dataGeografis.batas.utara}</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Selatan</span>
                <span className="font-bold text-slate-800">{dataGeografis.batas.selatan}</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-50">
                <span className="text-slate-500 font-medium">Barat</span>
                <span className="font-bold text-slate-800">{dataGeografis.batas.barat}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Timur</span>
                <span className="font-bold text-slate-800">{dataGeografis.batas.timur}</span>
              </div>
            </div>

            <div className="mt-8 p-5 bg-primary/5 rounded-2xl border border-primary/10">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Cakupan Wilayah</span>
              <p className="text-slate-700 text-sm font-semibold">
                Lingkungan Sarempo, Lingkungan Bua Bua, dan Lingkungan Madallo
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-[3rem] p-6 md:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-50 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">Peta Topografi & Administratif</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Pemetaan presisi wilayah administrasi dan tata guna lahan Kelurahan Siparappe guna menunjang akurasi data geografis dan batas lingkungan.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative bg-slate-100 border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
              alt="Peta Kelurahan Siparappe Dummy" 
              className="absolute inset-0 w-full h-full object-cover filter contrast-125"
            />
            {/* Overlay tipis agar menyatu dengan tema, bisa dihapus nanti jika petanya sudah berwarna estetik */}
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}