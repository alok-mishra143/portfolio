"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
export default Section;
