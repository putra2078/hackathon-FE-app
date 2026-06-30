"use client";
import ProductFormSection from "@/components/features/product/productForm/ProductFormSection";

import NavBanner from "@/components/Shared/NavBanner";
import { useProductDetail } from "@/hooks/useProductDetail";
import { Params } from "next/dist/server/request/params";
import { useParams } from "next/navigation";
import { useEffect } from "react";

interface IdParams extends Params{
  id: string
}

export default function Product() {
  const {id} = useParams<IdParams>();

  const { error, getProductDetail, isLoading, product } = useProductDetail();

  useEffect(() => {
    getProductDetail(id);
  }, [id]);

  return (
    <div className="w-full flex flex-col gap-4 mx-auto">
      <section id="navBanner" className="w-full">
        <NavBanner bannerTitle="Edit Produk" />
      </section>
      <section id="productTable" className="w-full">
        {error && <div>Gagal memuat produk: {error}</div>}
        {isLoading || !product ? (
          <div>Memuat data produk...</div>
        ) : (
          <ProductFormSection mode="edit" key={product.id} initialData={product} />
        )}
      </section>
    </div>
  );
}
