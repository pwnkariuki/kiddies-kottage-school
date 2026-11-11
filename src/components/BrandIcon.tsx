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
} from "@/lib/icons";

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
    grad: "from-kkyellow to-kkyellow-dark",
  },
  red: {
    text: "text-kkred",
    bg: "bg-kkred",
    soft: "bg-kkred/10",
    ring: "ring-kkred/30",
    grad: "from-kkred to-kkred",
  },
  purple: {
    text: "text-kkpurple",
    bg: "bg-kkpurple",
    soft: "bg-kkpurple/10",
    ring: "ring-kkpurple/30",
    grad: "from-kkpurple to-kkpurple",
  },
  green: {
    text: "text-kkgreen",
    bg: "bg-kkgreen",
    soft: "bg-kkgreen/10",
    ring: "ring-kkgreen/30",
    grad: "from-kkgreen to-kkgreen",
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
    <span className="school-eyebrow inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kkblue">
      <span className="h-2 w-2 bg-kkyellow" />
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
    <section className="bg-kkslate py-14 md:py-20">
      <div className="school-shell max-w-5xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] text-kknavy md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{intro}</p>
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
    <section className="school-shell py-14 md:py-20">
      <Reveal>
        <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden bg-kkblue px-7 py-10 text-white md:flex-row md:items-center md:px-14 md:py-14">
          <div className="relative z-10 max-w-2xl">
            <Eyebrow>We’d love to meet you</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Give your child a joyful, secure start
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/80">
              Admissions are open throughout the year at Kiddies Kottage School.
            </p>
          </div>
          <button
            onClick={onOpenAdmissions}
            className="relative z-10 inline-flex shrink-0 items-center gap-2 rounded-sm bg-kkyellow px-5 py-3 text-sm font-bold text-kknavy transition hover:bg-kkyellow-dark hover:text-white active:scale-95"
          >
            <Calendar className="h-4 w-4" weight="fill" />
            {label}
          </button>
          <span aria-hidden="true" className="absolute -bottom-12 -right-3 hidden h-52 w-52 rotate-12 border-[24px] border-white/10 md:block" />
        </div>
      </Reveal>
    </section>
  );
}