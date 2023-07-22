/** @format */

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, type, ...props }, ref) => {
    return (
      <label className="relative">
        {label ? (
          <span className="after:content-['*'] after:ml-1 after:mt-0.5 after:text-red-500 text-[10px] font-semibold text-[#D8D3CB] text-left">
            {label}
          </span>
        ) : null}
        <input
          type={type}
          className={cn(
            "flex h-10 mt-0.5 w-full text-[#D8D3CB] rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#D8D3CB] focus-visible:outline-none focus-visible:ring-[0.1px] focus-visible:ring-ring focus-visible:ring-offset-[0.1px] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error ? (
          <p className="text-red-500 text-xs absolute bottom-[-20px] ml-[2px] font-medium">
            {error}
          </p>
        ) : null}
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
