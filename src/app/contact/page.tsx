import type { Metadata } from "next";
import { ContactPageClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Swastik Joshi for AI/ML projects, web development, or collaboration opportunities.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
