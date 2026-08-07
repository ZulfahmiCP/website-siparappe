import { useState, useEffect } from 'react';
import { User, Loader2 } from 'lucide-react';

// Fungsi untuk mengambil ID dari link GDrive biasa dan mengubahnya menjadi link thumbnail langsung
const getDirectDriveLink = (url: string) => {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    // Menggunakan endpoint thumbnail Google yang lebih stabil
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }
  return url;
};

// Komponen Foto Profil
const FotoProfil = ({ nama, linkFoto, className = "w-24 h-24" }: { nama: string; linkFoto: string; className?: string }) => {
  const imageUrl = getDirectDriveLink(linkFoto);

  // Jika kolom link_foto di spreadsheet benar-benar kosong
  if (!imageUrl) {
    return (
      <div className={`${className} mx-auto rounded-full bg-surface border-4 border-white shadow-sm flex items-center justify-center overflow-hidden mb-4 relative z-10`}>
        <User className="w-1/3 h-1/3 text-slate-300" />
      </div>
    );
  }

  // Jika ada link, render tag <img> dengan perlindungan no-referrer
  return (
    <img
      src={imageUrl}
      alt={nama}
      referrerPolicy="no-referrer"
      className={`${className} mx-auto rounded-full object-cover border-4 border-white shadow-sm mb-4 relative z-10 bg-surface`}
      onError={(e) => {
        // Fallback gambar abu-abu kosong jika gagal dimuat
        e.currentTarget.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
      }}
    />
  );
};

export default function PemerintahanSection() {
  const [dataAparatur, setDataAparatur] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/e6q9285kh2er3?sheet=aparatur')
      .then(res => res.json())
      .then(data => {
        setDataAparatur(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Gagal mengambil data pemerintahan:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section id="pemerintahan" className="w-full bg-surface py-24 flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-slate-500 font-medium animate-pulse">Menghubungkan ke Database Kelurahan...</p>
      </section>
    );
  }

  // Mengelompokkan data berdasarkan ID dari Google Sheets
  const lurah = dataAparatur.find(d => d.id === '1') || { nama: '', jabatan: 'Lurah', link_foto: '' };
  const sekretaris = dataAparatur.find(d => d.id === '2') || { nama: '', jabatan: 'Sekretaris', link_foto: '' };
  const staff = dataAparatur.filter(d => parseInt(d.id) >= 3 && parseInt(d.id) <= 7);
  const kepalaLingkungan = dataAparatur.filter(d => d.kategori === 'Kepala Lingkungan');
  const lkk = dataAparatur.filter(d => d.kategori === 'LKK');

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
          {/* Lurah */}
          <div className="flex flex-col items-center text-center relative">
            <FotoProfil nama={lurah.nama} linkFoto={lurah.link_foto} className="w-32 h-32 border-primary/20" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">{lurah.jabatan}</span>
            <span className="text-xl font-extrabold text-slate-900">{lurah.nama || "-"}</span>
          </div>

          <div className="w-px h-12 bg-slate-300 mx-auto my-4" />

          {/* Sekretaris */}
          <div className="flex flex-col items-center text-center relative">
            <FotoProfil nama={sekretaris.nama} linkFoto={sekretaris.link_foto} />
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">{sekretaris.jabatan}</span>
            <span className="text-lg font-extrabold text-slate-800">{sekretaris.nama || "-"}</span>
          </div>

          <div className="w-px h-12 bg-slate-300 mx-auto my-4" />
          <div className="hidden md:block w-3/4 max-w-4xl h-px bg-slate-300 mx-auto" />

          {/* Staf & Kasi */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-8 md:mt-12 flex-wrap">
            {staff.map((pegawai, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-full md:w-auto relative">
                <div className="hidden md:block absolute -top-12 left-1/2 w-px h-12 bg-slate-300" />
                <FotoProfil nama={pegawai.nama} linkFoto={pegawai.link_foto} className="w-20 h-20" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1 max-w-[150px]">{pegawai.jabatan}</span>
                <span className="text-base font-extrabold text-slate-800">{pegawai.nama || "-"}</span>
              </div>
            ))}
          </div>

          <div className="w-px h-16 bg-slate-300 mx-auto mt-12 mb-8" />
          
          <div className="text-center mb-8">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-white px-4 py-1 rounded-full border border-slate-200">
              Kepala Lingkungan
            </span>
          </div>

          {/* Kepala Lingkungan */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 flex-wrap">
            {kepalaLingkungan.map((pegawai, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <FotoProfil nama={pegawai.nama} linkFoto={pegawai.link_foto} className="w-20 h-20" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">{pegawai.jabatan}</span>
                <span className="text-base font-extrabold text-slate-800">{pegawai.nama || "-"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LKK */}
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-12 tracking-tight text-center">
            Lembaga Kemasyarakatan Kelurahan
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lkk.map((anggota, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center border border-slate-50">
                <FotoProfil nama={anggota.nama} linkFoto={anggota.link_foto} className="w-16 h-16 mb-3" />
                <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-1">{anggota.jabatan}</span>
                <span className="text-sm font-extrabold text-slate-800 leading-tight">{anggota.nama || "-"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}