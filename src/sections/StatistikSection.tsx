import { Users, Home, Activity, BookOpen } from 'lucide-react';
import { dataDemografiBanner, dataFasilitas, dataLingkungan } from '../data/statistikData';

export default function StatistikSection() {
  return (
    <section id="statistik" className="w-full bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary text-xs font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Sensus & Infrastruktur
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Statistik Demografi & Fasilitas
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="flex flex-col items-center justify-center p-8 bg-surface rounded-[2rem] rounded-tr-md border border-slate-100 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{dataDemografiBanner.totalPenduduk}</span>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Total Populasi</span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-8 bg-surface rounded-[2rem] border border-slate-100 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{dataDemografiBanner.lakiLaki}</span>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Jiwa Laki-Laki</span>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-surface rounded-[2rem] rounded-tl-md border border-slate-100 hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{dataDemografiBanner.perempuan}</span>
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">Jiwa Perempuan</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Persebaran Warga Lingkungan</h3>
            <div className="space-y-6">
              {dataLingkungan.map((lingkungan, idx) => (
                <div key={idx} className="group relative pl-6 border-l-2 border-slate-100 hover:border-accent transition-colors">
                  <h4 className="text-lg font-bold text-slate-800">{lingkungan.nama}</h4>
                  <div className="grid grid-cols-3 gap-4 mt-3">
                    <div>
                      <span className="text-xl font-extrabold text-primary block">{lingkungan.jumlahKK}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kepala Keluarga</span>
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

          <div className="bg-primary/5 p-8 md:p-10 rounded-[2.5rem] rounded-br-xl border border-primary/10">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Fasilitas Penunjang</h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex items-start gap-4">
                <Home className="w-6 h-6 text-primary mt-1" />
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.masjid}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Masjid</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Activity className="w-6 h-6 text-primary mt-1" />
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.puskesmasPembantu}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Puskesmas Pembantu</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Activity className="w-6 h-6 text-primary mt-1" />
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.posyandu}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Posyandu</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-primary mt-1" />
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.sekolahDasar}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Sekolah Dasar</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-primary mt-1" />
                <div>
                  <span className="text-2xl font-extrabold text-slate-900 block leading-none">{dataFasilitas.tamanKanakKanak}</span>
                  <span className="text-xs font-semibold text-slate-500 mt-1 block">Taman Kanak-Kanak</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary mt-1" />
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