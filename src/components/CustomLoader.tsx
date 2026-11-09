import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "@phosphor-icons/react";

const SIZES = {
  sm: { ring: "h-14 w-14", border: "border-[3px]", icon: "h-6 w-6" },
  md: { ring: "h-20 w-20", border: "border-4", icon: "h-9 w-9" },
  lg: { ring: "h-28 w-28", border: "border-[5px]", icon: "h-12 w-12" },
} as const;

type Size = keyof typeof SIZES;

/** Spinning brand ring around a graduation-cap badge. */
export function LoaderMark({
  size = "md",
  className = "",
}: {
  size?: Size;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const s = SIZES[size];
  return (
    <div className={`relative grid place-items-center ${s.ring} ${className}`}>
      <motion.span
        aria-hidden
        className={`absolute inset-0 rounded-full ${s.border} border-kkblue/15 border-t-kkblue border-r-kkyellow`}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        className="grid place-items-center rounded-full bg-white shadow-md shadow-kkblue/10 ring-1 ring-blue-100"
        style={{ width: "66%", height: "66%" }}
        animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <GraduationCap className={`${s.icon} text-kkblue`} weight="fill" />
      </motion.span>
    </div>
  );
}

/** Four bouncing brand-colored dots. */
export function LoaderDots({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const colors = ["bg-kkblue", "bg-kkyellow", "bg-kkgreen", "bg-kkred"];
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      {colors.map((c, i) => (
        <motion.span
          key={c}
          className={`h-2 w-2 rounded-full ${c}`}
          animate={reduce ? undefined : { y: [0, -6, 0], opacity: [0.45, 1, 0.45] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  );
}

/** Full-viewport branded loading overlay. */
export function FullPageLoader({
  label = "Preparing the learning playground...",
  sublabel,
}: {
  label?: string;
  sublabel?: string;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] grid place-items-center bg-gradient-to-br from-kkslate via-white to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <LoaderMark size="lg" />
        <div className="space-y-2">
          <p className="font-display text-lg font-extrabold text-kknavy">{label}</p>
          <LoaderDots />
          {sublabel && <p className="text-sm text-slate-500">{sublabel}</p>}
        </div>
      </div>
    </motion.div>
  );
}

/** Inline / in-section loading state. */
export function InlineLoader({
  label = "Loading...",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 py-10 ${className}`}
      role="status"
      aria-live="polite"
    >
      <LoaderMark size="md" />
      <p className="text-sm font-semibold text-slate-500">{label}</p>
    </div>
  );
}

/** Compact spinner for button submit states. */
export function ButtonLoader({ label }: { label?: string }) {
  const reduce = useReducedMotion();
  return (
    <span className="inline-flex items-center justify-center gap-2">
      <motion.span
        aria-hidden
        className="h-4 w-4 rounded-full border-2 border-kknavy/30 border-t-kknavy"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
      />
      {label && <span>{label}</span>}
    </span>
  );
}