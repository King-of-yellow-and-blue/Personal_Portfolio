import type { Metadata } from "next";
import { ProjectsPageClient } from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Swastik Joshi's AI/ML and web development projects — from sentiment analysis to full-stack applications.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
