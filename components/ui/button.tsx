import { cn } from "@/lib/utils";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "../slot";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black-900 text-white-900 hover:bg-black-800",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-black-100 text-black-500 hover:bg-black-100",
        outlineBlack:
          "border border-black-900 text-black-900 hover:bg-black-900 hover:text-white-900",
        ghost: "text-black-900 hover:bg-black-100 hover:text-black-900",
        boxSize:
          "border border-black-100 text-black-500 hover:border-black-900 hover:text-black-900",
      },
      size: {
        default: "px-6 py-4",
        sm: "px-4 py-3",
        lg: "w-[284px] h-[44px]",
        icon: "h-[43px] w-[43px]",
        boxSize: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
