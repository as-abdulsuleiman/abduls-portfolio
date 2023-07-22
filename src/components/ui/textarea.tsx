/** @format */

import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, ...props }, ref) => {
    return (
      <label className="relative">
        {label ? (
          <span className="text-[10px] font-semibold text-[#D8D3CB] text-left">
            {label}
          </span>
        ) : null}
        <textarea
          className={cn(
            "flex min-h-[80px] mt-0.5 text-[#D8D3CB] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-[#D8D3CB] focus-visible:outline-none focus-visible:ring-[0.1px] focus-visible:ring-ring focus-visible:ring-offset-[0.1px] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error ? (
          <p className="text-red-500 text-sm absolute bottom-[-22.4px] ">
            {error}
          </p>
        ) : null}
      </label>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
