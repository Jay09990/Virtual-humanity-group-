"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/lib/hooks/useInView";

type CountUpProps = {
  to: number;
  suffix?: string;
};

export function CountUp({ to, suffix = "" }: CountUpProps) {
  const [value, setValue] = useState(to);
  const hasAnimated = useRef(false);
  const { ref, isInView } = useInView<HTMLSpanElement>();

  useEffect(() => {
    if (
      !isInView ||
      hasAnimated.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    hasAnimated.current = true;
    const duration = 1200;
    let frame = 0;
    let startTime: number | undefined;
    setValue(0);

    const animate = (time: number) => {
      startTime ??= time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, to]);

  return (
    <span ref={ref} className="stat-number tabular" aria-hidden="true">
      {value}
      {suffix}
    </span>
  );
}
