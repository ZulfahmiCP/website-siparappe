import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function KontakSection() {
  const [dataKontak, setDataKontak] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/e6q9285kh2er3?sheet=kontak')
      .then(res => res.json())
      .then(data => {
        setDataKontak(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Gagal mengambil data kontak:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section id="kontak" className="w-full bg-white py-24 flex flex-col items-center justify-center min-h-[50vh]">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-slate-500 font-medium animate-pulse">Memuat Informasi Kontak...</p>
      </section>
    );
  }

  const getKontak = (id: string) => dataKontak.find(k => k.id === id) || { teks_tampilan: '', link_tujuan: '#' };

  const wa = getKontak('1');
  const email = getKontak('2');
  const fb = getKontak('3');

  return (
    <section id="kontak" className="w-full bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            Layanan Warga
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          <div className="space-y-10 py-4">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">Informasi Pelayanan</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Silakan berkoordinasi secara langsung dengan jajaran dinas kelurahan pada jam kerja resmi melalui kontak cepat di bawah ini.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Kantor+Kelurahan+Siparappe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 hover:shadow-sm transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary/5 group-hover:bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1 uppercase tracking-widest">Alamat Kantor</span>
                  <span className="text-slate-800 font-bold text-sm md:text-base group-hover:text-primary transition-colors">
                    Jl. Poros Pinrang-Polman, Kel. Siparappe
                  </span>
                </div>
              </a>
              
              <a 
                href={wa.link_tujuan} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 hover:shadow-sm transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-green-50 group-hover:bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-green-600 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1 uppercase tracking-widest">WhatsApp / Telepon</span>
                  <span className="text-slate-800 font-bold text-sm md:text-base group-hover:text-green-600 transition-colors">
                    {wa.teks_tampilan}
                  </span>
                </div>
              </a>

              <a 
                href={email.link_tujuan} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 hover:shadow-sm transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-accent/5 group-hover:bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 text-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1 uppercase tracking-widest">Email Resmi</span>
                  <span className="text-slate-800 font-bold text-sm md:text-base group-hover:text-accent transition-colors">
                    {email.teks_tampilan}
                  </span>
                </div>
              </a>

              <a 
                href={fb.link_tujuan} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 hover:shadow-sm transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:text-white transition-all duration-300">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1 uppercase tracking-widest">Facebook</span>
                  <span className="text-slate-800 font-bold text-sm md:text-base group-hover:text-blue-600 transition-colors">
                    {fb.teks_tampilan}
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full min-h-[400px] h-full lg:h-auto bg-slate-100 rounded-[3rem] overflow-hidden relative shadow-lg border border-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31846.160100779776!2d119.6105436!3d-3.7937402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95b77051d3fa59%3A0xb304b75a18a58a74!2sSiparappe%2C%20Kec.%20Watang%20Sawitto%2C%20Kabupaten%20Pinrang%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}