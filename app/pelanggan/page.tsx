import CustomerTableSection from "@/components/features/pelanggan/CustomerTableSection";
import NavBanner from "@/components/Shared/NavBanner";

export default function CustomerPage(){
    return(
        <div className="w-full flex flex-col gap-4 mx-auto">
            <section id="banner" className="w-full">
                <NavBanner bannerTitle="Daftar Pelanggan"/>
            </section>
            <section id="table" className="w-full">
                <CustomerTableSection/>
            </section>
        </div>
    )
}