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
        <MaxWidthWrapper className="flex items-start justify-between pb-16">
          <div className="w-full max-w-[272px]">
            <Link
              className="text-xl capitalize pr-16 font-extrabold inline-flex items-center gap-5 pb-4"
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
            <div className="flex items-center gap-6">
              <Icons.Github />
              <Icons.Instagram />
              <Icons.Youtube />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12">
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
          <div className="space-y-8">
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
