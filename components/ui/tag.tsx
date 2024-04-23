import { cn } from "@/lib/utils";
import React from "react";
import { Icons } from "../Icons";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tagTitle: string;
  withXIcon?: boolean;
  Active?: boolean;
}

const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (
    { className, tagTitle, withXIcon = false, Active = true, ...props },
    ref
  ) => {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center text-sm  text-black-500 rounded-full px-5 py-2 cursor-pointer hover:bg-black-500 hover:text-white-900 transition-all duration-300",
          className,
          {
            "border border-black-100 text-black-900": Active,
          }
        )}
        ref={ref}
        {...props}
      >
        {tagTitle}
        {withXIcon && <Icons.X className="text-black-500 ml-1 h-6 w-6" />}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export { Tag };
