import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
  ShieldCheck,
  WhatsappLogo,
} from "@phosphor-icons/react";
import {
  ACADEMIC_LEVELS,
  ACTIVITY_CATEGORIES,
  ACTIVITIES,
  ADMISSION_STEPS,
  AGE_CRITERIA,
  BRAND,
  CONTACT,
  CORE_VALUES,
  FAQS,
  FEE_BANDS,
  GALLERY,
  LANGUAGES,
  NUTRITION_POINTS,
  ROUTINE,
  SAFETY_POINTS,
  STATS,
  TESTIMONIALS,
} from "@/data/schoolData";
import {
  ACCENT,
  BrandIcon,
  Cta,
  Eyebrow,
  PageHead,
  Reveal,
} from "@/components/BrandIcon";
import { InquiryForm } from "@/components/Modals";
import type { PageId } from "@/data/schoolData";

export function AboutView({
  onOpenAdmissions,
}: {
  onOpenAdmissions: () => void;
}) {
  return (
    <div>
      <PageHead
        eyebrow="About Us"
        title="A second home where children flourish"
        intro={`Founded in ${BRAND.established}, ${BRAND.name} blends the Montessori method, Kenya's CBC and Christian values on a safe campus along Utawala-Githunguri Road.`}
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-blue-100/70">
            <img src={GALLERY[2].src} alt="Outdoor playground" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy">
            Small enough to know every child, strong enough to grow them
          </h2>
          <p className="mt-4 text-slate-600">
            We started as a tiny kottage with a big dream: a warm, Christ-centred
            place where little ones learn through play, wonder and real materials.
            Today we teach from Playgroup to Grade 6, still keeping our family
            feel and a close 1:12 teacher ratio.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-4 ring-1 ring-blue-100/70">
                <p className="font-display text-2xl font-extrabold text-kkblue">
                  {s.value}
                </p>
                <p className="text-sm font-semibold text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-kkcream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Mission &amp; Vision</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-kkblue-soft text-kkblue">
                  <BrandIcon name="grad" className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-kknavy">
                  Our Mission
                </h3>
                <p className="mt-2 text-slate-600">
                  To nurture confident, curious and compassionate learners through
                  hands-on Montessori and CBC education, grounded in Christian
                  values and a deep care for every child.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-kkpurple/10 text-kkpurple">
                  <BrandIcon name="sparkle" className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-kknavy">
                  Our Vision
                </h3>
                <p className="mt-2 text-slate-600">
                  To be the school of choice in Utawala and beyond, raising joyful,
                  disciplined and capable children who lead with kindness and
                  achieve with excellence.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Core Values</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy">
            The character we build every day
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((v, i) => {
            const a = ACCENT[v.accent];
            return (
              <Reveal key={v.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${a.soft} ${a.text}`}>
                    <BrandIcon name="heart" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-kknavy">{v.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{v.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <Cta onOpenAdmissions={onOpenAdmissions} />
    </div>
  );
}

export function AcademicsView({
  onOpenAdmissions,
}: {
  onOpenAdmissions: () => void;
}) {
  const [active, setActive] = useState(ACADEMIC_LEVELS[0].id);
  const level = ACADEMIC_LEVELS.find((l) => l.id === active)!;
  const a = ACCENT[level.accent];
  return (
    <div>
      <PageHead
        eyebrow="Academics"
        title="A clear path from Playgroup to Grade 6"
        intro="Competency-Based Curriculum enriched with the Montessori method, taught by warm, qualified teachers."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap justify-center gap-2">
          {ACADEMIC_LEVELS.map((l) => (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className={`rounded-xl px-4 py-2.5 text-sm font-extrabold transition ${
                active === l.id
                  ? "bg-kkblue text-white shadow"
                  : "bg-white text-slate-600 shadow-sm ring-1 ring-blue-100/70 hover:text-kkblue"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>
        <motion.div
          key={level.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 overflow-hidden rounded-3xl border border-blue-100/70 bg-white shadow-sm"
        >
          <div className={`bg-gradient-to-br ${a.grad} px-8 py-7 text-white`}>
            <p className="text-sm font-bold uppercase tracking-wide opacity-90">
              {level.ages} &bull; {level.grades}
            </p>
            <h2 className="mt-1 font-display text-3xl font-extrabold">{level.name}</h2>
            <p className="mt-2 max-w-2xl text-white/90">{level.summary}</p>
          </div>
          <div className="grid gap-4 p-8 sm:grid-cols-2">
            {level.highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 rounded-xl bg-kkslate p-4 ring-1 ring-blue-100/60">
                <CheckCircle className={`h-5 w-5 shrink-0 ${a.text}`} weight="fill" />
                <span className="font-semibold text-slate-700">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-kkcream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Languages</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy">
              Five languages, one confident voice
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {LANGUAGES.map((lang, i) => {
              const la = ACCENT[lang.accent];
              return (
                <Reveal key={lang.name} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm">
                    <div className={`mx-auto grid h-12 w-12 place-items-center rounded-xl ${la.soft} ${la.text}`}>
                      <BrandIcon name="chat" className="h-6 w-6" />
                    </div>
                    <h3 className="mt-3 font-display font-extrabold text-kknavy">{lang.name}</h3>
                    <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-kkblue">
                      From {lang.from}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{lang.note}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <Cta onOpenAdmissions={onOpenAdmissions} label="Enquire About a Level" />
    </div>
  );
}

export function CoCurricularView({
  onOpenAdmissions,
}: {
  onOpenAdmissions: () => void;
}) {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? ACTIVITIES : ACTIVITIES.filter((x) => x.category === cat);
  return (
    <div>
      <PageHead
        eyebrow="Co-Curricular"
        title="Where passions come alive"
        intro="Sport, arts, martial arts, STEM and leadership clubs help every learner shine beyond the classroom."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap justify-center gap-2">
          {ACTIVITY_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-xl px-4 py-2 text-sm font-extrabold transition ${
                cat === c ? "bg-kknavy text-white shadow" : "bg-white text-slate-600 shadow-sm ring-1 ring-blue-100/70 hover:text-kknavy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((act, i) => {
            const a = ACCENT[act.accent];
            return (
              <Reveal key={act.id} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl ${a.soft} ${a.text}`}>
                    <BrandIcon name={act.icon} className="h-6 w-6" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-display text-lg font-extrabold text-kknavy">{act.name}</h3>
                    <span className={`rounded-full ${a.soft} px-2.5 py-1 text-xs font-bold ${a.text}`}>
                      {act.category}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{act.blurb}</p>
                  <div className="mt-4 space-y-1 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500">
                    <p className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-kkblue" weight="fill" />
                      {act.schedule}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <BrandIcon name="users" className="h-3.5 w-3.5 text-kkblue" />
                      {act.coach}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </motion.div>
      </section>
      <Cta onOpenAdmissions={onOpenAdmissions} />
    </div>
  );
}

export function StudentLifeView({
  onOpenAdmissions,
}: {
  onOpenAdmissions: () => void;
}) {
  return (
    <div>
      <PageHead
        eyebrow="Student Life"
        title="A day full of joy, care and discovery"
        intro="From warm morning circle time to calm dismissal, every moment is designed to help children feel safe and grow."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Daily Routine</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy">
            How a Kottage day flows
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {ROUTINE.map((r, i) => {
            const a = ACCENT[r.accent];
            return (
              <Reveal key={r.time} delay={(i % 2) * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${a.soft} ${a.text} font-display text-xs font-extrabold`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className={`text-sm font-extrabold ${a.text}`}>{r.time}</p>
                    <h3 className="font-display font-extrabold text-kknavy">{r.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{r.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-kkslate py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-blue-100/70 bg-white p-8 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-kkblue-soft text-kkblue">
                <ShieldCheck className="h-6 w-6" weight="fill" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-kknavy">
                Safety first, always
              </h3>
              <ul className="mt-4 space-y-3">
                {SAFETY_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-kkgreen" weight="fill" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-blue-100/70 bg-white p-8 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-kkgreen/10 text-kkgreen">
                <BrandIcon name="leaf" className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-kknavy">
                Healthy meals &amp; wellbeing
              </h3>
              <ul className="mt-4 space-y-3">
                {NUTRITION_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-kkblue" weight="fill" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Parent Voices</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-kknavy">
            Families feel at home
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <blockquote className="text-[15px] leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-kkblue text-sm font-extrabold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-kknavy">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
      <Cta onOpenAdmissions={onOpenAdmissions} />
    </div>
  );
}