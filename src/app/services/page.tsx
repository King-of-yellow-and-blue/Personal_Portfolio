import type { Metadata } from "next";
import { ServicesPageClient } from "./services-client";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI/ML development, Full Stack Web Development, and Content Writing services by Swastik Joshi.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
