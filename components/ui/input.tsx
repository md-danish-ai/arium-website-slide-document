import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";

const inputVariants = cva(
  "flex w-full rounded-lg border text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "h-9 border-input bg-transparent px-3 py-1 text-white placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-ring",
        glass:
          "h-8 border-slate-200/90 bg-slate-50/85 backdrop-blur-md px-3 py-1 text-xs text-slate-800 placeholder:text-slate-400 focus-visible:border-cyan-400 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-cyan-400/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
