/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  Shield, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Users, 
  Calendar, 
  ArrowRight,
  TrendingUp, 
  Sprout, 
  FileText,
  Clock, 
  Mail, 
  Phone,
  Briefcase,
  Layers,
  Heart,
  Check
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('Beranda');

  // Smooth scroll handler
  const handleScrollTo = (id: string, name: string) => {
    setActiveSection(name);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form handling
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.nama && formData.pesan) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ nama: '', email: '', pesan: '' });
      }, 5000);
    }
  };

  return (
    <div className="w-full min-h-screen font-sans bg-white text-slate-900 scroll-smooth selection:bg-emerald-600 selection:text-white">
      
      {/* 1. Hero Section (Full Screen 100vh) */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559628233-eb1b1a45564b?q=80&w=1920&auto=format&fit=crop')` }}
        />
        {/* Subtle dark overlay for premium visual balance and readability */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-6 md:px-12 lg:px-20 flex items-center justify-between text-white bg-gradient-to-b from-black/60 to-transparent">
          {/* Left Side: Shield + Brand */}
          <div className="flex items-center gap-3.5">
            <div className="p-2 bg-emerald-600 rounded-xl shadow-lg border border-emerald-500/30">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight leading-none">Kelurahan Siparappe</span>
              <span className="text-xs font-light text-emerald-200 tracking-wider uppercase mt-1">Kabupaten Pinrang</span>
            </div>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {[
              { id: 'top', label: 'Beranda' },
              { id: 'profil', label: 'Profil' },
              { id: 'pemerintahan', label: 'Pemerintahan' },
              { id: 'statistik', label: 'Statistik' },
              { id: 'potensi', label: 'Potensi Lokal' },
              { id: 'galeri', label: 'Galeri' },
              { id: 'kontak', label: 'Kontak' }
            ].map((link) => {
              const isActive = activeSection === link.label;
              return (
                <button
                  key={link.label}
                  onClick={() => handleScrollTo(link.id, link.label)}
                  className={`relative py-1 transition-all duration-200 hover:text-emerald-200 cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-slate-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Center Content (Absolutely Centered) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 text-white select-none">
          <div className="max-w-4xl space-y-6">
            <span 
              className="inline-block bg-emerald-600/90 text-white text-xs md:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-500/20"
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
                onClick={() => handleScrollTo('profil', 'Profil')}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Mulai Menelusuri
              </button>
              <button 
                onClick={() => handleScrollTo('kontak', 'Kontak')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Profil Kelurahan */}
      <section id="profil" className="w-full bg-white py-24 px-6 md:px-12 lg:px-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Selayang Pandang
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900 mt-3 tracking-tight">
              Profil Kelurahan
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
              Mengenal lebih dekat letak geografis, visi, dan nilai-nilai luhur kemasyarakatan Kelurahan Siparappe.
            </p>
          </div>

          {/* Clean Dual-Column Layout with elegant typography spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase block">Identitas Kelurahan</span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-900 leading-tight">
                Keharmonisan Budaya di Tengah Kesuburan Alam Pinrang
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                Kelurahan Siparappe tumbuh dengan filosofi Bugis <em>Siparappe</em>, yang berarti saling merangkul, mendekat, dan bersatu dalam harmoni pembangunan. Terletak di jantung produktivitas Kabupaten Pinrang, kelurahan ini dianugerahi bentangan irigasi teknis yang subur dan pengrajin tradisional yang berdedikasi tinggi.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base text-justify">
                Dengan total luas wilayah produktif mencapai ratusan hektar sawah beririgasi modern, Siparappe tidak hanya menjadi pilar swasembada pangan regional, tetapi juga menjadi rumah bagi perkembangan industri kreatif yang bernilai budaya luhur.
              </p>

              {/* Minimalist grid for geographic facts */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Luas Wilayah</span>
                  <span className="text-xl md:text-2xl font-bold text-slate-800 block mt-1">452.8 Hektar</span>
                  <span className="text-xs text-slate-500 block mt-0.5">Sawah &amp; Pemukiman Seimbang</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">Klasifikasi</span>
                  <span className="text-xl md:text-2xl font-bold text-slate-800 block mt-1">Swasembada</span>
                  <span className="text-xs text-slate-500 block mt-0.5">Kategori Kelurahan Mandiri</span>
                </div>
              </div>
            </div>

            {/* Right Card: Vision & Values */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-8 -mt-8" />
              
              <div className="space-y-6">
                <div>
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">VISI KELURAHAN</span>
                  <p className="text-lg font-serif italic font-medium text-slate-100 mt-2 leading-relaxed">
                    &ldquo;Mewujudkan Pelayanan Kelurahan Siparappe yang Modern, Transparan, dan Sejahtera Berbasis Kemandirian Ekonomi Lokal.&rdquo;
                  </p>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <div>
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase block mb-3">MISI STRATEGIS</span>
                  <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                    <li className="flex gap-2.5">
                      <span className="text-emerald-400 font-bold">1.</span>
                      <span>Optimalisasi pelayanan publik berbasis digital yang cepat, tanggap, dan bebas hambatan.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-emerald-400 font-bold">2.</span>
                      <span>Meningkatkan kapasitas produksi dan jangkauan pasar anyaman serta kerajinan tenun sutera.</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-emerald-400 font-bold">3.</span>
                      <span>Peningkatan infrastruktur pertanian penunjang saluran irigasi tersier pedesaan.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pemerintahan */}
      <section id="pemerintahan" className="w-full bg-slate-50 py-24 px-6 md:px-12 lg:px-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Aparatur Sipil
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900 mt-3 tracking-tight">
              Pemerintahan
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
              Struktur kepengurusan profesional Kelurahan Siparappe yang siap sedia memberikan bimbingan dan pelayanan administrasi terbaik.
            </p>
          </div>

          {/* Organizational Directory Grid with Swiss-Style clean cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Lurah Siparappe",
                name: "H. Andi Ahmad, S.STP., M.Si.",
                nip: "NIP. 19781215 200112 1 002",
                desc: "Mengkoordinasikan perumusan kebijakan pembangunan daerah, pemeliharaan ketertiban umum, serta pembinaan lembaga kemasyarakatan kelurahan.",
                accent: true
              },
              {
                role: "Sekretaris Kelurahan",
                name: "Sitti Rahmah, S.E.",
                nip: "NIP. 19820409 200801 2 015",
                desc: "Memimpin urusan ketatausahaan, pengelolaan keuangan, kepegawaian kantor, penyusunan rencana program, dan koordinasi administrasi internal.",
                accent: false
              },
              {
                role: "Kasi Pemerintahan & Ketertiban",
                name: "Budi Santoso, S.Sos.",
                nip: "NIP. 19800523 200502 1 004",
                desc: "Mengurus administrasi kependudukan, pendaftaran tanah, ketertiban wilayah, serta memfasilitasi musyawarah perencanaan pembangunan warga.",
                accent: false
              },
              {
                role: "Kasi Kesejahteraan Rakyat",
                name: "Nursiah, S.E.",
                nip: "NIP. 19850912 201001 2 008",
                desc: "Menyelenggarakan program kemitraan sosial, koordinasi bantuan kemanusiaan, pemberdayaan lansia, posyandu terpadu, dan pembinaan keagamaan.",
                accent: false
              },
              {
                role: "Kasi Perekonomian & Potensi",
                name: "Irfan Jaya, S.P.",
                nip: "NIP. 19831102 200903 1 005",
                desc: "Mengembangkan program pembinaan kelompok tani, memfasilitasi pembentukan koperasi, pameran UMKM lokal, dan ketahanan pangan daerah.",
                accent: false
              },
              {
                role: "Lembaga Pemberdayaan Masyarakat",
                name: "Drs. Muhammad Yunus",
                nip: "Ketua LPM Siparappe",
                desc: "Bermitra erat menggerakkan prakarsa gotong royong warga, menyerap aspirasi pembangunan fisik lingkungan, dan menyebarkan rilis program desa.",
                accent: false
              }
            ].map((staff, idx) => (
              <div 
                key={idx}
                className={`group rounded-2xl p-6 md:p-8 transition-all duration-300 border ${
                  staff.accent 
                    ? 'bg-slate-900 text-white border-slate-950 shadow-xl lg:scale-105' 
                    : 'bg-white text-slate-800 border-slate-100 hover:border-emerald-300/60 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex flex-col h-full justify-between space-y-6">
                  <div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest ${staff.accent ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      {staff.role}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold mt-2 font-serif group-hover:text-emerald-500 transition-colors">
                      {staff.name}
                    </h3>
                    <span className={`text-[11px] block mt-1 opacity-70 ${staff.accent ? 'text-slate-300' : 'text-slate-500'}`}>
                      {staff.nip}
                    </span>
                    <p className={`text-xs md:text-sm mt-4 leading-relaxed ${staff.accent ? 'text-slate-300' : 'text-slate-600'}`}>
                      {staff.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100/10 flex items-center justify-between text-xs font-semibold">
                    <span className={staff.accent ? 'text-emerald-400' : 'text-emerald-600'}>Ruang Kerja Utama</span>
                    <span className={staff.accent ? 'text-slate-400' : 'text-slate-400'}>Jam Kerja: Aktif</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Statistik Kependudukan */}
      <section id="statistik" className="w-full bg-white py-24 px-6 md:px-12 lg:px-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Sensus Warga
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900 mt-3 tracking-tight">
              Statistik Kependudukan
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
              Grafik ringkasan demografi warga Kelurahan Siparappe guna mendukung keakuratan pembangunan sosial.
            </p>
          </div>

          {/* Minimalist Grid of Key Population Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Users className="w-6 h-6 text-emerald-600" />, count: "4,852", label: "Jiwa", desc: "Total Penduduk Siparappe" },
              { icon: <Layers className="w-6 h-6 text-teal-600" />, count: "1,240", label: "Kepala Keluarga", desc: "Tersebar di 8 Dusun" },
              { icon: <TrendingUp className="w-6 h-6 text-sky-600" />, count: "68.4%", label: "Usia Produktif", desc: "Pilar Tenaga Kerja Daerah" },
              { icon: <Sprout className="w-6 h-6 text-amber-600" />, count: "55.2%", label: "Mata Pencaharian Tani", desc: "Dominan Sektor Pertanian" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:border-emerald-300 transition-all">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4 border border-slate-100">
                  {stat.icon}
                </div>
                <span className="text-3xl font-extrabold text-slate-900 block tracking-tight">{stat.count}</span>
                <span className="text-xs font-semibold text-emerald-700 block mt-1">{stat.label}</span>
                <span className="text-[11px] text-slate-400 block mt-2 leading-none">{stat.desc}</span>
              </div>
            ))}
          </div>

          {/* Minimalist Bar Chart for Livelihood Distribution */}
          <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 font-serif mb-6 text-center">
              Distribusi Pekerjaan Warga
            </h3>
            <div className="space-y-4">
              {[
                { name: "Petani & Sektor Agraria", percent: 55, color: "bg-emerald-500" },
                { name: "Pekerja Industri Kreatif & UMKM", percent: 25, color: "bg-teal-500" },
                { name: "Pegawai Negeri / Swasta", percent: 12, color: "bg-sky-500" },
                { name: "Sektor Konstruksi & Jasa", percent: 8, color: "bg-indigo-500" }
              ].map((job, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{job.name}</span>
                    <span>{job.percent}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200/80 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${job.color} transition-all duration-1000`} 
                      style={{ width: `${job.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Potensi Lokal */}
      <section id="potensi" className="w-full bg-slate-50 py-24 px-6 md:px-12 lg:px-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Kekayaan Desa
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900 mt-3 tracking-tight">
              Potensi Lokal (UMKM &amp; Pertanian)
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
              Menampilkan kontribusi perekonomian warga yang berasal dari kerajinan anyaman, kain tenun khas Bugis, serta lumbung padi modern.
            </p>
          </div>

          {/* Minimalist Split Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Potensi 1: Tenun Sutera */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-emerald-200 shadow-sm transition-all flex flex-col sm:flex-row h-full">
              <div 
                className="sm:w-2/5 h-48 sm:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop')` }}
              />
              <div className="p-6 md:p-8 sm:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">KERAJINAN UMKM</span>
                  <h3 className="text-lg md:text-xl font-bold font-serif text-slate-900 mt-1 leading-tight">
                    Tenun Sutera Bugis Siparappe
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                    Sutra ditenun secara tradisional menggunakan ATBM (Alat Tenun Bukan Mesin) oleh sekelompok ibu rumah tangga terampil secara turun-temurun dengan motif khas Bugis Pinrang.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50/70 px-3 py-1.5 rounded-lg w-fit">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Kualitas Ekspor Daerah</span>
                </div>
              </div>
            </div>

            {/* Potensi 2: Pertanian Padi */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-emerald-200 shadow-sm transition-all flex flex-col sm:flex-row h-full">
              <div 
                className="sm:w-2/5 h-48 sm:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop')` }}
              />
              <div className="p-6 md:p-8 sm:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">LUMBUNG PANGAN</span>
                  <h3 className="text-lg md:text-xl font-bold font-serif text-slate-900 mt-1 leading-tight">
                    Pertanian Padi Beririgasi Teknis
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                    Kesuburan sawah Siparappe disokong saluran irigasi teknis bendungan Saddang, menghasilkan kualitas beras varietas unggulan dengan produktivitas tinggi.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50/70 px-3 py-1.5 rounded-lg w-fit">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Swasembada Terbimbing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Galeri */}
      <section id="galeri" className="w-full bg-white py-24 px-6 md:px-12 lg:px-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Visual Dokumentasi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900 mt-3 tracking-tight">
              Galeri
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
              Rangkaian rekam jejak kegiatan sosial, adat warga, pembangunan prasarana umum, serta upacara di Kelurahan Siparappe.
            </p>
          </div>

          {/* Clean Curated Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
                tag: "Musyawarah",
                title: "Rapat Musrenbang Kelurahan"
              },
              {
                url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
                tag: "UMKM",
                title: "Pelatihan Kemasan Produk Sutera"
              },
              {
                url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
                tag: "Kesehatan",
                title: "Pelayanan Posyandu Balita & Lansia"
              }
            ].map((photo, idx) => (
              <div 
                key={idx}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${photo.url}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 px-2 py-0.5 rounded w-fit mb-1.5">
                    {photo.tag}
                  </span>
                  <h3 className="text-sm md:text-base font-semibold font-serif leading-snug">
                    {photo.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Layanan & Kontak */}
      <section id="kontak" className="w-full bg-slate-50 py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase bg-emerald-50 px-3 py-1 rounded-full">
              Hubungan Warga
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-900 mt-3 tracking-tight">
              Layanan &amp; Kontak
            </h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
            <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
              Saluran pengaduan administrasi kelurahan, pengajuan surat pengantar warga, serta peta operasional kantor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Side: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-serif text-slate-900">Alamat Layanan Publik</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  Silakan berkoordinasi secara langsung dengan jajaran dinas kelurahan pada jam kerja resmi pelayanan umum.
                </p>

                <div className="space-y-4 text-xs md:text-sm">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Kantor Lurah</span>
                      <span className="text-slate-500 mt-0.5 block leading-relaxed">
                        Jl. Poros Pinrang-Polman Km. 5, Kelurahan Siparappe, Kecamatan Watang Sawitto, Kabupaten Pinrang, Sulawesi Selatan (91212)
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Saluran Telepon</span>
                      <span className="text-slate-500 mt-0.5 block leading-relaxed">
                        +62 821-1234-567 / (0421) 123-456
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">Surel Portal Desa</span>
                      <span className="text-slate-500 mt-0.5 block leading-relaxed">
                        info@siparappe.desa.id
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Clean Peta Placeholder Card */}
              <div className="bg-slate-200 h-48 rounded-2xl relative overflow-hidden shadow-inner border border-slate-300">
                <div 
                  className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-slate-950/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <MapPin className="w-10 h-10 text-emerald-400 mb-2 filter drop-shadow" />
                  <span className="text-xs font-bold text-white tracking-wider block">KANTOR LURAH SIPARAPPE</span>
                  <span className="text-[10px] text-slate-300 block mt-0.5">Kecamatan Watang Sawitto</span>
                </div>
              </div>
            </div>

            {/* Right Side: Simple Clean Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-serif text-slate-900">Form Hubungi Kami</h3>
                <p className="text-slate-500 text-xs md:text-sm">
                  Kirim saran konstruktif atau pertanyaan tentang pelayanan surat administrasi langsung ke sekretariat.
                </p>

                {submitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs md:text-sm animate-fade-in flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Terima kasih! Pesan Anda telah terkirim kepada petugas Kelurahan Siparappe.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Nama Lengkap</label>
                      <input 
                        type="text" 
                        required
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        placeholder="Contoh: Ahmad" 
                        className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-xs md:text-sm transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Alamat Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@email.com" 
                        className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-xs md:text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Isi Pesan / Pengaduan</label>
                    <textarea 
                      required
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      rows={4}
                      placeholder="Tuliskan pesan atau urusan pengantar surat Anda di sini..." 
                      className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-xs md:text-sm transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-emerald-500/10 cursor-pointer text-xs md:text-sm"
                  >
                    Kirim Pesan Ke Petugas
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Very Simple Clean Elegant Footer */}
      <footer className="w-full bg-slate-900 text-slate-400 py-12 px-6 md:px-12 text-center border-t border-slate-800 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-500" />
            <span className="text-slate-100 font-bold">Kelurahan Siparappe</span>
            <span className="opacity-50">|</span>
            <span>Kabupaten Pinrang</span>
          </div>
          <p>© 2026 Portal Layanan Seminar Pemerintahan Kelurahan Siparappe. Hak Cipta Dilindungi.</p>
        </div>
      </footer>

    </div>
  );
}
