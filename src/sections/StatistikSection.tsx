import { useState, useEffect } from 'react';
import { Users, Home, Activity, BookOpen, Tractor, Map, Loader2 } from 'lucide-react';

export default function StatistikSection() {
  const [demografi, setDemografi] = useState<any[]>([]);
  const [fasilitas, setFasilitas] = useState<any[]>([]);
  const [statistik, setStatistik] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('https://sheetdb.io/api/v1/e6q9285kh2er3?sheet=demografi').then(res => res.json()),
      fetch('https://sheetdb.io/api/v1/e6q9285kh2er3?sheet=fasilitas').then(res => res.json()),
      fetch('https://sheetdb.io/api/v1/e6q9285kh2er3?sheet=statistik').then(res => res.json())
    ])
    .then(([demoData, fasilData, statData]) => {
      setDemografi(demoData);
      setFasilitas(fasilData);
      setStatistik(statData);
      setIsLoading(false);
    })
    .catch(err => {
      console.error("Gagal mengambil data statistik:", err);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section id="statistik" className="w-full bg-white py-24 flex flex-col items-center justify-center min-h-[50vh]">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-slate-500 font-medium animate-pulse">Menyelaraskan Data Demografi...</p>
      </section>
    );
  }

  // Fungsi pencari data agar mudah dibaca di bawah
  const getStat = (nama: string) => statistik.find(s => s.nama_data === nama)?.nilai || '-';
  const getFasil = (nama: string) => fasilitas.find(f => f.nama_fasilitas === nama)?.jumlah || '-';

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
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{getStat('Luas Wilayah')}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Luas Wilayah (Ha)</span>
          </div>
          
          <div className="p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center">
            <Tractor className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{getStat('Kepala Tani')}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Kepala Tani</span>
          </div>

          <div className="p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center">
            <Map className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{getStat('Lahan Persawahan')}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Lahan Persawahan (Ha)</span>
          </div>

          <div className="p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">{getStat('Total Penduduk')}</span>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Total Penduduk (Jiwa)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Persebaran Warga
            </h3>
            <div className="space-y-4">
              {demografi.map((lingkungan, idx) => (
                <div key={idx} className="p-6 bg-surface rounded-3xl border border-white">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">{lingkungan.nama_lingkungan}</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-xl font-extrabold text-primary block">{lingkungan.jumlah_kk}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">KK</span>
                    </div>
                    <div>
                      <span className="text-xl font-extrabold text-slate-700 block">{lingkungan.laki_laki}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Laki-Laki</span>
                    </div>
                    <div>
                      <span className="text-xl font-extrabold text-slate-700 block">{lingkungan.perempuan}</span>
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
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{getFasil('Masjid')}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Masjid</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{getFasil('Puskesmas Pembantu')}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Puskesmas Pembantu</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{getFasil('Posyandu')}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Posyandu</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{getFasil('Sekolah Dasar')}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Sekolah Dasar</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{getFasil('Taman Kanak-Kanak')}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Taman Kanak-Kanak</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{getFasil('Lapangan Olahraga')}</span>
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