"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Icons } from "../Icons";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";

const tabs = [
  {
    tab: "details",
    icon: <Icons.More />,
  },
  {
    tab: "reviews",
    icon: <Icons.EmptyStart />,
  },
];
export default function ProductTabs() {
  const [active, setActive] = React.useState(tabs[0].tab);
  return (
    <div className="flex flex-col md:flex-row space-x-7 items-center pb-[176px] max-sm:pt-10">
      <div className="flex flex-row md:flex-col gap-5 max-sm:pb-10">
        {tabs.map((type) => (
          <span
            key={type.tab}
            className={cn(
              "w-full max-w-[241px] h-[41px] text-black-500 text-sm font-medium px-6 py-3 rounded-lg cursor-pointer capitalize inline-flex items-center",
              {
                "bg-white-100 text-black-900": type.tab === active,
              }
            )}
            onClick={() => setActive(type.tab)}
          >
            <span className="mr-3">{type.icon}</span> {type.tab}
          </span>
        ))}
      </div>
      {active === "details" ? <ProductDescription /> : <ProductReviews />}
    </div>
  );
}
