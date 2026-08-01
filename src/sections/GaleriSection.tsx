export default function GaleriSection() {
  const fotos = [
    { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", label: "Musyawarah Warga", span: "md:col-span-2 md:row-span-2" },
    { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop", label: "UMKM Lokal", span: "col-span-1 row-span-1" },
    { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", label: "Posyandu", span: "col-span-1 row-span-1" },
    { url: "https://images.unsplash.com/photo-1592652433060-3cbbfdfdb1ce?q=80&w=800&auto=format&fit=crop", label: "Panen Padi", span: "md:col-span-2 row-span-1" }
  ];

  return (
    <section id="galeri" className="w-full bg-surface py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
              Arsip Digital
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Galeri Kegiatan
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm">
            Rekam jejak kegiatan sosial, adat warga, pembangunan, serta upacara di Kelurahan Siparappe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
          {fotos.map((foto, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-[2rem] overflow-hidden ${foto.span} min-h-[250px] bg-slate-200`}
            >
              <img 
                src={foto.url} 
                alt={foto.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="inline-block bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                  Dokumentasi
                </span>
                <h3 className="text-white font-extrabold text-lg tracking-tight">
                  {foto.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}