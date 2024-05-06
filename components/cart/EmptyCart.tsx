import React from "react";
import { Icons } from "../Icons";
import { Button, buttonVariants } from "../ui/button";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function EmptyCart() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center max-w-[250px] w-full gap-5 py-10 text-center">
      <Icons.EmptyCart className="w-20 h-20" />
      <h2 className="font-bold text-2xl">Your cart is empty</h2>
      <p className="text-black-500">
        Looks like you haven't added anything to your cart yet
      </p>
      <Link
        href="/search"
        className={cn(buttonVariants({ variant: "default" }))}
      >
        Go shopping <Icons.RightArrow />
      </Link>
    </MaxWidthWrapper>
  );
}
