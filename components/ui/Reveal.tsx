"use client";

import { useEffect, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/hooks/useInView";

export function Reveal({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    if (
      "IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      document.documentElement.classList.add("motion-ready");
    }
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        isInView ? "reveal-visible" : "reveal-pending",
        className,
      )}
      {...props}
    />
  );
}
