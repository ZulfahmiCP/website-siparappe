import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function KontakSection() {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.nama && formData.pesan) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nama: '', email: '', pesan: '' });
      }, 3000);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Informasi Pelayanan</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Silakan berkoordinasi secara langsung dengan jajaran dinas kelurahan pada jam kerja resmi atau melalui kontak di bawah ini.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block mb-1 uppercase tracking-widest">Alamat Kantor</span>
                  <span className="text-slate-600 text-sm md:text-base">Jl. Poros Pinrang-Polman, Kel. Siparappe, Kec. Watang Sawitto, Kab. Pinrang</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block mb-1 uppercase tracking-widest">Telepon</span>
                  <span className="text-slate-600 text-sm md:text-base">0856 9699 2589</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block mb-1 uppercase tracking-widest">Email Resmi</span>
                  <span className="text-slate-600 text-sm md:text-base">siparappepinrang@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-slate-100 rounded-[2rem] overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31846.160100779776!2d119.6105436!3d-3.7937402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95b77051d3fa59%3A0xb304b75a18a58a74!2sSiparappe%2C%20Kec.%20Watang%20Sawitto%2C%20Kabupaten%20Pinrang%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-surface p-8 md:p-12 rounded-[3rem] border border-slate-100">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">Kirim Pesan</h3>
            <p className="text-slate-500 text-sm mb-8">Pengaduan, pertanyaan administrasi, atau permohonan surat.</p>

            {isSubmitted ? (
              <div className="bg-primary/10 text-primary p-6 rounded-2xl text-center mb-6 border border-primary/20">
                <Send className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <span className="font-bold block">Pesan Berhasil Terkirim!</span>
                <span className="text-sm">Petugas kelurahan akan segera menindaklanjutinya.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full px-5 py-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-primary text-sm shadow-sm"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Alamat Email / Nomor HP</label>
                  <input 
                    type="text" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-primary text-sm shadow-sm"
                    placeholder="Kontak yang bisa dihubungi"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Isi Pesan</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    className="w-full px-5 py-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-primary text-sm shadow-sm resize-none"
                    placeholder="Tuliskan detail keperluan Anda..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-2xl transition-all shadow-md active:scale-[0.98]"
                >
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}