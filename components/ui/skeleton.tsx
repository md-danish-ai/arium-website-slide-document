import * as React from "react";
import { cn } from "@lib/utils";

/**
 * Reusable Skeleton loading placeholder supporting Light Frosted & Midnight Dark modes.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-slate-200/80 dark:bg-midnight-lightest/85",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
