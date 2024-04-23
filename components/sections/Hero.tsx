import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import { Icons } from "../Icons";

export default function Hero() {
  return (
    <section className="bg-white-100 w-full h-[440px]">
      <MaxWidthWrapper className="flex items-center justify-between h-full">
        <div>
          <div className="mb-9 space-y-4">
            <h2 className="font-semibold text-3xl">Fresh Arrivals Online</h2>
            <p className="text-black-600 text-sm">
              Discover Our Newest Collection Today.
            </p>
          </div>
          <Button>
            View Collection
            <Icons.RightArrow className="text-white-900 ml-2" />
          </Button>
        </div>
        <div className="relative">
          <div className="relative top-8 w-[340px] h-[340px] bg-white-200 rounded-full" />
          <Image
            className="absolute top-5 -right-2"
            src="/HeroMan.png"
            alt="HeroImage"
            width={255}
            height={382}
            quality={100}
          />
          <Icons.HeroStar className="absolute top-8 left-3 " />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
