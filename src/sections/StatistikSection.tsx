import { Users, Home, Activity, BookOpen, Tractor, Map } from 'lucide-react';
import { dataDemografiBanner, dataFasilitas, dataLingkungan, dataPertanian, dataGeografis } from '../data/statistikData';

export default function StatistikSection() {
  return (
    <section id="statistik" className="w-full bg-white py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            Sensus & Infrastruktur
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Statistik Kelurahan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center">
            <Map className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{dataGeografis.luasWilayah}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Luas Wilayah</span>
          </div>
          
          <div className="p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-accent" />
            <Tractor className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{dataPertanian.jumlahKepalaTani}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Kepala Tani</span>
          </div>

          <div className="p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
            <Map className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{dataPertanian.luasSawah}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Luas Sawah</span>
          </div>

          <div className="p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{dataDemografiBanner.totalPenduduk}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Total Penduduk</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Persebaran Warga
            </h3>
            <div className="space-y-4">
              {dataLingkungan.map((lingkungan, idx) => (
                <div key={idx} className="p-6 bg-surface rounded-3xl border border-white">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">{lingkungan.nama}</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-xl font-extrabold text-primary block">{lingkungan.jumlahKK}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">KK</span>
                    </div>
                    <div>
                      <span className="text-xl font-extrabold text-slate-700 block">{lingkungan.jumlahLakiLaki}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Laki-Laki</span>
                    </div>
                    <div>
                      <span className="text-xl font-extrabold text-slate-700 block">{lingkungan.jumlahPerempuan}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Perempuan</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Fasilitas Umum
            </h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.masjid}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Masjid</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.puskesmasPembantu}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Puskesmas Pembantu</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.posyandu}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Posyandu</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.sekolahDasar}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Sekolah Dasar</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.tamanKanakKanak}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Taman Kanak-Kanak</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.lapanganOlahraga}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Lapangan Olahraga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}