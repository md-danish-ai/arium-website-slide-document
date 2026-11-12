import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        teal: "border-teal/30 bg-teal/10 text-teal",
        purple:
          "border-secondary-purple/30 bg-secondary-purple/10 text-secondary-purple",
        yellow:
          "border-secondary-yellow/30 bg-secondary-yellow/10 text-amber-200",
        peach:
          "border-secondary-peach/30 bg-secondary-peach/10 text-orange-200",
        midnight: "border-midnight-lightest bg-midnight-lighter text-slate-300",
        glass:
          "border-slate-200/85 bg-white/85 backdrop-blur-md text-slate-600 shadow-xs dark:border-midnight-lightest dark:bg-midnight-lighter/85 dark:text-slate-200",
        glassCyan:
          "border-cyan-200/80 bg-cyan-50/85 backdrop-blur-md text-cyan-700 dark:border-cyan-400/35 dark:bg-cyan-500/15 dark:text-teal",
        glassPurple:
          "border-purple-200/80 bg-purple-50/85 backdrop-blur-md text-purple-700 dark:border-purple-400/35 dark:bg-purple-500/15 dark:text-purple-200",
        glassEmerald:
          "border-emerald-200/80 bg-emerald-50/85 backdrop-blur-md text-emerald-700 dark:border-emerald-400/35 dark:bg-emerald-500/15 dark:text-emerald-300",
        glassViolet:
          "border-violet-200/80 bg-violet-50/85 backdrop-blur-md text-violet-700 dark:border-violet-400/35 dark:bg-violet-500/15 dark:text-violet-200",
        glassAmber:
          "border-amber-200/80 bg-amber-50/85 backdrop-blur-md text-amber-700 dark:border-amber-400/35 dark:bg-amber-500/15 dark:text-amber-200",
        glassRose:
          "border-rose-200/80 bg-rose-50/85 backdrop-blur-md text-rose-700 dark:border-rose-400/35 dark:bg-rose-500/15 dark:text-rose-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
