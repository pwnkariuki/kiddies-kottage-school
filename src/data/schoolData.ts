// Shared data models for Kiddies Kottage School web application.

export type PageId =
  | "home"
  | "about"
  | "academics"
  | "cocurricular"
  | "studentlife"
  | "admissions"
  | "contact";

export interface NavItem {
  id: PageId;
  label: string;
}

export type Accent = "blue" | "yellow" | "red" | "purple" | "green";

export interface AcademicLevel {
  id: string;
  name: string;
  ages: string;
  grades: string;
  accent: Accent;
  summary: string;
  highlights: string[];
}

export interface ApproachPillar {
  title: string;
  blurb: string;
  icon: string;
  accent: Accent;
}

export interface Activity {
  id: string;
  name: string;
  category: string;
  accent: Accent;
  icon: string;
  blurb: string;
  schedule: string;
  coach: string;
}

export interface FeatureCard {
  title: string;
  blurb: string;
  icon: string;
  accent: Accent;
}

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  category: string;
  tall?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export interface RoutineSlot {
  time: string;
  title: string;
  detail: string;
  accent: Accent;
}

export interface Faq {
  q: string;
  a: string;
}

export interface AdmissionStep {
  title: string;
  detail: string;
}

export interface FeeBand {
  level: string;
  ages: string;
  termly: number;
  note: string;
}

export interface AgeCriterion {
  level: string;
  minAge: string;
  docs: string[];
}

export interface LanguageProgram {
  name: string;
  from: string;
  accent: Accent;
  note: string;
}

export interface InquiryPayload {
  parentName: string;
  childName: string;
  ageGroup: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
}

const IMG =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/d8935a85-55c4-408d-bad5-e71b574034c0";

export const BRAND = {
  name: "Kiddies Kottage School",
  short: "Kiddies Kottage",
  tagline: "Nurturing curious hearts and bright minds",
  established: 2009,
};

export const CONTACT = {
  phones: ["0714 502 996", "0712 427 621"],
  tel: ["+254714502996", "+254712427621"],
  whatsapp: "+254714502996",
  email: "info@kiddieskottageschool.com",
  altEmail: "kiddieskottageschool@gmail.com",
  emails: ["info@kiddieskottageschool.com", "kiddieskottageschool@gmail.com"],
  address: "Utawala-Githunguri Road",
  landmarks: "Near SDA Church, opposite Ottomart Supermarket",
  city: "Nairobi, Kenya",
  hours: "Mon to Fri, 7:00 AM to 5:30 PM",
  mapsQuery: "Kiddies+Kottage+School+Utawala+Githunguri+Road+Nairobi",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "academics", label: "Academics" },
  { id: "cocurricular", label: "Co-Curricular" },
  { id: "studentlife", label: "Student Life" },
  { id: "admissions", label: "Admissions" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "15+", label: "Years of care" },
  { value: "450+", label: "Happy learners" },
  { value: "1:12", label: "Teacher ratio" },
  { value: "98%", label: "Parent satisfaction" },
];

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    title: "Montessori Method",
    blurb:
      "Hands-on, self-paced learning with real materials that build independence, focus and practical life skills.",
    icon: "blocks",
    accent: "blue",
  },
  {
    title: "CBC Aligned",
    blurb:
      "Kenya Competency-Based Curriculum from Playgroup to Grade 6, nurturing seven core competencies.",
    icon: "book",
    accent: "green",
  },
  {
    title: "Christian Values",
    blurb:
      "Faith, kindness, honesty and respect woven into daily circle time, chapel and classroom culture.",
    icon: "heart",
    accent: "purple",
  },
  {
    title: "Whole Child",
    blurb:
      "Academic, social, emotional, physical and creative growth supported by play, music and movement.",
    icon: "sparkle",
    accent: "yellow",
  },
];

export const ACADEMIC_LEVELS: AcademicLevel[] = [
  {
    id: "playgroup",
    name: "Playgroup & Nursery",
    ages: "2 to 5 years",
    grades: "Playgroup, Nursery 1 & 2",
    accent: "yellow",
    summary:
      "A gentle, joyful start where toddlers settle with warm carers and learn through play, song and sensory discovery.",
    highlights: [
      "Practical life and sensorial activities",
      "Phonics readiness and number sense",
      "Outdoor play and social routines",
      "Nap and snack support for little ones",
    ],
  },
  {
    id: "preprimary",
    name: "Pre-Primary",
    ages: "4 to 6 years",
    grades: "PP1 & PP2",
    accent: "blue",
    summary:
      "CBC pre-primary levels that grow confidence, early literacy and numeracy through Montessori materials and guided play.",
    highlights: [
      "Creative expressions and psychomotor skills",
      "Signs, sounds and early reading",
      "Number operations and problem solving",
      "Environmental awareness projects",
    ],
  },
  {
    id: "lowerprimary",
    name: "Lower Primary",
    ages: "6 to 9 years",
    grades: "Grade 1 to 3",
    accent: "green",
    summary:
      "Strong literacy and numeracy foundations with activity-based CBC learning, journals and parent communication diaries.",
    highlights: [
      "English, Kiswahili and French",
      "Mathematics and integrated science",
      "Handwriting and reading fluency",
      "Character and leadership building",
    ],
  },
  {
    id: "upperprimary",
    name: "Upper Primary",
    ages: "9 to 12 years",
    grades: "Grade 4 to 6",
    accent: "purple",
    summary:
      "Deeper subject mastery, research projects and exam readiness, preparing pupils for junior school with confidence.",
    highlights: [
      "Pre-technical and social studies",
      "Research and presentation skills",
      "Chess, coding and STEM clubs",
      "KNEC assessment preparation",
    ],
  },
];

export const FEATURES: FeatureCard[] = [
  {
    title: "Safe, Secure Campus",
    blurb:
      "Fenced grounds, gated access, visitor logbooks and trained staff ensure every child is watched and protected.",
    icon: "shield",
    accent: "blue",
  },
  {
    title: "Nutritious Meals",
    blurb:
      "Balanced hot lunches and fresh fruit snacks planned with a nutritionist to fuel growing bodies and minds.",
    icon: "leaf",
    accent: "green",
  },
  {
    title: "Faith & Character",
    blurb:
      "A Christ-centred environment that builds honesty, gratitude and service through daily values lessons.",
    icon: "heart",
    accent: "purple",
  },
  {
    title: "Active Communication",
    blurb:
      "Daily diaries, termly reviews and a parent portal keep families informed and involved every step of the way.",
    icon: "chat",
    accent: "yellow",
  },
  {
    title: "Qualified Teachers",
    blurb:
      "Warm, TSC-trained and Montessori-certified educators who know every child by name and by need.",
    icon: "users",
    accent: "red",
  },
  {
    title: "Rich Co-Curriculars",
    blurb:
      "From swimming to taekwondo, ballet to chess, every learner finds a passion beyond the classroom.",
    icon: "trophy",
    accent: "blue",
  },
];

export const ACTIVITY_CATEGORIES = [
  "All",
  "Sports",
  "Arts & Music",
  "Martial Arts",
  "Intellectual & STEM",
  "Leadership",
];

export const ACTIVITIES: Activity[] = [
  {
    id: "swimming",
    name: "Swimming",
    category: "Sports",
    accent: "blue",
    icon: "water",
    blurb: "Water confidence and stroke technique in a supervised pool.",
    schedule: "Wed & Fri, 3:00 PM",
    coach: "Coach Mwangi",
  },
  {
    id: "football",
    name: "Football & Games",
    category: "Sports",
    accent: "green",
    icon: "ball",
    blurb: "Team play, fitness and sportsmanship on the school field.",
    schedule: "Tue & Thu, 3:30 PM",
    coach: "Coach Otieno",
  },
  {
    id: "skating",
    name: "Roller Skating",
    category: "Sports",
    accent: "purple",
    icon: "sparkle",
    blurb: "Balance, coordination and pure fun in a safe skating zone.",
    schedule: "Sat, 10:00 AM",
    coach: "Ms. Achieng",
  },
  {
    id: "taekwondo",
    name: "Taekwondo",
    category: "Martial Arts",
    accent: "red",
    icon: "shield",
    blurb: "Discipline, self-defence and belt progression for all ages.",
    schedule: "Mon & Wed, 4:00 PM",
    coach: "Master Kimani",
  },
  {
    id: "ballet",
    name: "Ballet & Dance",
    category: "Arts & Music",
    accent: "purple",
    icon: "music",
    blurb: "Grace, rhythm and creative movement with live and recorded music.",
    schedule: "Thu, 3:00 PM",
    coach: "Ms. Wanjiru",
  },
  {
    id: "music",
    name: "Music & Choir",
    category: "Arts & Music",
    accent: "yellow",
    icon: "music",
    blurb: "Drums, xylophone, singing and worship for chapel and concerts.",
    schedule: "Fri, 2:30 PM",
    coach: "Mr. Njoroge",
  },
  {
    id: "art",
    name: "Arts & Crafts",
    category: "Arts & Music",
    accent: "green",
    icon: "palette",
    blurb: "Painting, modelling and seasonal craft exhibitions.",
    schedule: "Tue, 3:30 PM",
    coach: "Ms. Akinyi",
  },
  {
    id: "drama",
    name: "Drama & Speech",
    category: "Arts & Music",
    accent: "blue",
    icon: "chat",
    blurb: "Confidence on stage, storytelling and public speaking.",
    schedule: "Wed, 3:30 PM",
    coach: "Mr. Kariuki",
  },
  {
    id: "chess",
    name: "Chess Club",
    category: "Intellectual & STEM",
    accent: "purple",
    icon: "trophy",
    blurb: "Strategy, focus and friendly inter-house tournaments.",
    schedule: "Mon, 3:00 PM",
    coach: "Mr. Omondi",
  },
  {
    id: "coding",
    name: "Coding & Robotics",
    category: "Intellectual & STEM",
    accent: "blue",
    icon: "blocks",
    blurb: "Block coding, simple circuits and STEM show-and-tell projects.",
    schedule: "Thu, 3:30 PM",
    coach: "Ms. Chebet",
  },
  {
    id: "scouts",
    name: "Scouts & Guides",
    category: "Leadership",
    accent: "green",
    icon: "leaf",
    blurb: "Teamwork, first aid, camping and community service values.",
    schedule: "Fri, 3:00 PM",
    coach: "Ranger Wafula",
  },
  {
    id: "leadership",
    name: "Pupil Leadership",
    category: "Leadership",
    accent: "yellow",
    icon: "users",
    blurb: "Prefect teams and a junior parliament that voice pupil ideas.",
    schedule: "Ongoing",
    coach: "Madam Nduta",
  },
];

export const GALLERY: GalleryItem[] = [
  { id: "g1", src: `${IMG}/hero-classroom-77ae3828-1794180352213.webp`, caption: "Bright Montessori classrooms", category: "Classrooms", tall: true },
  { id: "g2", src: `${IMG}/library-reading-cf1c1167-1794180352682.webp`, caption: "Cosy reading corner", category: "Literacy" },
  { id: "g3", src: `${IMG}/playground-outdoor-3085eaa7-1794180353862.webp`, caption: "Safe outdoor playground", category: "Play", tall: true },
  { id: "g4", src: `${IMG}/art-crafts-72fc58d4-1794180352292.webp`, caption: "Creative arts and crafts", category: "Arts" },
  { id: "g5", src: `${IMG}/music-dance-39622291-1794180353259.webp`, caption: "Music and dance sessions", category: "Music" },
  { id: "g6", src: `${IMG}/science-hands-c6d56623-1794180357555.webp`, caption: "Hands-on CBC science", category: "Academics", tall: true },
  { id: "g7", src: `${IMG}/healthy-meal-e37fb0ee-1794180357849.webp`, caption: "Nutritious balanced meals", category: "Dining" },
  { id: "g8", src: `${IMG}/graduation-uniform-0038af43-1794180357312.webp`, caption: "Proud pupils in uniform", category: "Community" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Grace W.",
    role: "Parent, PP2",
    initials: "GW",
    quote:
      "My daughter runs to school every morning. The teachers truly know her and her reading has soared in one term.",
  },
  {
    name: "Daniel & Lucy K.",
    role: "Parents, Grade 3",
    initials: "DK",
    quote:
      "The daily diary keeps us close to our son's learning. We feel safe, informed and part of the community.",
  },
  {
    name: "Esther M.",
    role: "Parent, Grade 5",
    initials: "EM",
    quote:
      "Chess, swimming and taekwondo gave my confident but shy girl a passion. The values here are real.",
  },
];

export const ROUTINE: RoutineSlot[] = [
  { time: "7:30 AM", title: "Arrival & Circle Time", detail: "Warm welcome, prayer, calendar and news of the day.", accent: "yellow" },
  { time: "8:30 AM", title: "Literacy & Numeracy", detail: "Phonics, reading and hands-on mathematics.", accent: "blue" },
  { time: "10:30 AM", title: "Active Play", detail: "Outdoor games, movement and social play.", accent: "green" },
  { time: "12:30 PM", title: "Nutritious Lunch", detail: "Balanced hot meal with fresh fruit.", accent: "red" },
  { time: "2:00 PM", title: "Creative & Integrated", detail: "Arts, science, social studies and projects.", accent: "purple" },
  { time: "3:30 PM", title: "Clubs & Pick-up", detail: "Co-curricular clubs and calm dismissal.", accent: "blue" },
];

export const LANGUAGES: LanguageProgram[] = [
  { name: "English", from: "Playgroup", accent: "blue", note: "Primary language of instruction and literacy." },
  { name: "Kiswahili", from: "Playgroup", accent: "green", note: "Speaking, reading and national heritage." },
  { name: "French", from: "Grade 1", accent: "purple", note: "Fun conversational basics and songs." },
  { name: "German", from: "Grade 3", accent: "yellow", note: "Introductory vocabulary and culture." },
  { name: "Sign Language", from: "PP1", accent: "red", note: "Inclusive communication and empathy." },
];

export const SAFETY_POINTS = [
  "Fenced, gated campus with visitor logbook",
  "Trained, vetted and first-aid certified staff",
  "Clean water, handwashing and hygiene routine",
  "Daily health check and allergy awareness",
  "Secure, age-appropriate play equipment",
  "Fire drills and emergency evacuation plan",
];

export const NUTRITION_POINTS = [
  "Balanced hot lunch planned with a nutritionist",
  "Fresh fruit and vegetable snacks daily",
  "Clean drinking water stations across campus",
  "Allergy-safe meal accommodations",
  "Good-table-manners and hygiene education",
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  { title: "Enquire or Call", detail: "Reach us by phone, WhatsApp or the enquiry form to share your interest." },
  { title: "Book a Visit", detail: "Tour the campus, meet teachers and see classrooms in action." },
  { title: "Submit Application", detail: "Complete the admission form with your child's details and documents." },
  { title: "Assessment & Chat", detail: "A friendly placement talk to understand your child's needs." },
  { title: "Offer & Enrolment", detail: "Receive your offer, confirm fees and welcome your child to the family." },
];

export const FEE_BANDS: FeeBand[] = [
  { level: "Playgroup & Nursery", ages: "2 to 5 yrs", termly: 18000, note: "Includes meals and activities" },
  { level: "Pre-Primary (PP1-PP2)", ages: "4 to 6 yrs", termly: 22000, note: "CBC materials included" },
  { level: "Lower Primary (G1-3)", ages: "6 to 9 yrs", termly: 28000, note: "Books and uniform separate" },
  { level: "Upper Primary (G4-6)", ages: "9 to 12 yrs", termly: 34000, note: "Exam prep and clubs included" },
];

export const AGE_CRITERIA: AgeCriterion[] = [
  { level: "Playgroup", minAge: "2 years by 31 Dec", docs: ["Birth certificate", "Immunisation card", "Parent ID"] },
  { level: "Nursery", minAge: "3 years by 31 Dec", docs: ["Birth certificate", "Immunisation card", "Parent ID"] },
  { level: "PP1", minAge: "4 years by 31 Dec", docs: ["Birth certificate", "Previous report", "Parent ID"] },
  { level: "Grade 1", minAge: "6 years by 31 Dec", docs: ["Birth certificate", "PP2 report", "Parent ID"] },
];

export const FAQS: Faq[] = [
  { q: "What ages do you admit?", a: "We welcome learners from 2 years old in Playgroup through Grade 6, typically up to 12 years." },
  { q: "Do you follow the CBC curriculum?", a: "Yes. We are fully aligned with the Kenya Competency-Based Curriculum from pre-primary through upper primary, enriched with the Montessori method." },
  { q: "Is the school a Christian school?", a: "We are a Christ-centred school that nurtures faith, kindness and service while respecting every family." },
  { q: "What are the school hours?", a: "We operate Monday to Friday, 7:00 AM to 5:30 PM, with drop-off from 7:30 AM." },
  { q: "Do you provide meals?", a: "Yes, we serve a balanced hot lunch and fresh fruit snacks planned with a nutritionist." },
  { q: "How do you communicate with parents?", a: "Through daily home-school diaries, termly reviews, WhatsApp updates and our parent portal." },
];

export const CORE_VALUES = [
  { title: "Faith", detail: "Daily prayer, chapel and gratitude at the heart of our community.", accent: "purple" as const },
  { title: "Kindness", detail: "We treat every child, teacher and family with warmth and respect.", accent: "yellow" as const },
  { title: "Honesty", detail: "Doing the right thing, even when no one is watching.", accent: "blue" as const },
  { title: "Service", detail: "Learners give back through community projects and peer support.", accent: "green" as const },
  { title: "Courage", detail: "We encourage children to try, ask and grow without fear.", accent: "red" as const },
  { title: "Joy", detail: "Learning should feel wonderful, playful and full of discovery.", accent: "yellow" as const },
];