import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import Image from "next/image";

export default function CTACategory() {
  return (
    <section className="bg-white-100 w-full mb-22">
      <MaxWidthWrapper className="flex items-center justify-between h-[304px]">
        <div>
          <h2 className="text-2xl font-bold">Browse Our Fashion Paradise!</h2>
          <p className="text-sm text-black-500 mt-6 mb-7 w-full max-w-[462px]">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <Button>
            Start Browsing <Icons.RightArrow />
          </Button>
        </div>
        <Image
          src="/shirts/CTAImage.png"
          alt="CTAImage"
          width={225}
          height={311}
        />
      </MaxWidthWrapper>
    </section>
  );
}
