import type { PageId } from "@/data/schoolData";

/** Canonical production origin. Update this single constant if the domain changes. */
export const SITE_URL = "https://www.kiddieskottageschool.com";

/** Real URL path for every PageId so each page has a shareable, crawlable URL. */
export const PAGE_PATHS: Record<PageId, string> = {
  home: "/",
  about: "/about",
  academics: "/academics",
  cocurricular: "/co-curricular",
  studentlife: "/student-life",
  admissions: "/admissions",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms-and-conditions",
};

interface PageMeta {
  title: string;
  description: string;
}

const BASE_TITLE = "Kiddies Kottage School";

const PAGE_SEO: Record<PageId, PageMeta> = {
  home: {
    title: `${BASE_TITLE} | CBC School in Utawala, Nairobi`,
    description:
      "Kiddies Kottage School in Utawala, Nairobi offers warm, high-quality CBC education from Playgroup to Grade 6. Explore our learning community and enquire about admissions.",
  },
  about: {
    title: `About Us | ${BASE_TITLE}`,
    description:
      "Founded in 2009, Kiddies Kottage School blends CBC learning with Christian values to nurture confident, kind and curious learners in Utawala, Nairobi.",
  },
  academics: {
    title: `Academics - CBC from Playgroup to Grade 6 | ${BASE_TITLE}`,
    description:
      "CBC-aligned academics from Playgroup to Grade 6: literacy, numeracy, languages, STEM and exam readiness in small, caring classes.",
  },
  cocurricular: {
    title: `Co-Curricular Activities | ${BASE_TITLE}`,
    description:
      "Swimming, football, ballet, music, chess, coding and more - rich co-curricular clubs that help every child find a passion at Kiddies Kottage School.",
  },
  studentlife: {
    title: `Student Life | ${BASE_TITLE}`,
    description:
      "A day at Kiddies Kottage School: safe campus, nutritious meals, daily routines, clubs and a warm community in Utawala, Nairobi.",
  },
  admissions: {
    title: `Admissions & Fees | ${BASE_TITLE}`,
    description:
      "Joining Kiddies Kottage School is simple: enquire, book a visit, apply and enrol. See age criteria, documents and transparent termly fees.",
  },
  contact: {
    title: `Contact Us | ${BASE_TITLE}`,
    description:
      "Visit us on Utawala-Githunguri Road, Nairobi, call, WhatsApp or send an enquiry. We reply within one working day.",
  },
  privacy: {
    title: `Privacy Policy | ${BASE_TITLE}`,
    description:
      "How Kiddies Kottage School collects, uses and protects personal information on this website.",
  },
  terms: {
    title: `Terms & Conditions | ${BASE_TITLE}`,
    description:
      "Terms and conditions for using the Kiddies Kottage School website and submitting enquiries.",
  },
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Syncs title, meta description and canonical/OG/Twitter tags for the active page. */
export function setPageSeo(page: PageId) {
  const meta = PAGE_SEO[page];
  const url = `${SITE_URL}${PAGE_PATHS[page]}`;
  document.title = meta.title;
  upsertMeta("name", "description", meta.description);
  upsertMeta("property", "og:title", meta.title);
  upsertMeta("property", "og:description", meta.description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "twitter:title", meta.title);
  upsertMeta("property", "twitter:description", meta.description);
  upsertMeta("property", "twitter:url", url);
  upsertCanonical(url);
}

/** Maps the current history path to a PageId (falls back to home). */
export function resolvePageFromLocation(): PageId {
  let path = window.location.pathname.replace(/\/+$/, "") || "/";

  // GitHub Pages SPA fallback (public/404.html) hands us the original path here.
  const stored = sessionStorage.getItem("kk_redirect_path");
  if (stored) {
    sessionStorage.removeItem("kk_redirect_path");
    path = stored.split("?")[0].replace(/\/+$/, "") || "/";
    window.history.replaceState({}, "", stored);
  }

  const match = (Object.entries(PAGE_PATHS) as [PageId, string][]).find(
    ([, p]) => p !== "/" && p === path,
  );
  return match?.[0] ?? "home";
}
