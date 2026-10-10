import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: "light" | "dark" | "outline-dark" | "outline-light";
};

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <a
      className={cn("button", `button-${variant}`, className)}
      {...props}
    />
  );
}
