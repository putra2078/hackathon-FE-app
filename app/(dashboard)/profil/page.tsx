import ProfileDetailSection from "@/components/features/profile/ProfileDetailSection";
import NavBanner from "@/components/Shared/NavBanner";

export default function ProfilePage(){
    return(
      <div className="w-full flex flex-col gap-4 mx-auto">
        <section id="navBanner" className="w-full">
          <NavBanner bannerTitle="Detail Akun" />
        </section>
        <section id="profileDetail" className="w-full">
          <ProfileDetailSection/>
        </section>
        </div>
    )
}