// Type Union untuk status barang
export type ItemStatus = 'Proses Dicari' | 'Selesai';

// Interface struktur data Barang Hilang
export interface LostItem {
  readonly id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  contact: string;
  status: ItemStatus;
}