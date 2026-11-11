import { motion } from "framer-motion";
import {
  Atom,
  Basketball,
  Calendar,
  BookOpen,
  Brain,
  Calculator,
  ChatCircle,
  ClipboardText,
  Football,
  GameController,
  GraduationCap,
  GridFour,
  HandHeart,
  Heart,
  Leaf,
  Medal,
  MusicNotes,
  PaintBrush,
  Rocket,
  Scroll,
  ShieldCheck,
  Sparkle,
  Star,
  Sword,
  Trophy,
  Users,
  Drop,
  type Icon,
} from "@phosphor-icons/react";

const REGISTRY: Record<string, Icon> = {
  atom: Atom,
  ball: Basketball,
  blocks: GridFour,
  book: BookOpen,
  brain: Brain,
  calculator: Calculator,
  chat: ChatCircle,
  clipboard: ClipboardText,
  football: Football,
  game: GameController,
  grad: GraduationCap,
  heart: Heart,
  handheart: HandHeart,
  leaf: Leaf,
  medal: Medal,
  music: MusicNotes,
  palette: PaintBrush,
  rocket: Rocket,
  scroll: Scroll,
  shield: ShieldCheck,
  sparkle: Sparkle,
  star: Star,
  sword: Sword,
  trophy: Trophy,
  users: Users,
  water: Drop,
};

export function BrandIcon({
  name,
  className,
  weight = "fill",
}: {
  name: string;
  className?: string;
  weight?: "thin" | "light" | "regular" | "fill" | "bold" | "duotone";
}) {
  const Cmp = REGISTRY[name] ?? Sparkle;
  return <Cmp className={className} weight={weight} />;
}

export const ACCENT: Record<
  string,
  { text: string; bg: string; soft: string; ring: string; grad: string }
> = {
  blue: {
    text: "text-kkblue",
    bg: "bg-kkblue",
    soft: "bg-kkblue/10",
    ring: "ring-kkblue/30",
    grad: "from-kkblue to-kkblue-dark",
  },
  yellow: {
    text: "text-kkyellow-dark",
    bg: "bg-kkyellow",
    soft: "bg-kkyellow/20",
    ring: "ring-kkyellow/40",
    grad: "from-kkyellow to-amber-400",
  },
  red: {
    text: "text-kkred",
    bg: "bg-kkred",
    soft: "bg-kkred/10",
    ring: "ring-kkred/30",
    grad: "from-kkred to-rose-500",
  },
  purple: {
    text: "text-kkpurple",
    bg: "bg-kkpurple",
    soft: "bg-kkpurple/10",
    ring: "ring-kkpurple/30",
    grad: "from-kkpurple to-indigo-500",
  },
  green: {
    text: "text-kkgreen",
    bg: "bg-kkgreen",
    soft: "bg-kkgreen/10",
    ring: "ring-kkgreen/30",
    grad: "from-kkgreen to-emerald-500",
  },
};

/* ---- Shared UI helpers used across pages ---- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-kkblue-soft px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-kkblue ring-1 ring-kkblue/15">
      <span className="h-1.5 w-1.5 rounded-full bg-kkyellow" />
      {children}
    </span>
  );
}

export function PageHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-kknavy">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(60% 80% at 90% 0%, #008fbd 0%, transparent 55%), radial-gradient(50% 70% at 0% 100%, #056487 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">{intro}</p>
      </div>
    </section>
  );
}

export function Cta({
  onOpenAdmissions,
  label = "Apply for Admission",
}: {
  onOpenAdmissions: () => void;
  label?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-kkblue to-kkblue-dark px-8 py-10 text-center shadow-lg ring-1 ring-white/10 sm:flex-row sm:text-left">
          <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-kkyellow/20 blur-2xl" />
          <div className="relative">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Give your child a joyful, secure start
            </h2>
            <p className="mt-2 text-blue-100">
              Admissions are open throughout the year at Kiddies Kottage School.
            </p>
          </div>
          <button
            onClick={onOpenAdmissions}
            className="relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-kkyellow px-6 py-3.5 text-sm font-extrabold text-kknavy shadow-sm shadow-kknavy/20 transition hover:bg-kkyellow-dark hover:text-white active:scale-95"
          >
            <Calendar className="h-4 w-4" weight="fill" />
            {label}
          </button>
        </div>
      </Reveal>
    </section>
  );
}