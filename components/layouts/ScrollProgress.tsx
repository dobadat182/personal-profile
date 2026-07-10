"use client";

import { cn } from "@/lib/utils";
import { IconArrowUp } from "@tabler/icons-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

const SIZE = 52;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollProgress() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  const dashOffset = useTransform(
    smoothProgress,
    [0, 1],
    [CIRCUMFERENCE, 0],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 160);
  });

  useEffect(() => {
    setVisible(window.scrollY > 160);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      initial={false}
      animate={
        visible
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.85, y: 12 }
      }
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className={cn(
        "group fixed bottom-5 right-4 z-30 flex size-[52px] items-center justify-center rounded-full sm:bottom-8 sm:right-6 cursor-pointer",
        !visible && "pointer-events-none",
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#0a1629] shadow-[0_12px_40px_rgba(10,22,41,0.28)] transition-shadow group-hover:shadow-[0_16px_48px_rgba(10,22,41,0.36)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <span className="absolute inset-0 bg-[linear-gradient(105deg,transparent_30%,rgba(219,244,167,0.22)_50%,transparent_70%)] animate-hero-btn-shine" />
      </span>

      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 -rotate-90"
        aria-hidden
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="rgba(219,244,167,0.2)"
          strokeWidth={STROKE}
        />
        <motion.circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#dbf4a7"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>

      <IconArrowUp
        className="relative size-4 text-[#dbf4a7] transition-transform duration-300 group-hover:-translate-y-0.5"
        stroke={2.25}
        aria-hidden
      />
    </motion.button>
  );
}
