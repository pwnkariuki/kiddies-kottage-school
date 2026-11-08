import {
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { BRAND, CONTACT, NAV_ITEMS } from "@/data/schoolData";
import type { PageId } from "@/data/schoolData";

export default function Footer({
  onNavigate,
}: {
  onNavigate: (p: PageId) => void;
}) {
  return (
    <footer className="bg-kknavy text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-kkblue text-kkyellow">
              <span className="font-display text-xl font-extrabold">KK</span>
            </div>
            <p className="font-display text-lg font-extrabold text-white">
              {BRAND.name}
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {BRAND.tagline}. A Christ-centred Montessori and CBC school raising
            confident, kind and curious learners since {BRAND.established}.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: FacebookLogo, href: "#" },
              { Icon: InstagramLogo, href: "#" },
              { Icon: YoutubeLogo, href: "#" },
              { Icon: WhatsappLogo, href: `https://wa.me/${CONTACT.whatsapp.replace("+", "")}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-slate-300 transition hover:bg-kkblue hover:text-white"
              >
                <Icon className="h-4 w-4" weight="fill" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-kkyellow">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_ITEMS.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => onNavigate(n.id)}
                  className="text-slate-400 transition hover:text-white"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-kkyellow">
            Visit &amp; Contact
          </h4>
          <ul className="mt-4 space-y-3.5 text-sm text-slate-400">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-kkblue" weight="fill" />
              <span>
                {CONTACT.address},<br />
                {CONTACT.landmarks},<br />
                {CONTACT.city}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-kkblue" weight="fill" />
              <span>
                {CONTACT.phones.map((p, i) => (
                  <a key={p} href={`tel:${CONTACT.tel[i]}`} className="block hover:text-white">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-2.5">
              <EnvelopeSimple className="mt-0.5 h-4 w-4 shrink-0 text-kkblue" weight="fill" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-kkyellow">
            Opening Hours
          </h4>
          <div className="mt-4 flex items-start gap-2.5 text-sm text-slate-400">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-kkblue" weight="fill" />
            <span>{CONTACT.hours}</span>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${CONTACT.mapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-kkblue px-4 py-2.5 text-sm font-bold text-white transition hover:bg-kkblue-dark"
          >
            <MapPin className="h-4 w-4" weight="fill" />
            Get Directions
          </a>
          <p className="mt-4 text-xs text-slate-500">
            Near SDA Church, opposite Ottomart Supermarket on Utawala-Githunguri
            Road.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>Utawala-Githunguri Road &bull; Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}