export interface Pegawai {
  nama: string;
  jabatan: string;
  nip?: string;
}

export const strukturPemerintahan: Pegawai[] = [
  { nama: "Masri, SE", jabatan: "Lurah", nip: "197103231998031005" },
  { nama: "", jabatan: "Sekretaris", nip: "198209242008011009" },
  { nama: "Masdar, SH.", jabatan: "Kasi Pemerintahan & Trantib", nip: "196812312007011030" },
  { nama: "Suwarti, SH.", jabatan: "Kasi Pembangunan", nip: "197411132007012009" },
  { nama: "Sudirman", jabatan: "Kasi Kesmas", nip: "197312241993031006" },
  { nama: "Rasmahwati, S.Pd.", jabatan: "Staff", nip: "198212312006042067" },
  { nama: "Rindiani", jabatan: "Staff", nip: "20040302025212006" },
  { nama: "Wahyuddin", jabatan: "Kep. Lingkungan Sarempo" },
  { nama: "H. P. Mamming", jabatan: "Kep. Lingkungan Bua-Bua" },
  { nama: "Sadar Capong", jabatan: "Kep. Lingkungan Madallo" }
];

export const strukturLKK: Pegawai[] = [
  { nama: "Herman, SS", jabatan: "Ketua Umum" },
  { nama: "Abdul Azis", jabatan: "Sekretaris" },
  { nama: "Rasmahwati", jabatan: "Bendahara" },
  { nama: "Arifuddin", jabatan: "Seksi Agama" },
  { nama: "Abd. Wahab Sabbang", jabatan: "Seksi Keamanan, Ketentraman Ketertiban dan Hukum" },
  { nama: "Sultan, S.Pd", jabatan: "Seksi Pendidikan, Kebudayaan dan Penerangan" },
  { nama: "Eeni, S.Pd", jabatan: "Seksi Pembinaan Anak Remaja, Olah Raga dan Kesenian" },
  { nama: "H. Muntaha K.", jabatan: "Seksi Prasarana Umum, Pertanian, Perekonomian dan Koperasi" },
  { nama: "Munira, Am. Kep.", jabatan: "Seksi Kesehatan, Kependudukan dan Keluarga Berencana" },
  { nama: "Nasruddin, S.Pd", jabatan: "Seksi Kesejahteraan Sosial" },
  { nama: "Husniah Jalil, S.Pd", jabatan: "Seksi Pembinaan Kesejahteraan Keluarga (PKK)" }
];