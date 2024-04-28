import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";

export default function NewsLetter() {
  return (
    <section className="bg-white-100 w-full h-[200px]">
      <MaxWidthWrapper className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
        <div className="space-y-1 md:space-y-6 max-sm:text-center">
          <h2 className="text-2xl font-bold">Join Our Newsletter</h2>
          <p className="text-sm text-black-500">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <div className="space-x-5 flex max-sm:py-4 max-sm:px-4">
          <input
            type="text"
            placeholder="Your email address"
            className="py-[10px] px-[15px] bg-white-100 rounded-[4px] border border-black-100 w-full max-w-[320px] md:w-[320px] h-[45px]"
          />
          <Button>Subscribe</Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
