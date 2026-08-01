import { useState } from 'react';
import { strukturPemerintahan, strukturLKK } from '../data/pemerintahanData';
import { User } from 'lucide-react';

const formatNamaFile = (nama: string) => {
  return nama.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const FotoProfil = ({ nama, className = "w-24 h-24" }: { nama: string; className?: string }) => {
  const namaFile = formatNamaFile(nama);
  const ekstensi = ['jpg', 'png', 'jpeg'];
  const [indeksEkstensi, setIndeksEkstensi] = useState(0);
  const [errorGambar, setErrorGambar] = useState(false);

  if (errorGambar) {
    return (
      <div className={`${className} mx-auto rounded-full bg-surface border-4 border-white shadow-sm flex items-center justify-center overflow-hidden mb-4 relative z-10`}>
        <User className="w-1/3 h-1/3 text-slate-300" />
      </div>
    );
  }

  return (
    <img
      src={`/assets/${namaFile}.${ekstensi[indeksEkstensi]}`}
      alt={nama}
      className={`${className} mx-auto rounded-full object-cover border-4 border-white shadow-sm mb-4 relative z-10 bg-surface`}
      onError={() => {
        if (indeksEkstensi < ekstensi.length - 1) {
          setIndeksEkstensi(indeksEkstensi + 1);
        } else {
          setErrorGambar(true);
        }
      }}
    />
  );
};

export default function PemerintahanSection() {
  return (
    <section id="pemerintahan" className="w-full bg-surface py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            Struktur Organisasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Aparatur & Kelembagaan
          </h2>
        </div>

        <div className="mb-32 relative">
          <div className="flex flex-col items-center text-center relative">
            <FotoProfil nama={strukturPemerintahan[0].nama} className="w-32 h-32 border-primary/20" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">Lurah Siparappe</span>
            <span className="text-xl font-extrabold text-slate-900">{strukturPemerintahan[0].nama}</span>
          </div>

          <div className="w-px h-12 bg-slate-300 mx-auto my-4" />

          <div className="flex flex-col items-center text-center relative">
            <FotoProfil nama={strukturPemerintahan[1].nama} />
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Sekretaris</span>
            <span className="text-lg font-extrabold text-slate-800">{strukturPemerintahan[1].nama}</span>
          </div>

          <div className="w-px h-12 bg-slate-300 mx-auto my-4" />
          <div className="hidden md:block w-3/4 max-w-4xl h-px bg-slate-300 mx-auto" />

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-8 md:mt-12 flex-wrap">
            {strukturPemerintahan.slice(2, 7).map((pegawai, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-full md:w-auto relative">
                <div className="hidden md:block absolute -top-12 left-1/2 w-px h-12 bg-slate-300" />
                <FotoProfil nama={pegawai.nama} className="w-20 h-20" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1 max-w-[150px]">{pegawai.jabatan}</span>
                <span className="text-base font-extrabold text-slate-800">{pegawai.nama}</span>
              </div>
            ))}
          </div>

          <div className="w-px h-16 bg-slate-300 mx-auto mt-12 mb-8" />
          
          <div className="text-center mb-8">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-white px-4 py-1 rounded-full border border-slate-200">
              Kepala Lingkungan
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 flex-wrap">
            {strukturPemerintahan.slice(7).map((pegawai, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <FotoProfil nama={pegawai.nama} className="w-20 h-20" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">{pegawai.jabatan}</span>
                <span className="text-base font-extrabold text-slate-800">{pegawai.nama}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-12 tracking-tight text-center">
            Lembaga Kemasyarakatan Kelurahan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {strukturLKK.map((lkk, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center border border-slate-50">
                <FotoProfil nama={lkk.nama} className="w-16 h-16 mb-3" />
                <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-1">{lkk.jabatan}</span>
                <span className="text-sm font-extrabold text-slate-800 leading-tight">{lkk.nama}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}