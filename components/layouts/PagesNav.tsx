import Link from "next/link";
import React from "react";
import { Icons } from "../Icons";

interface PagesNavProps {
  title?: string;
  secondTitle: string;
  bigTitle?: string;
}

export default function PagesNav({
  title,
  secondTitle,
  bigTitle,
}: PagesNavProps) {
  return (
    <div className="flex flex-col py-5 px-4">
      {bigTitle && (
        <h2 className="text-black-900 font-bold text-2xl pb-3">{bigTitle}</h2>
      )}
      <div className="flex items-center text-sm space-x-1">
        <Link href="/" className="text-black-500 font-medium">
          {title ?? "Ecommerce"}
        </Link>
        <span className="w-6 h-6 inline-flex items-center justify-center">
          <Icons.ChevronRight className="w-[6px] h-4" />
        </span>
        <h2 className="text-black-900 font-medium">{secondTitle}</h2>
      </div>
    </div>
  );
}
