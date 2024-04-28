import Image from "next/image";
import React from "react";

export default function ProductSlider() {
  return (
    <div className="w-full max-sm:max-w-[350px] md:w-[534px] md:h-[574px] h-[400px] border border-black-100 rounded-md flex items-center justify-center">
      <Image src={"/shirts/shirt.png"} alt="shirt" width={288} height={404} />
    </div>
  );
}
