import { strukturPemerintahan, strukturLKK } from '../data/pemerintahanData';

export default function PemerintahanSection() {
  return (
    <section id="pemerintahan" className="w-full bg-surface py-24 px-6 md:px-12 lg:px-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary text-xs font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Struktur Organisasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Pemerintahan & Kelembagaan
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-4">
            Aparatur Kelurahan
            <div className="h-px bg-slate-200 flex-1" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {strukturPemerintahan.map((pegawai, idx) => (
              <div key={idx} className="group flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-transparent hover:border-accent/30 hover:shadow-md transition-all">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{pegawai.jabatan}</span>
                <span className="text-lg font-extrabold text-slate-800 group-hover:text-accent transition-colors">{pegawai.nama}</span>
                {pegawai.nip && (
                  <span className="text-xs font-semibold text-slate-400 mt-1 border-t border-slate-50 pt-2">NIP. {pegawai.nip}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight flex items-center gap-4">
            Lembaga Kemasyarakatan Kelurahan
            <div className="h-px bg-slate-200 flex-1" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {strukturLKK.map((lkk, idx) => (
              <div key={idx} className="group relative py-4 pl-4 border-l-2 border-slate-200 hover:border-accent hover:bg-white transition-all rounded-r-xl">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">{lkk.jabatan}</span>
                <span className="text-base font-extrabold text-slate-700">{lkk.nama}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}