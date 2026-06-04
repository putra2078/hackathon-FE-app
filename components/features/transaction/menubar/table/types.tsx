export type Transaction = {
        id: string;
        tanggal: string;
        nama: string;
        metode: 'qris' | 'transfer' | 'tunai';
        total: number;
        status: 'selesai' | 'proses' | 'batal';
}

