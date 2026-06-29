import ProductFormSection from "@/components/features/product/addProduct/ProductFormSection";

import NavBanner from "@/components/Shared/NavBanner";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full flex flex-col gap-4 mx-auto">
      <section id="navBanner" className="w-full">
        <NavBanner bannerTitle="Edit Produk" />
      </section>
      <section id="productTable" className="w-full">
        <ProductFormSection />
      </section>
    </div>
  );
}
