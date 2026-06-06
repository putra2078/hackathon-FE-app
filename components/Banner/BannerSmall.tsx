interface BannerProps {
  title: string;
  breadcrumbs: string[];
}

export default function BannerSmall({ title, breadcrumbs }: BannerProps) {
  return (
    <section className="rounded-xl bg-linear-to-r from-primary via-primary-400 via-53% to-primary-500 to-89% flex justify-between ">
      <div className="text-background p-8">
        <p className="text-sm opacity-80 mb-1 font-medium">
          {breadcrumbs ? breadcrumbs.join(" / ") : "./br"}
        </p>
        <h1 className="font-bold text-2xl/tight">{title ? title : "Title"}</h1>
      </div>
      <span>
        <img src="banner-logo.png" alt="" className="w-40 opacity-40" />
      </span>
    </section>
  );
}
