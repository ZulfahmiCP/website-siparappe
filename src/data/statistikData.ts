export interface DemografiUmum {
  totalPenduduk: string;
  lakiLaki: string;
  perempuan: string;
}

export interface LingkunganPKK {
  nama: string;
  jumlahKK: number;
  jumlahLakiLaki: number;
  jumlahPerempuan: number;
}

export interface Geografis {
  luasWilayah: string;
  lahanPersawahan: string;
  batas: {
    utara: string;
    selatan: string;
    barat: string;
    timur: string;
  };
}

export interface Fasilitas {
  masjid: number;
  puskesmasPembantu: number;
  posyandu: number;
  sekolahDasar: number;
  tamanKanakKanak: number;
  lapanganOlahraga: number;
}

export interface Pertanian {
  jumlahKepalaTani: string;
  luasSawah: string;
}

export const dataDemografiBanner: DemografiUmum = {
  totalPenduduk: "2782 Jiwa",
  lakiLaki: "1359",
  perempuan: "1432"
};

export const dataLingkungan: LingkunganPKK[] = [
  { nama: "Sarempo", jumlahKK: 221, jumlahLakiLaki: 418, jumlahPerempuan: 456 },
  { nama: "Bua-Bua I", jumlahKK: 219, jumlahLakiLaki: 513, jumlahPerempuan: 585 },
  { nama: "Madallo", jumlahKK: 290, jumlahLakiLaki: 547, jumlahPerempuan: 496 }
];

export const dataGeografis: Geografis = {
  luasWilayah: "2421 Ha",
  lahanPersawahan: "1974 Ha",
  batas: {
    utara: "Kecamatan Cempa",
    selatan: "Kelurahan Sipatokkong",
    barat: "Kecamatan Mattiro Sompe",
    timur: "Kelurahan Salo"
  }
};

export const dataFasilitas: Fasilitas = {
  masjid: 3,
  puskesmasPembantu: 1,
  posyandu: 3,
  sekolahDasar: 2,
  tamanKanakKanak: 2,
  lapanganOlahraga: 3
};

export const dataPertanian: Pertanian = {
  jumlahKepalaTani: "54",
  luasSawah: "xxx Ha"
};