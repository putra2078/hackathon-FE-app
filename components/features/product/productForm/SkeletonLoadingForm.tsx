import { Skeleton } from "@heroui/react";

export default function SkeletonLoadingForm() {
  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow ">
      {/* 1. Informasi Dasar */}
      <div className="space-y-4">
        <Skeleton  animationType="pulse" className="w-40 h-6 rounded-md"  /> {/* Judul Seksi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Skeleton  animationType="pulse" className="w-24 h-4 rounded" />
            <Skeleton  animationType="pulse" className="w-full h-10 rounded-lg" />
          </div>
          <div className="space-y-2">
            <Skeleton  animationType="pulse" className="w-20 h-4 rounded" />
            <Skeleton  animationType="pulse" className="w-full h-10 rounded-lg" />
          </div>
          <div className="space-y-2">
            <Skeleton  animationType="pulse" className="w-16 h-4 rounded" />
            <Skeleton  animationType="pulse" className="w-full h-10 rounded-lg" />
          </div>
        </div>
      </div>

      {/* 2. Harga & Stok */}
      <div className="space-y-4">
        <Skeleton  animationType="pulse" className="w-32 h-6 rounded-md" /> {/* Judul Seksi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Skeleton  animationType="pulse" className="w-20 h-4 rounded" />
            <Skeleton  animationType="pulse" className="w-full h-10 rounded-lg" />
          </div>
          <div className="space-y-2">
            <Skeleton  animationType="pulse" className="w-20 h-4 rounded" />
            <Skeleton  animationType="pulse" className="w-full h-10 rounded-lg" />
          </div>
          <div className="space-y-2">
            <Skeleton  animationType="pulse" className="w-32 h-4 rounded" />
            <Skeleton  animationType="pulse" className="w-full h-10 rounded-lg" />
          </div>
        </div>
      </div>

      {/* 3. Deskripsi */}
      <div className="space-y-4">
        <Skeleton  animationType="pulse" className="w-28 h-6 rounded-md" /> {/* Judul Seksi */}
        <div className="space-y-2">
          <Skeleton  animationType="pulse" className="w-24 h-4 rounded" />
          <Skeleton  animationType="pulse" className="w-full h-32 rounded-lg" /> {/* Textarea besar */}
        </div>
      </div>

      {/* Tombol Aksi di Kanan Bawah */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
        <Skeleton  animationType="pulse" className="w-20 h-10 rounded-lg" /> {/* Batal */}
        <Skeleton  animationType="pulse" className="w-36 h-10 rounded-lg" /> {/* Simpan */}
      </div>
    </div>
  );
}
