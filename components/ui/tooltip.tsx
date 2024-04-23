import { cn } from "@/lib/utils";
import React from "react";

interface ToolTipProps extends React.HTMLAttributes<HTMLSpanElement> {
  toolTipText: string;
  direction: "top" | "bottom";
}

const ToolTip = React.forwardRef<HTMLDivElement, ToolTipProps>(
  ({ className, toolTipText, direction, children, ...props }, ref) => {
    return (
      <div ref={ref} className="relative group" {...props}>
        <span
          className={cn(
            "hidden group-hover:block absolute px-3 py-1 rounded-md bg-black-900 text-white-900 text-sm",
            className,
            {
              "-bottom-8 left-1": direction === "bottom",
              "-top-8 left-1": direction === "top",
            }
          )}
        >
          <span
            className={cn("bg-black-900 w-3 h-3", {
              "absolute -top-1 left-1/4 transform -translate-x-1/2 rotate-45":
                direction === "bottom",
              "absolute -bottom-1 right-1/4 transform -translate-x-1/2 rotate-45":
                direction === "top",
            })}
          />
          {toolTipText}
        </span>
        {children}
      </div>
    );
  }
);

ToolTip.displayName = "ToolTip";

export { ToolTip };
