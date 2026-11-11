import { PageHead } from "@/components/BrandIcon";
import { BRAND, CONTACT } from "@/data/schoolData";
import type { PageId } from "@/data/schoolData";

const privacySections = [
  {
    title: "Information you provide",
    paragraphs: [
      "The enquiry form can collect a parent or guardian's name, a child's name if provided, age group or level, phone number, email address if provided, and your message.",
      "The form currently saves enquiries in local storage in the browser on the device where it is submitted. This website does not send those form entries to a school server. Other people with access to that browser profile or device may be able to view them.",
    ],
  },
  {
    title: "Contact links and embedded services",
    paragraphs: [
      `If you contact us by phone, email, or WhatsApp (${CONTACT.phones[0]}), the details you share are handled by the relevant service and its provider. Their own privacy terms apply.`,
      "The contact page embeds Google Maps. Loading that map may share technical information with Google; Google's privacy terms apply to that service.",
    ],
  },
  {
    title: "Your choices",
    paragraphs: [
      "You can clear the saved enquiries by clearing this site's local browser storage. Doing so removes all enquiry records stored by this site in that browser.",
      `For questions about an enquiry or to ask us to update information you shared with the school, contact ${CONTACT.emails[0]} or call ${CONTACT.phones[0]}. Please avoid sending sensitive personal information through the website.`,
    ],
  },
  {
    title: "Changes to this notice",
    paragraphs: [
      "We may update this notice when the website or the way it handles enquiries changes. The date at the top indicates the latest revision.",
    ],
  },
];

const termsSections = [
  {
    title: "Website information",
    paragraphs: [
      `This website provides general information about ${BRAND.name}, its learning programmes, admissions, and contact details. We aim to keep it accurate and current, but details may change; please confirm important information directly with the school.`,
      "Fee information is indicative and is not a final offer. The school will confirm applicable fees, availability, and admission requirements with each family.",
    ],
  },
  {
    title: "Enquiries and admissions",
    paragraphs: [
      "Submitting an enquiry does not create an enrolment, reserve a place, or establish a contract with the school. Admission is subject to the school's confirmation and completion of its admission process.",
      "Please provide accurate contact information and only information you are comfortable sharing through this website.",
    ],
  },
  {
    title: "External services and links",
    paragraphs: [
      "Maps, social networks, WhatsApp, and other external links are provided for convenience. They are operated by third parties and are subject to those providers' own terms and privacy practices.",
    ],
  },
  {
    title: "Use of website content",
    paragraphs: [
      "Unless otherwise noted, the school's website text, branding, and photographs are provided for personal, non-commercial information. Please do not copy, republish, or use them commercially without the school's permission.",
    ],
  },
  {
    title: "Updates",
    paragraphs: [
      "We may update these terms as the website or school information changes. Continued use of the website after an update means you are using the current version.",
    ],
  },
];

export function LegalPage({ page }: { page: Extract<PageId, "privacy" | "terms"> }) {
  const isPrivacy = page === "privacy";
  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <div>
      <PageHead
        eyebrow={isPrivacy ? "Privacy" : "Terms"}
        title={isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
        intro={`Information for visitors to the ${BRAND.name} website.`}
      />
      <section className="school-shell max-w-4xl py-12 sm:py-16">
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="border-b border-slate-200 pb-7 last:border-0">
              <h2 className="font-display text-xl font-bold text-kknavy">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
