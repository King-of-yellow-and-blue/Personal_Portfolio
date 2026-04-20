"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/constants";

const filters = [
  { key: "all", label: "All" },
  { key: "ai-ml", label: "AI / ML" },
  { key: "web", label: "Web Dev" },
];

export function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
          <div className="bg-dot-grid absolute inset-0 opacity-30" />
        </div>

        <div className="container">
          <SectionHeader
            label="Portfolio"
            title="My Projects"
            description="Exploring the boundaries of AI/ML and web development through hands-on projects."
          />

          {/* Filter Tabs */}
          <div className="mt-10 flex justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className="relative rounded-xl px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer"
              >
                {activeFilter === filter.key && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-xl bg-brand-500"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeFilter === filter.key
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container">
          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  <Card glow className="group h-full flex flex-col">
                    {/* Visual Placeholder */}
                    <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-500/20 via-purple-500/10 to-pink-500/20 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl opacity-40">
                          {project.category === "ai-ml" ? "🤖" : "💻"}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <Badge variant="brand" className="text-xs">
                          {project.category === "ai-ml" ? "AI / ML" : "Web Dev"}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-lg font-bold group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex gap-3 border-t border-surface-800 pt-4">
                      <a
                        href={project.demoUrl}
                        className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand-400"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand-400"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        Source Code
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
