import Image from "next/image";
import React from "react";

export default function ProductSlider() {
  return (
    <div className="w-[534px] h-[574px] border border-black-100 rounded-md flex items-center justify-center">
      <Image src={"/shirts/shirt.png"} alt="shirt" width={288} height={404} />
    </div>
  );
}
