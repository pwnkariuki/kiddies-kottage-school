import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  MapPin,
  Phone,
  Quotes,
  Star,
} from "@phosphor-icons/react";
import {
  ACADEMIC_LEVELS,
  ACTIVITIES,
  APPROACH_PILLARS,
  BRAND,
  CONTACT,
  FEATURES,
  GALLERY,
  STATS,
  TESTIMONIALS,
} from "@/data/schoolData";
import { ACCENT, BrandIcon } from "@/components/BrandIcon";
import type { PageId } from "@/data/schoolData";

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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-kkblue-soft px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-kkblue ring-1 ring-kkblue/15">
      <span className="h-1.5 w-1.5 rounded-full bg-kkyellow" />
      {children}
    </span>
  );
}

export default function HomePage({
  onNavigate,
  onOpenAdmissions,
  onOpenVisit,
}: {
  onNavigate: (p: PageId) => void;
  onOpenAdmissions: () => void;
  onOpenVisit: () => void;
}) {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-kknavy">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 0%, #1672b9 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, #0d5084 0%, transparent 55%)",
          }}
        />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-kkyellow/20 blur-2xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-kkyellow ring-1 ring-white/15">
                <Star className="h-3.5 w-3.5" weight="fill" />
                Admissions open for 2025 &bull; Playgroup to Grade 6
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            >
              Where little hearts{" "}
              <span className="text-kkyellow">learn big</span> and shine bright.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300"
            >
              {BRAND.name} is a warm, Christ-centred Montessori and CBC school on
              Utawala-Githunguri Road, nurturing curious, confident and kind
              learners since {BRAND.established}.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 rounded-xl bg-kkyellow px-6 py-3.5 text-sm font-extrabold text-kknavy shadow-lg shadow-kkyellow/25 transition hover:bg-kkyellow-dark hover:text-white active:scale-95"
              >
                <Calendar className="h-4 w-4" weight="fill" />
                Apply for Admission
              </button>
              <button
                onClick={onOpenVisit}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 active:scale-95"
              >
                Book a Campus Tour
                <ArrowRight className="h-4 w-4" weight="bold" />
              </button>
            </motion.div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-kkgreen" weight="fill" />
                Safe, fenced campus
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-kkgreen" weight="fill" />
                1:12 teacher ratio
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-kkgreen" weight="fill" />
                Hot nutritious meals
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl">
              <img
                src={GALLERY[0].src}
                alt="Children learning in a bright Montessori classroom"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 top-6 hidden rounded-2xl bg-white p-3 shadow-xl sm:block">
              <div className="flex items-center gap-2.5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-kkgreen/15 text-kkgreen">
                  <BrandIcon name="grad" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-extrabold text-kknavy">
                    CBC + Montessori
                  </p>
                  <p className="text-xs text-slate-500">Learn by doing</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-kkyellow p-3 text-kknavy shadow-xl">
              <p className="font-display text-2xl font-extrabold leading-none">
                15+
              </p>
              <p className="text-xs font-bold">Years of care</p>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-white/10 bg-white/[0.04]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-7 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-extrabold text-kkyellow">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-300">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Learning Approach</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
            A gentle blend of Montessori, CBC &amp; Christian values
          </h2>
          <p className="mt-4 text-slate-600">
            We follow the child, not just the syllabus. Hands-on materials,
            competency-based learning and a foundation of faith shape every day.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH_PILLARS.map((p, i) => {
            const a = ACCENT[p.accent];
            return (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl ${a.soft} ${a.text}`}
                  >
                    <BrandIcon name={p.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-extrabold text-kknavy">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.blurb}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* LEVELS */}
      <section className="bg-kkslate py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <Eyebrow>Academics</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
                A clear path from Playgroup to Grade 6
              </h2>
            </div>
            <button
              onClick={() => onNavigate("academics")}
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-kkblue hover:gap-2.5 transition-all"
            >
              Explore all levels <ArrowRight className="h-4 w-4" weight="bold" />
            </button>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ACADEMIC_LEVELS.map((l, i) => {
              const a = ACCENT[l.accent];
              return (
                <Reveal key={l.id} delay={i * 0.06}>
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg">
                    <div className={`bg-gradient-to-br ${a.grad} px-5 py-4 text-white`}>
                      <p className="text-xs font-bold uppercase tracking-wide opacity-90">
                        {l.ages}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-extrabold">
                        {l.name}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-sm text-slate-600">{l.grades}</p>
                      <ul className="mt-3 space-y-2">
                        {l.highlights.slice(0, 3).map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <CheckCircle
                              className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`}
                              weight="fill"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEYOND CLASSROOM */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Beyond the Classroom</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
            Every child finds a passion
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.slice(0, 6).map((act, i) => {
            const a = ACCENT[act.accent];
            return (
              <Reveal key={act.id} delay={i * 0.05}>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${a.soft} ${a.text}`}
                  >
                    <BrandIcon name={act.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-kknavy">
                      {act.name}
                    </h3>
                    <p className="text-sm text-slate-500">{act.blurb}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate("cocurricular")}
            className="inline-flex items-center gap-2 rounded-xl bg-kknavy px-6 py-3 text-sm font-extrabold text-white transition hover:bg-kkblue active:scale-95"
          >
            See all clubs &amp; sports
            <ArrowRight className="h-4 w-4" weight="bold" />
          </button>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-kkcream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Why Parents Choose Us</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
              Safety, warmth and academic strength
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const a = ACCENT[f.accent];
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-xl ${a.soft} ${a.text}`}
                    >
                      <BrandIcon name={f.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-extrabold text-kknavy">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {f.blurb}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Life at Kottage</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
            A peek into our days
          </h2>
        </Reveal>
        <div className="mt-10 columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.id} delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl">
                <img
                  src={g.src}
                  alt={g.caption}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-kknavy/85 to-transparent p-3 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-kkslate py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Parent Voices</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
              Trusted by our families
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <Quotes className="h-8 w-8 text-kkyellow" weight="fill" />
                  <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-700">
                    {t.quote}
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-kkblue text-sm font-extrabold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <figcaption className="font-display font-extrabold text-kknavy">
                        {t.name}
                      </figcaption>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-4 w-4 text-kkyellow" weight="fill" />
                      ))}
                    </div>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS BANNER */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
                     <div className="relative overflow-hidden rounded-3xl bg-kknavy px-8 py-12 text-center shadow-xl">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(50% 80% at 100% 0%, #1672b9 0%, transparent 60%), radial-gradient(50% 80% at 0% 100%, #0d5084 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-white sm:text-4xl">
                Ready to give your child a joyful start?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Admissions are open for 2025. Visit our campus on
                Utawala-Githunguri Road or send an enquiry today.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  onClick={onOpenAdmissions}
                  className="inline-flex items-center gap-2 rounded-xl bg-kkyellow px-6 py-3.5 text-sm font-extrabold text-kknavy transition hover:bg-kkyellow-dark hover:text-white active:scale-95"
                >
                  <Calendar className="h-4 w-4" weight="fill" />
                  Start Admission
                </button>
                <a
                  href={`tel:${CONTACT.tel[0]}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white ring-1 ring-white/20 transition hover:bg-white/15 active:scale-95"
                >
                  <Phone className="h-4 w-4" weight="fill" />
                  {CONTACT.phones[0]}
                </a>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-kkyellow" weight="fill" />
                {CONTACT.address}, {CONTACT.city}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}