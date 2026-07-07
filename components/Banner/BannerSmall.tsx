"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BannerProps {
  title: string;
}

export default function BannerSmall({ title }: BannerProps) {
  const directory = usePathname().split('/');
  return (
    <section className="rounded-xl bg-linear-to-r from-primary via-primary-400 via-53% to-primary-500 to-89% flex justify-between">
      <div className="text-background p-8">
        <div className="flex text-sm opacity-80 mb-1 font-medium gap-2">
          <nav className="flex flex-row gap-2">
            {
              directory.map((dir, idx) => {
                const href = `/${directory.slice(0, idx + 1).join('/')}`
                const isFirst = href == '/'

                const isLast = idx === (directory.length - 1);

                const formatTitle = (text: string) => {
                  return text
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, (chr) => chr.toUpperCase());
                };

                return (
                  <div key={idx}>
                    { !isFirst ? (<span className="pr-2">/</span>) : <></>}
                    { isLast ? (
                      <span>{formatTitle(dir)}</span>
                    ) : (
                      <div>
                        <Link
                          href={href}
                        >
                          {isFirst ? 'Manajemen Toko' : formatTitle(dir)}
                        </Link>
                      </div>

                    )}
                  </div>
                )
              })
            }
          </nav>
        </div>
        <h1 className="font-bold text-2xl/tight">{title ? title : "Title"}</h1>
      </div>
      <span>
        <img src="/banner-logo.png" alt="" className="w-40 opacity-40" />
      </span>
    </section>
  );
}
