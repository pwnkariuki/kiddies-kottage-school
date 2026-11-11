import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Calendar,
  Clock,
  EnvelopeSimple,
  House,
  List,
  MapPin,
  Phone,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
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
        className="h-12 w-12 rounded-xl object-contain"
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
    <header className="sticky top-0 z-50">
      {/* Top alert bar */}
      <div className="hidden bg-kknavy text-white/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-[13px] font-semibold">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-kkyellow" weight="bold" />
              {CONTACT.hours}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-kkyellow" weight="bold" />
              {CONTACT.address}, {CONTACT.city}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${CONTACT.tel[0]}`}
              className="inline-flex items-center gap-1.5 text-kkyellow transition hover:text-white"
            >
              <Phone className="h-4 w-4" weight="fill" />
              {CONTACT.phones[0]}
            </a>
            <a
              href={`tel:${CONTACT.tel[1]}`}
              className="inline-flex items-center gap-1.5 text-kkyellow transition hover:text-white"
            >
              <Phone className="h-4 w-4" weight="fill" />
              {CONTACT.phones[1]}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-1.5 text-kkyellow transition hover:text-white"
            >
              <EnvelopeSimple className="h-4 w-4" weight="fill" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          solid
            ? "border-blue-100/70 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white/80 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <button onClick={() => go("home")} aria-label="Home">
            <Logo />
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`relative rounded-lg px-3 py-2 text-sm font-bold transition ${
                  page === item.id
                    ? "text-kkblue"
                    : "text-slate-600 hover:text-kknavy"
                }`}
              >
                {item.label}
                {page === item.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute inset-x-3 -bottom-0.5 h-1 rounded-full bg-kkyellow"
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
              className="hidden items-center gap-1.5 rounded-xl bg-kkyellow px-4 py-2.5 text-sm font-extrabold text-kknavy shadow-sm shadow-kkyellow/40 transition hover:bg-kkyellow-dark hover:text-white active:scale-95 sm:inline-flex"
            >
              <Calendar className="h-4 w-4" weight="fill" />
              Admissions
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-kknavy lg:hidden"
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
              className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm font-bold transition ${
                      page === item.id
                        ? "bg-kkblue/10 text-kkblue"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <House className="h-4 w-4" weight="fill" />
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    onOpenAdmissions();
                    setOpen(false);
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-kkyellow px-4 py-3 text-sm font-extrabold text-kknavy shadow-sm shadow-kkyellow/40 active:scale-95"
                >
                  <Calendar className="h-4 w-4" weight="fill" />
                  Apply for Admission
                </button>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <a
                    href={`tel:${CONTACT.tel[0]}`}
                    className="inline-flex flex-col items-center gap-1 rounded-xl border border-slate-200 px-2 py-2.5 text-[11px] font-bold text-kknavy"
                  >
                    <Phone className="h-4 w-4 text-kkblue" weight="fill" />
                    Call
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex flex-col items-center gap-1 rounded-xl border border-slate-200 px-2 py-2.5 text-[11px] font-bold text-kknavy"
                  >
                    <EnvelopeSimple className="h-4 w-4 text-kkblue" weight="fill" />
                    Email
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center gap-1 rounded-xl border border-slate-200 px-2 py-2.5 text-[11px] font-bold text-kknavy"
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