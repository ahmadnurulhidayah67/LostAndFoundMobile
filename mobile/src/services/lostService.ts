import { LostItem } from "../types/lost";

const DUMMY_LOST_DETAIL: Record<string, LostItem> = {
  "201": {
    id: "201",
    title: "Kunci Motor Honda",
    description:
      "Hilang sekitar area Kantin Barat / GKB 3. Ada gantungannya warna biru berbentuk dompet STNK.",
    location: "GKB 3 UMM",
    date: "19 Okt 2026",
    contact: "081234567890",
    status: "Proses Dicari",
  },
  "202": {
    id: "202",
    title: "KTM atas nama Ahmad",
    description:
      "Kartu Tanda Mahasiswa Informatika angkatan 2024 terlepas dari dompet. Sudah diserahkan ke satpam perpustakaan.",
    location: "Perpustakaan Pusat",
    date: "18 Okt 2026",
    contact: "089876543210",
    status: "Selesai",
  },
};

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchLostItemById = (id: string): Promise<LostItem> => {
  return new Promise(async (resolve, reject) => {
    try {
      await delay(1200);

      const item = DUMMY_LOST_DETAIL[id];
      if (item) {
        resolve(item);
      } else {
        reject("Laporan barang hilang tidak ditemukan di server!"); // Gagal (.reject)
      }
    } catch (error) {
      reject("Terjadi kesalahan koneksi saat mengambil data.");
    }
  });
};

export const fetchPublicApiData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/test");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
