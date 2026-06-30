import ProductFormSection from "@/components/features/product/productForm/ProductFormSection";
import NavBanner from "@/components/Shared/NavBanner";

export default function AddProduct() {
  return (
    <div className="w-full flex flex-col gap-4 mx-auto">
      <section id="navBanner" className="w-full">
        <NavBanner bannerTitle="Tambah Produk Baru" />
      </section>
      <section id="addProductForm" className="w-full">
        <ProductFormSection mode="create" initialData={null}/>
      </section>
    </div>
  );
}
