import { dataPotensi } from "../data/potensiData";
import { Leaf, Droplets, Sun } from "lucide-react";

export default function PotensiSection() {
  const icons = [
    <Leaf className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    <Droplets className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    <Sun className="w-8 h-8 text-accent" strokeWidth={1.5} />,
  ];

  // Tautan gambar sekarang mengarah ke folder public/assets/potensi/
  const images = [
    "/assets/potensi/rth.jpeg",           // Ubah nama file ini sesuai gambar pertamamu
    "/assets/potensi/p3a.png",             // Ubah nama file ini sesuai gambar keduamu
    "/assets/potensi/tradisi-mappalilil.jpg", // Gambar yang terlihat dari screenshotmu
  ];

  return (
    <section
      id="potensi"
      className="w-full bg-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            Kekayaan Wilayah
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Potensi Lokal & Budaya
          </h2>
        </div>

        <div className="space-y-24">
          {dataPotensi.map((potensi, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-primary/5 rounded-[3rem] transform ${idx % 2 === 0 ? "-rotate-3 -translate-x-4" : "rotate-3 translate-x-4"} transition-transform duration-500`}
                  />
                  <img
                    src={images[idx]}
                    alt={potensi.judul}
                    className="relative w-full h-[300px] md:h-[400px] object-cover rounded-[3rem] shadow-sm z-10"
                  />
                  <div
                    className={`absolute ${idx % 2 === 0 ? "-right-6 -bottom-6" : "-left-6 -bottom-6"} w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg z-20`}
                  >
                    {icons[idx]}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-12 h-1 bg-accent rounded-full mb-6" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {potensi.judul}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                  {potensi.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}