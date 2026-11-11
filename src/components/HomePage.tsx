import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  MapPin,
  Phone,
  Quotes,
  Star,
} from "@/lib/icons";
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
import { GalleryLightbox } from "@/components/Modals";
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
    <span className="school-eyebrow inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kkblue">
      <span className="h-2 w-2 bg-kkyellow" />
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
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <div>
      {/* HERO */}
      <section className="school-shell grid min-h-[620px] items-center gap-9 py-12 md:grid-cols-[0.92fr_1.08fr] md:py-16 lg:min-h-[680px] lg:gap-14">
        <div className="school-reveal order-2 md:order-1">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="school-eyebrow inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kkblue">
                <span className="size-2 bg-kkyellow" />
                A brighter beginning in Utawala
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 max-w-xl font-display text-[2.9rem] font-extrabold leading-[1.06] text-kknavy sm:text-5xl lg:text-[3.65rem]"
            >
              Where little hearts{" "}
              <span className="text-kkblue">learn big</span> and shine bright.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-lg text-base leading-7 text-slate-600"
            >
              {BRAND.name} is a warm, Christ-centred CBC school on Utawala-Githunguri Road, nurturing curious, confident and kind learners since {BRAND.established}.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={onOpenAdmissions}
                className="inline-flex h-12 items-center gap-2 rounded-sm bg-kkblue px-5 text-sm font-bold text-white transition hover:bg-kkblue-dark active:scale-95"
              >
                Explore admissions
                <ArrowRight className="h-4 w-4" weight="bold" />
              </button>
              <button
                onClick={onOpenVisit}
                className="inline-flex h-12 items-center gap-2 border border-kkblue/30 px-5 text-sm font-bold text-kkblue transition hover:bg-kkslate active:scale-95"
              >
                Book a campus tour
              </button>
            </motion.div>
            <div className="mt-9 flex items-center gap-3 border-t border-slate-200 pt-5">
              <span className="grid size-9 place-items-center rounded-full bg-kkblue-soft text-kkblue">
                <CheckCircle className="h-4 w-4" weight="fill" />
              </span>
              <p className="text-sm font-medium text-slate-600">
                Safe campus, caring teachers, learning for life.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="school-reveal-delay relative order-1 md:order-2"
        >
          <div className="absolute -right-3 -top-3 z-10 h-20 w-20 border-r-2 border-t-2 border-kkyellow md:-right-5 md:-top-5 md:h-28 md:w-28" />
          <figure className="relative aspect-[1.13] overflow-hidden bg-kkslate">
            <img
              src={GALLERY[0].src}
              srcSet={GALLERY[0].srcSet}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Children enjoying activities at school"
              className="h-full w-full object-cover"
              width={GALLERY[0].width}
              height={GALLERY[0].height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption className="absolute left-4 top-4 bg-white/95 px-3 py-2 text-xs font-semibold text-kknavy">
              A place where curiosity takes root
            </figcaption>
          </figure>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 bg-kkyellow px-4 py-3 text-kknavy md:-left-6 md:bottom-7">
            <span className="font-display text-2xl font-extrabold">1:12</span>
            <span className="max-w-[8rem] text-xs font-bold leading-4">teacher-to-learner ratio</span>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="school-shell grid grid-cols-2 gap-y-5 py-6 md:grid-cols-4 md:py-7">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-l-2 border-kkyellow pl-4">
              <p className="font-display text-sm font-extrabold text-kknavy md:text-base">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="school-shell school-section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Learning Approach</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
            A gentle blend of CBC learning &amp; Christian values
          </h2>
          <p className="mt-4 text-slate-600">
            We follow the child, not just the syllabus. Hands-on materials,
            competency-based learning and a foundation of faith shape every day.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-0 border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {APPROACH_PILLARS.map((p, i) => {
            const a = ACCENT[p.accent];
            return (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="group h-full border-b border-slate-200 bg-white py-6 transition-colors hover:bg-kkslate/60 lg:border-b-0 lg:px-6 first:lg:pl-0 last:lg:pr-0">
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
      <section className="bg-kkslate">
        <div className="school-shell school-section">
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
          <div className="mt-9 grid gap-0 border-y border-slate-200 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
            {ACADEMIC_LEVELS.map((l, i) => {
              const a = ACCENT[l.accent];
              return (
                <Reveal key={l.id} delay={i * 0.06}>
                  <div className="flex h-full flex-col border-b border-slate-200 bg-transparent py-6 transition-colors hover:bg-white md:px-5 lg:border-b-0">
                    <div className="border-t-2 border-kkblue pb-3 pt-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-kkblue">
                        {l.ages}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-extrabold text-kknavy">
                        {l.name}
                      </h3>
                    </div>
                    <div className="flex flex-1 flex-col">
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
      <section className="school-shell school-section">
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
                <div className="flex items-center gap-4 border-t border-slate-200 bg-white py-4 transition-colors hover:bg-kkslate/60 sm:px-4">
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
            className="inline-flex items-center gap-2 rounded-sm bg-kknavy px-6 py-3 text-sm font-bold text-white transition hover:bg-kkblue active:scale-95"
          >
            See all clubs &amp; sports
            <ArrowRight className="h-4 w-4" weight="bold" />
          </button>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-kkcream">
        <div className="school-shell school-section">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Why Parents Choose Us</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
              Safety, warmth and academic strength
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-0 border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-slate-200">
            {FEATURES.map((f, i) => {
              const a = ACCENT[f.accent];
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full border-b border-slate-200 bg-transparent py-6 transition-colors hover:bg-white sm:px-6 lg:border-b-0">
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
      <section className="school-shell school-section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Life at Kottage</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
            A peek into our days
          </h2>
        </Reveal>
        <div className="mt-10 columns-2 gap-4 [column-fill:_balance] sm:columns-3 lg:columns-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.id} delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-2xl"
                aria-label={`View photo: ${g.caption}`}
              >
                <img
                  src={g.src}
                  srcSet={g.srcSet}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  alt={g.caption}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                  width={g.width}
                  height={g.height}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-kknavy/85 to-transparent p-3 text-left text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-kkslate">
        <div className="school-shell school-section">
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
      <section className="school-shell school-section">
        <Reveal>
                     <div className="relative overflow-hidden rounded-3xl bg-kknavy px-8 py-12 text-center shadow-xl">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(50% 80% at 100% 0%, #0090c0 0%, transparent 60%), radial-gradient(50% 80% at 0% 100%, #00759c 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-white sm:text-4xl">
                Ready to give your child a joyful start?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Admissions are open for 2027. Visit our campus on
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

      <GalleryLightbox
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
        items={GALLERY}
      />
    </div>
  );
}