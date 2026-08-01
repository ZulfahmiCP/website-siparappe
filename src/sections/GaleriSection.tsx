import { ArrowUpRight } from 'lucide-react';

export default function GaleriSection() {
  const berita = [
    { 
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", 
      title: "Musyawarah Perencanaan Pembangunan Kelurahan (Musrenbang)", 
      kategori: "Pemerintahan",
      tanggal: "12 Agustus 2026",
      link: "#",
      span: "md:col-span-2 md:row-span-2" 
    },
    { 
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop", 
      title: "Pemberdayaan UMKM Lokal", 
      kategori: "Ekonomi",
      tanggal: "05 Agustus 2026",
      link: "#",
      span: "col-span-1 row-span-1" 
    },
    { 
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", 
      title: "Kegiatan Posyandu Balita", 
      kategori: "Kesehatan",
      tanggal: "28 Juli 2026",
      link: "#",
      span: "col-span-1 row-span-1" 
    },
    { 
      url: "https://images.unsplash.com/photo-1592652433060-3cbbfdfdb1ce?q=80&w=800&auto=format&fit=crop", 
      title: "Panen Raya Bersama Kelompok Tani", 
      kategori: "Pertanian",
      tanggal: "15 Juli 2026",
      link: "#",
      span: "md:col-span-2 row-span-1" 
    }
  ];

  return (
    <section id="galeri" className="w-full bg-surface py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
              Pusat Informasi
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Galeri & Berita Desa
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm">
            Ikuti perkembangan terbaru, kegiatan sosial, dan program pembangunan di Kelurahan Siparappe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
          {berita.map((item, idx) => (
            <a 
              key={idx} 
              href={item.link}
              className={`group relative rounded-[2rem] overflow-hidden ${item.span} min-h-[250px] bg-slate-200 block cursor-pointer`}
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.kategori}
                  </span>
                  <span className="text-slate-300 text-xs font-medium">
                    {item.tanggal}
                  </span>
                </div>
                <h3 className="text-white font-extrabold text-lg md:text-xl tracking-tight leading-snug group-hover:text-primary-light transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}