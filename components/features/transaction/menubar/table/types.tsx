export type Transaction = {
  id: string;
  tanggal: string;
  nama: string;
  metode: string;
  //metode: 'qris' | 'transfer' | 'tunai';
  total: number;
  status: string;
  //status: 'selesai' | 'proses' | 'batal';
};
