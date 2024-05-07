"use client";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { CartButton } from "../CartButton";
import { Icons } from "../Icons";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import UserAuthClient from "../UseAuthClient";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="block md:hidden border-b border-white-100">
      <MaxWidthWrapper className="py-[20px] px-4">
        <div className="w-full flex items-center justify-between">
          <Link
            className="text-xl capitalize font-extrabold inline-flex items-center gap-4"
            href="/"
          >
            <span className="w-8 h-8 rounded-full bg-black-900 text-white-900 inline-flex items-center justify-center">
              <Icons.Logo className="w-5 h-[26px]" />
            </span>
            {siteConfig.title}
          </Link>
          <div className="flex items-center gap-6 ">
            <Icons.Menu
              className={cn({ hidden: open === true })}
              onClick={() => setOpen(true)}
            />
            <Icons.X
              className={cn({ hidden: open === false })}
              onClick={() => setOpen(false)}
            />
            <CartButton />
            <UserAuthClient />
          </div>
        </div>
      </MaxWidthWrapper>
      <div
        className={cn("w-dvw h-dvh bg-black-900 text-white-900", {
          hidden: open === false,
        })}
      >
        <ul className="flex flex-col items-start p-6 gap-7">
          {siteConfig.nav.map((item) => (
            <li key={item.path} className="text-sm md:text-lg capitalize">
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
