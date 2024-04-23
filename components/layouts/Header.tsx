import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { Icons } from "../Icons";
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Header() {
  return (
    <header>
      <MaxWidthWrapper className="flex items-center justify-between py-[20px] px-4">
        <div className="flex items-center justify-between ">
          <Link
            className="text-xl capitalize pr-16 font-extrabold inline-flex items-center gap-4"
            href="/"
          >
            <span className="w-8 h-8 rounded-full bg-black-900 text-white-900 inline-flex items-center justify-center">
              <Icons.Logo className="w-5 h-[26px]" />
            </span>
            {siteConfig.title}
          </Link>
          <ul className="flex items-center gap-7">
            {siteConfig.nav.map((item) => (
              <li key={item.path} className="text-lg capitalize">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-7">
          {/* this input need to refactor */}
          <div className="relative">
            <input
              placeholder="Search Products"
              className="rounded-md border border-black-100 py-[10px] px-[15px] pl-9"
            />
            <Icons.Search className="absolute w-6 h-6 left-[15px] top-[50%] -translate-y-[50%]" />
          </div>
          <Icons.Cart className="w-6 h-6" />
          <Icons.UserTwo className="w-6 h-6" />
        </div>
      </MaxWidthWrapper>
    </header>
  );
}