'use client'
import ErrorProductSection from "@/components/features/product/ErrorProductSection";
import ProductSection from "@/components/features/product/ProductSection";
import NavBanner from "@/components/Shared/NavBanner";
import { useGetAllProduct } from "@/hooks/product/useGetAllProduct";
import { getAllProducts } from "@/lib/api/product";
import { getAllProductsRes } from "@/types/api/product.types";
import { useEffect } from "react";

export default function ProductPage() {
        // const products: getAllProductsRes[] = await getAllProducts()
//   const { error, getAllProduct, isLoading, products } = useGetAllProduct();

//   useEffect(() => {
//     getAllProduct();
//   }, []);

  const { error, isLoading, products } = useGetAllProduct();


  return (
    <div className="w-full flex flex-col gap-4 mx-auto">
      <section id="navBanner" className="w-full">
        <NavBanner bannerTitle="Daftar Produk" />
      </section>
      <section id="productTable" className="w-full">
        {error ? (
          <ErrorProductSection errorMsg={error} />
        ) : (
          <ProductSection products={isLoading || !products ? [] : products} />
        )}
      </section>
    </div>
  );
}
