import type { Metadata } from "next";
import { AboutPageClient } from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Swastik Joshi — AI/ML enthusiast, Full Stack Developer, and B.Tech student at SSIT.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
