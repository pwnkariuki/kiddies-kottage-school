import type { InquiryPayload } from "@/data/schoolData";

const STORE_KEY = "kk_inquiries";

export function readInquiries(): InquiryPayload[] {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveInquiry(payload: InquiryPayload) {
  const all = readInquiries();
  all.push(payload);
  localStorage.setItem(STORE_KEY, JSON.stringify(all));
}
