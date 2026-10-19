export type LostStatus = 'Proses Dicari' | 'Selesai';

export interface LostItem {
  readonly id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  contact: string;
  status: LostStatus;
}