import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { Calendar, CheckCircle, PaperPlaneTilt, Phone, X } from "@phosphor-icons/react";
import { ACADEMIC_LEVELS, CONTACT } from "@/data/schoolData";
import type { InquiryPayload } from "@/data/schoolData";

const STORE_KEY = "kk_inquiries";

function readStore(): InquiryPayload[] {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveInquiry(payload: InquiryPayload) {
  const all = readStore();
  all.push(payload);
  localStorage.setItem(STORE_KEY, JSON.stringify(all));
}

function ModalShell({
  open,
  onClose,
  title,
  subtitle,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-kknavy/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            initial={{ y: 40, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-blue-100/70 bg-white/95 px-6 py-5 backdrop-blur">
              <div>
                <h3 className="font-display text-xl font-extrabold text-kknavy">
                  {title}
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                aria-label="Close"
              >
                <X className="h-5 w-5" weight="bold" />
              </button>
            </div>
            <div className="px-6 py-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const field =
  "w-full rounded-xl border border-blue-100 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-kknavy outline-none transition focus:border-kkblue focus:bg-white focus:ring-4 focus:ring-kkblue/15";
const label = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500";

export function InquiryForm({ compact }: { compact?: boolean }) {
  const [form, setForm] = useState<InquiryPayload>({
    parentName: "",
    childName: "",
    ageGroup: "",
    phone: "",
    email: "",
    message: "",
    createdAt: "",
  });
  const [busy, setBusy] = useState(false);

  const set = (k: keyof InquiryPayload, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.parentName.trim() || !form.phone.trim() || !form.ageGroup) {
      toast.error("Please add your name, a phone number and the age group.");
      return;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("That email address does not look right.");
      return;
    }
    setBusy(true);
    const payload: InquiryPayload = {
      ...form,
      createdAt: new Date().toISOString(),
    };
    saveInquiry(payload);
    setTimeout(() => {
      setBusy(false);
      toast.success("Enquiry received! We will call you back shortly.", {
        description: `${payload.parentName} & ${payload.childName || "your child"}`,
      });
      setForm({
        parentName: "",
        childName: "",
        ageGroup: "",
        phone: "",
        email: "",
        message: "",
        createdAt: "",
      });
    }, 500);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "space-y-4"}>
        <div>
          <label className={label}>Parent / Guardian *</label>
          <input
            className={field}
            value={form.parentName}
            onChange={(e) => set("parentName", e.target.value)}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className={label}>Child Name</label>
          <input
            className={field}
            value={form.childName}
            onChange={(e) => set("childName", e.target.value)}
            placeholder="Child's name"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>Age Group / Level *</label>
          <select
            className={field}
            value={form.ageGroup}
            onChange={(e) => set("ageGroup", e.target.value)}
          >
            <option value="">Select a level</option>
            {ACADEMIC_LEVELS.map((l) => (
              <option key={l.id} value={l.name}>
                {l.name} ({l.ages})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Phone *</label>
          <input
            className={field}
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="07XX XXX XXX"
            inputMode="tel"
          />
        </div>
      </div>
      <div>
        <label className={label}>Email</label>
        <input
          className={field}
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label className={label}>Message</label>
        <textarea
          className={`${field} min-h-[90px] resize-none`}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about your child or any questions."
        />
      </div>
      <button
        type="submit"
        disabled={busy}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-kkyellow px-5 py-3 text-sm font-extrabold text-kknavy shadow-sm shadow-kkyellow/30 transition hover:bg-kkyellow-dark hover:text-white active:scale-[0.98] disabled:opacity-60"
      >
        {busy ? (
          "Sending..."
        ) : (
          <>
            <PaperPlaneTilt className="h-4 w-4" weight="fill" />
            Send Enquiry
          </>
        )}
      </button>
      <p className="text-center text-xs text-slate-400">
        Prefer to talk? Call{" "}
        <a href={`tel:${CONTACT.tel[0]}`} className="font-bold text-kkblue">
          {CONTACT.phones[0]}
        </a>
      </p>
    </form>
  );
}

export function AdmissionsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title="Admissions Enquiry"
      subtitle="Tell us about your child and we will guide you."
    >
      <InquiryForm compact />
    </ModalShell>
  );
}

export function VisitModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Please add your name and a phone number.");
      return;
    }
    saveInquiry({
      parentName: name,
      childName: "Campus visit",
      ageGroup: date || "Flexible",
      phone,
      email: "",
      message: "Requested a campus tour / schedule visit.",
      createdAt: new Date().toISOString(),
    });
    toast.success("Visit requested! We will confirm your tour slot.", {
      description: "Our admissions team will call you back.",
    });
    setName("");
    setPhone("");
    setDate("");
    onClose();
  };

  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title="Schedule a Campus Visit"
      subtitle="See our classrooms, playground and community in person."
    >
      <form onSubmit={submit} className="space-y-4">
        <div className="rounded-2xl bg-kkslate p-4 ring-1 ring-blue-100/70">
          <div className="flex items-center gap-2 text-sm font-bold text-kknavy">
            <CheckCircle className="h-5 w-5 text-kkgreen" weight="fill" />
            What to expect on a tour
          </div>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>Meet our Montessori-certified teachers</li>
            <li>Visit bright, safe classrooms &amp; playground</li>
            <li>Learn about CBC, meals and co-curricular clubs</li>
          </ul>
        </div>
        <div>
          <label className={label}>Your Name *</label>
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Parent / guardian name"
          />
        </div>
        <div>
          <label className={label}>Phone *</label>
          <input
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07XX XXX XXX"
            inputMode="tel"
          />
        </div>
        <div>
          <label className={label}>Preferred Date</label>
          <input
            type="date"
            className={field}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-kkyellow px-5 py-3 text-sm font-extrabold text-kknavy shadow-sm shadow-kkyellow/30 transition hover:bg-kkyellow-dark hover:text-white active:scale-[0.98]"
        >
          <Calendar className="h-4 w-4" weight="fill" />
          Request My Visit
        </button>
        <a
          href={`tel:${CONTACT.tel[0]}`}
          className="flex items-center justify-center gap-2 text-sm font-bold text-kkblue"
        >
          <Phone className="h-4 w-4" weight="fill" />
          Or call {CONTACT.phones[0]}
        </a>
      </form>
    </ModalShell>
  );
}