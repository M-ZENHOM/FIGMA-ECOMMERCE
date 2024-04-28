import Link from "next/link";
import React from "react";
import { Icons } from "../Icons";
import { siteConfig } from "@/config/siteConfig";

export default function MobileNav() {
  return (
    <div className="md:hidden flex items-center justify-between">
      <Link
        className="text-xl capitalize pr-16 font-extrabold inline-flex items-center gap-4"
        href="/"
      >
        <span className="w-8 h-8 rounded-full bg-black-900 text-white-900 inline-flex items-center justify-center">
          <Icons.Logo className="w-5 h-[26px]" />
        </span>
        {siteConfig.title}
      </Link>
      <div className="group">
        <Icons.Menu className="w-6 h-6" />
        <div className="fixed top-[0px] left-[0px] h-full w-[200px]   scale-0 group-hover:scale-100 bg-white-100 p-4 rounded-md z-10">
          <Icons.X className="w-6 h-6 absolute right-2 top-2 " />
          <ul className="flex flex-col items-start gap-4">
            {siteConfig.nav.map((item) => (
              <li key={item.path} className="text-base capitalize">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex flex-col items-start border-t border-black-200 my-6 py-6 gap-5 ">
            {/* this input need to refactor */}
            <div className="relative">
              <input
                placeholder="Search Products"
                className="rounded-md border border-black-100 py-[6px] px-[8px] pl-9 w-full max-w-[200px] placeholder:text-sm"
              />
              <Icons.Search className="absolute w-6 h-6 left-[15px] top-[50%] -translate-y-[50%]" />
            </div>
            <div className="flex items-center gap-4 ">
              <Icons.Cart className="w-6 h-6" />
              <Icons.UserTwo className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
