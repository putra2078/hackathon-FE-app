import Banner from "@/components/Banner";

export default function Home(){
  return (
    <div className="w-full flex flex-col gap-12 mx-auto">
      <section id="banner-welcome" className="w-full">
        <Banner/>
      </section>
    </div>
  )
}