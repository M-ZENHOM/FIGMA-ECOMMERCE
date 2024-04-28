import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Icons } from "../Icons";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import NewsLetter from "./NewsLetter";

export default function Footer() {
  return (
    <>
      <NewsLetter />
      <footer className="pt-14">
        <MaxWidthWrapper className="flex md:flex-row flex-col md:items-start items-center justify-center md:justify-between pb-16 max-sm:px-4">
          <div className="w-full max-w-[272px] max-sm:pb-10 max-sm:text-center">
            <Link
              className="text-xl capitalize md:pr-16 font-extrabold inline-flex items-center max-sm:justify-center gap-5 pb-4"
              href="/"
            >
              <span className="w-[44px] h-[44px] rounded-md border  border-black-100 inline-flex items-center justify-center">
                <Icons.Logo className="w-5 h-[26px]" />
              </span>
              {siteConfig.title}
            </Link>
            <p className="text-black-500 text-sm pb-7">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="flex items-center max-sm:justify-center gap-6">
              <Icons.Github />
              <Icons.Instagram />
              <Icons.Youtube />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 ">
            {siteConfig.footer.map((item) => (
              <div key={item.title}>
                <h2 className="uppercase text-sm text-black-300 pb-8">
                  {item.title}
                </h2>
                <ul className="space-y-5">
                  {item.links.map((link) => (
                    <li
                      key={link.title}
                      className="text-sm text-black-500 font-medium"
                    >
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-8 max-sm:pt-8">
            <h2 className="text-sm text-black-300 uppercase">
              ACCEPTED PAYMENTS
            </h2>
            <div className="flex items-center gap-6">
              <Icons.MasterCard />
              <Icons.AmexLogo />
              <Icons.Visa />
            </div>
          </div>
        </MaxWidthWrapper>
        <p className="h-[79px] inline-flex items-center justify-center w-full border-t border-white-100 text-sm text-black-500tai">
          © 2024 DevCut. All rights reserved.
        </p>
      </footer>
    </>
  );
}
