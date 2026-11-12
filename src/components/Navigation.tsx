import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  EnvelopeSimple,
  List,
  Phone,
  WhatsappLogo,
  X,
} from "@/lib/icons";
import { BRAND, CONTACT, NAV_ITEMS } from "@/data/schoolData";
import type { PageId } from "@/data/schoolData";

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/school/kiddies-kottage-logo-256.webp"
        srcSet="/images/school/kiddies-kottage-logo-256.webp 256w, /images/school/kiddies-kottage-logo-512.webp 512w"
        sizes="48px"
        alt="Kiddies Kottage School logo"
        width={48}
        height={46}
        className="h-12 w-12 object-contain"
      />
      <div className="leading-tight">
        <p className="font-display text-[15px] font-extrabold text-kknavy">
          {BRAND.name}
        </p>
        <p className="text-[11px] font-semibold text-kkblue">
          CBC &bull; Care &bull; Character
        </p>
      </div>
    </div>
  );
}

interface Props {
  page: PageId;
  onNavigate: (p: PageId) => void;
  onOpenAdmissions: () => void;
}

export default function Navigation({
  page,
  onNavigate,
  onOpenAdmissions,
}: Props) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (p: PageId) => {
    onNavigate(p);
    setOpen(false);
  };

  return (
    <header className="relative z-50">
      {/* Top alert bar */}
      <div className="bg-kkblue text-white">
        <div className="school-shell flex min-h-9 flex-wrap items-center justify-between gap-x-5 gap-y-1 py-1 text-xs">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-kkyellow" />
            Learning with purpose, growing with heart.
          </span>
          <a className="inline-flex items-center gap-2 font-semibold" href={`tel:${CONTACT.tel[0]}`}>
            <Phone className="h-3.5 w-3.5" weight="fill" />
            {CONTACT.phones[0]}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`sticky top-0 border-b transition-all duration-300 ${
          solid
            ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-slate-200/80 bg-white/95 backdrop-blur"
        }`}
      >
        <div className="school-shell flex h-[4.5rem] items-center justify-between gap-5">
          <button onClick={() => go("home")} aria-label="Home">
            <Logo />
          </button>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`micro-link relative px-1 py-2 text-[0.82rem] font-semibold transition-colors ${
                  page === item.id
                    ? "text-kkblue"
                    : "text-slate-600 hover:text-kkblue"
                }`}
              >
                {item.label}
                {page === item.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute inset-x-1 -bottom-1 h-0.5 bg-kkyellow"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 w-10 place-items-center rounded-xl bg-kkgreen/10 text-kkgreen transition hover:bg-kkgreen hover:text-white sm:grid"
              aria-label="WhatsApp"
            >
              <WhatsappLogo className="h-5 w-5" weight="fill" />
            </a>
            <button
              onClick={onOpenAdmissions}
              className="hidden items-center gap-1.5 rounded-sm bg-kkyellow px-4 py-2.5 text-sm font-bold text-kknavy transition hover:bg-kkyellow-dark hover:text-white active:scale-95 xl:inline-flex"
            >
              <Calendar className="h-4 w-4" weight="fill" />
              Admissions
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center border border-slate-200 text-kknavy xl:hidden"
              aria-label="Menu"
            >
              {open ? (
                <X className="h-5 w-5" weight="bold" />
              ) : (
                <List className="h-5 w-5" weight="bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-100 bg-white xl:hidden"
            >
              <div className="school-shell flex flex-col gap-1 py-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    className={`micro-link flex items-center gap-2 border-b border-slate-100 px-3 py-3 text-left text-sm font-semibold transition ${
                      page === item.id
                        ? "text-kkblue"
                        : "text-slate-700 hover:text-kkblue"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    onOpenAdmissions();
                    setOpen(false);
                  }}
                  className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-sm bg-kkyellow px-4 py-3 text-sm font-bold text-kknavy active:scale-95"
                >
                  <Calendar className="h-4 w-4" weight="fill" />
                  Apply for Admission
                </button>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <a
                    href={`tel:${CONTACT.tel[0]}`}
                    className="inline-flex flex-col items-center gap-1 border border-slate-200 px-2 py-2.5 text-[11px] font-bold text-kknavy"
                  >
                    <Phone className="h-4 w-4 text-kkblue" weight="fill" />
                    Call
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex flex-col items-center gap-1 border border-slate-200 px-2 py-2.5 text-[11px] font-bold text-kknavy"
                  >
                    <EnvelopeSimple className="h-4 w-4 text-kkblue" weight="fill" />
                    Email
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center gap-1 border border-slate-200 px-2 py-2.5 text-[11px] font-bold text-kknavy"
                  >
                    <WhatsappLogo className="h-4 w-4 text-kkgreen" weight="fill" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}