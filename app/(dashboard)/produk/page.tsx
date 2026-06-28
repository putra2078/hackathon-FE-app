import ProductSection from "@/components/features/product/ProductSection";
import NavBanner from "@/components/Shared/NavBanner";
import { getAllProducts } from "@/lib/api/product";
import { getAllProductsRes } from "@/types/api/product.types";

export default async function ProductPage(){
    const products: getAllProductsRes[] = await getAllProducts()
    console.log(products)
    return(
        <div className="w-full flex flex-col gap-4 mx-auto">
            <section id="navBanner" className="w-full">
                <NavBanner bannerTitle="Daftar Produk"/>
            </section>
            <section id="productTable"className="w-full">
                <ProductSection products={products}/>
            </section>
        </div>
    )
}