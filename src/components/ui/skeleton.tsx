/** @format */

import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#706F70]/20", className)}
      {...props}
    />
  );
}

export { Skeleton };
