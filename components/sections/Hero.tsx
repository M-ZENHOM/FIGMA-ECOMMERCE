import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import { Icons } from "../Icons";

export default function Hero() {
  return (
    <section className="bg-white-100 w-full h-[440px]">
      <MaxWidthWrapper className="flex flex-col md:flex-row items-center justify-between h-full">
        <div className="flex flex-col items-center md:items-start md:justify-start justify-center w-full max-sm:absolute max-sm:top-[50%] max-sm:left-[50%] max-sm:translate-x-[-50%] max-sm:translate-y-[-50%] z-10">
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
        <div className="relative max-sm:h-full max-sm:flex max-sm:items-center max-sm:justify-center opacity-50 md:opacity-100">
          <div className="relative top-8 w-[340px] h-[340px] bg-white-200 rounded-full" />
          <Image
            className="absolute md:top-5 -right-2 bottom-[0px]"
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
