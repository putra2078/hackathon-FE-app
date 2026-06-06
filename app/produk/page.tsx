import ProductTable from "@/components/features/product/ProductTable";
import NavBanner from "@/components/Shared/NavBanner";

export default function ProductPage(){
    return(
        <div className="w-full flex flex-col gap-4 mx-auto">
            <section id="navBanner" className="w-full">
                <NavBanner/>
            </section>
            <section id="productTable"className="w-full">
                <ProductTable/>
            </section>
        </div>
    )
}