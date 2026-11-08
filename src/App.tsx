import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import {
  ArrowUp,
  CaretDown,
  Calendar,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import {
  AboutView,
  AcademicsView,
  CoCurricularView,
  StudentLifeView,
} from "@/components/InnerPages";
import {
  AdmissionsModal,
  InquiryForm,
  VisitModal,
} from "@/components/Modals";
import { Eyebrow, PageHead, Reveal } from "@/components/BrandIcon";
import {
  ADMISSION_STEPS,
  AGE_CRITERIA,
  CONTACT,
  FAQS,
  FEE_BANDS,
} from "@/data/schoolData";
import type { PageId } from "@/data/schoolData";

function AdmissionsView({
  onOpenAdmissions,
}: {
  onOpenAdmissions: () => void;
}) {
  const [level, setLevel] = useState(FEE_BANDS[0].level);
  const band = FEE_BANDS.find((b) => b.level === level) ?? FEE_BANDS[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <PageHead
        eyebrow="Admissions"
        title="Joining our family is simple"
        intro="Five friendly steps from your first call to your child's welcome day. Admissions run all year, subject to class space."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How to apply</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
            Five easy steps
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ADMISSION_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-kkblue font-display text-sm font-extrabold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-3 font-display font-extrabold text-kknavy">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-kkcream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Age criteria &amp; documents</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
              Which class fits your child?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AGE_CRITERIA.map((c, i) => (
              <Reveal key={c.level} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <h3 className="font-display text-lg font-extrabold text-kkblue">
                    {c.level}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {c.minAge}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {c.docs.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <CheckCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-kkgreen"
                          weight="fill"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Fees</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-kknavy sm:text-4xl">
            Transparent termly fees
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              {FEE_BANDS.map((b) => (
                <button
                  key={b.level}
                  onClick={() => setLevel(b.level)}
                  className={`flex w-full items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 text-left transition last:border-0 ${
                    level === b.level ? "bg-kkblue/5" : "hover:bg-slate-50"
                  }`}
                >
                  <div>
                    <p className="font-display font-extrabold text-kknavy">
                      {b.level}
                    </p>
                    <p className="text-xs text-slate-500">
                      {b.ages} &bull; {b.note}
                    </p>
                  </div>
                  <p className="whitespace-nowrap font-display font-extrabold text-kkblue">
                    KSh {b.termly.toLocaleString()}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-kknavy p-7 text-white">
              <h3 className="font-display text-xl font-extrabold">
                Fee estimate
              </h3>
              <p className="mt-1 text-sm text-slate-300">{band.level}</p>
              <div className="mt-5 space-y-2 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Termly fee</span>
                  <span className="font-bold text-white">
                    KSh {band.termly.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>3 terms per year</span>
                  <span className="font-bold text-white">
                    KSh {(band.termly * 3).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                <span className="font-bold">Yearly total</span>
                <span className="font-display text-2xl font-extrabold text-kkyellow">
                  KSh {(band.termly * 3).toLocaleString()}
                </span>
              </div>
              <button
                onClick={onOpenAdmissions}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-kkyellow px-5 py-3 text-sm font-extrabold text-kknavy shadow-sm shadow-kkyellow/30 transition hover:bg-kkyellow-dark hover:text-white active:scale-95"
              >
                <Calendar className="h-4 w-4" weight="fill" /> Apply for Admission
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-kkslate py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-kknavy">
                Questions, answered
              </h2>
              <div className="mt-6 space-y-3">
                {FAQS.map((f, i) => (
                  <div
                    key={f.q}
                    className="overflow-hidden rounded-xl border border-slate-100 bg-white"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-bold text-kknavy"
                    >
                      {f.q}
                      <CaretDown
                        className={`h-4 w-4 shrink-0 text-kkblue transition ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                        weight="bold"
                      />
                    </button>
                    {openFaq === i && (
                      <p className="px-4 pb-4 text-sm text-slate-600">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-blue-100/70 bg-white p-7 shadow-sm">
              <h3 className="font-display text-xl font-extrabold text-kknavy">
                Send an enquiry
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Tell us about your child and we will guide you through admission.
              </p>
              <div className="mt-5">
                <InquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ContactView() {
  const cards = [
    {
      Icon: MapPin,
      label: "Visit us",
      lines: [CONTACT.address, CONTACT.landmarks, CONTACT.city],
      hrefs: undefined as string[] | undefined,
    },
    {
      Icon: Phone,
      label: "Call us",
      lines: CONTACT.phones,
      hrefs: CONTACT.tel.map((t) => `tel:${t}`),
    },
    {
      Icon: EnvelopeSimple,
      label: "Email us",
      lines: [CONTACT.email],
      hrefs: [`mailto:${CONTACT.email}`],
    },
    {
      Icon: Clock,
      label: "Opening hours",
      lines: [CONTACT.hours],
      hrefs: undefined as string[] | undefined,
    },
  ];

  return (
    <div>
      <PageHead
        eyebrow="Contact"
        title="Come and see us"
        intro="We would love to show you around Kiddies Kottage. Call, message on WhatsApp, or send an enquiry and our team will respond."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              {cards.map(({ Icon, label, lines, hrefs }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-kkblue">
                    <Icon className="h-5 w-5" weight="fill" />
                    <h3 className="font-display font-extrabold text-kknavy">
                      {label}
                    </h3>
                  </div>
                  <div className="mt-2 space-y-0.5 text-sm text-slate-600">
                    {lines.map((l, i) =>
                      hrefs ? (
                        <a key={l} href={hrefs[i]} className="block hover:text-kkblue">
                          {l}
                        </a>
                      ) : (
                        <p key={l}>{l}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-kkgreen px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-emerald-600 active:scale-95"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-blue-100/70 bg-white p-7 shadow-sm">
              <h3 className="font-display text-xl font-extrabold text-kknavy">
                Send a message
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                We reply within one working day.
              </p>
              <div className="mt-5">
                <InquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
            <iframe
              title="School location map"
              src={`https://www.google.com/maps?q=${CONTACT.mapsQuery}&output=embed`}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PageId>("home");
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [visitOpen, setVisitOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openAdmissions = () => setAdmissionsOpen(true);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      <Navigation
        page={page}
        onNavigate={navigate}
        onOpenAdmissions={openAdmissions}
      />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {page === "home" && (
              <HomePage
                onNavigate={navigate}
                onOpenAdmissions={openAdmissions}
                onOpenVisit={() => setVisitOpen(true)}
              />
            )}
            {page === "about" && <AboutView onOpenAdmissions={openAdmissions} />}
            {page === "academics" && (
              <AcademicsView onOpenAdmissions={openAdmissions} />
            )}
            {page === "cocurricular" && (
              <CoCurricularView onOpenAdmissions={openAdmissions} />
            )}
            {page === "studentlife" && (
              <StudentLifeView onOpenAdmissions={openAdmissions} />
            )}
            {page === "admissions" && (
              <AdmissionsView onOpenAdmissions={openAdmissions} />
            )}
            {page === "contact" && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigate} />

      <AdmissionsModal
        open={admissionsOpen}
        onClose={() => setAdmissionsOpen(false)}
      />
      <VisitModal open={visitOpen} onClose={() => setVisitOpen(false)} />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-kkblue text-white shadow-lg transition hover:bg-kkblue-dark active:scale-90"
          >
            <ArrowUp className="h-5 w-5" weight="bold" />
          </motion.button>
        )}
      </AnimatePresence>

      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}