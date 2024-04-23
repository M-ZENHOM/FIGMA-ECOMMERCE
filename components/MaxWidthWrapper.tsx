import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
export default function MaxWidthWrapper({ children, className }: WrapperProps) {
  return (
    <div className={cn("w-full max-w-[1116px] mx-auto", className)}>
      {children}
    </div>
  );
}
