import React from "react";
import { ToolTip } from "./ui/tooltip";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function SearchSideBar() {
  return (
    <div className="max-w-[360px] md:max-w-[248px] w-full  border border-black-100 rounded-md max-sm:flex max-sm:items-start pt-6 max-sm:mx-auto ">
      <div className="max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
        <div className="px-5  space-y-5">
          <h2 className="text-sm font-medium">Categories</h2>
          <ul>
            {filterOptions.categories.map((category) => (
              <li
                key={category}
                className="flex items-center gap-[10px] px-1 py-1 md:py-4 capitalize text-sm text-black-600 border-b border-white-200"
              >
                <input id={category} type="checkbox" />
                <label htmlFor={category}>{category}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-8 px-5">
          <h2 className="text-sm font-medium">Color</h2>
          <div className="flex items-center gap-3 py-[10px]">
            {filterOptions.colors.map((color) => (
              <span
                key={color}
                className={cn(
                  "relative group w-6 h-6 rounded-full inline-block bg-blue-900 cursor-pointer",
                  color === "blue" && "bg-blue-900",
                  color === "yellow" && "bg-yellow-900",
                  color === "green" && "bg-green-900"
                )}
              >
                {color === "blue" && (
                  <span className="absolute -top-1 -left-1 border border-black-900 w-7 h-7 rounded-full" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-between">
        <div className="pb-8 px-5">
          <h2 className="text-sm font-medium">Size</h2>
          <div className="flex flex-wrap items-center gap-3 py-[12px] w-full max-w-[200px]">
            {filterOptions.sizes.map((size) => (
              <Button key={size} variant="boxSize" size="boxSize">
                {size}
              </Button>
            ))}
          </div>
        </div>
        <div className="pb-8 px-5">
          <h2 className="text-sm font-medium">Price</h2>
          <ToolTip toolTipText="151$ - 200$" direction="bottom">
            <input
              type="range"
              className="w-full h-1 bg-black-300 appearance-none cursor-pointer rounded-lg"
            />
          </ToolTip>
        </div>
      </div>
    </div>
  );
}

const filterOptions = {
  categories: ["perfume", "thermos", "shoe", "hat", "handbag", "trousers"],
  colors: ["blue", "yellow", "green"],
  sizes: ["S", "M", "L", "XL", "2XL"],
};
