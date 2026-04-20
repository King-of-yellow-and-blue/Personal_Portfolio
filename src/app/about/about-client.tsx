"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Brain,
  Database,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills, experiences, education } from "@/lib/constants";

const skillCategories = [
  { key: "language", label: "Languages", icon: Code2 },
  { key: "frontend", label: "Frontend", icon: Code2 },
  { key: "backend", label: "Backend", icon: Database },
  { key: "ai-ml", label: "AI / ML", icon: Brain },
  { key: "tools", label: "Tools", icon: Wrench },
];

export function AboutPageClient() {
  return (
    <>
      {/* ===== INTRO ===== */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[120px]" />
        </div>

        <div className="container">
          <SectionHeader
            label="About Me"
            title="Passionate About Building the Future"
            description="A developer who merges AI intelligence with full-stack craftsmanship."
          />

          <div className="mx-auto mt-16 max-w-3xl">
            <AnimatedSection>
              <div className="space-y-5 text-lg leading-relaxed text-surface-200/80">
                <p>
                  I&apos;m <strong className="text-white">Swastik Joshi</strong>, a curious
                  builder who thrives at the intersection of{" "}
                  <span className="text-brand-400">Artificial Intelligence</span> and{" "}
                  <span className="text-brand-400">Web Development</span>. Currently
                  a 2nd semester B.Tech student at{" "}
                  <strong className="text-white">
                    Shree Swaminarayan Institute of Technology (SSIT)
                  </strong>, I&apos;m constantly exploring how technology can solve
                  real-world problems.
                </p>
                <p>
                  My journey has taken me from writing content at Edugreed to
                  building machine learning models and crafting full-stack web
                  applications. I believe in learning by doing, and every project
                  is an opportunity to push boundaries.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new AI research
                  papers, contributing to open-source, or brainstorming the next
                  big idea.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="border-t border-surface-800 py-24">
        <div className="container">
          <SectionHeader label="Education" title="Academic Background" />

          <div className="mx-auto mt-12 max-w-2xl">
            {education.map((edu, i) => (
              <AnimatedSection key={i}>
                <Card glow className="relative overflow-hidden">
                  <div className="absolute right-4 top-4">
                    <GraduationCap className="h-12 w-12 text-brand-500/10" />
                  </div>
                  <Badge variant="brand" className="mb-3">
                    {edu.status}
                  </Badge>
                  <h3 className="font-heading text-xl font-bold">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-brand-400">{edu.institution}</p>
                  <p className="mt-1 text-sm text-muted">{edu.period}</p>
                  <p className="mt-4 text-surface-200/70">{edu.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="py-24">
        <div className="container">
          <SectionHeader
            label="Experience"
            title="Work History"
            description="Professional experience that shaped my skills."
          />

          <div className="mx-auto mt-12 max-w-2xl">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i}>
                <div className="group flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-surface-700 bg-surface-900 transition-colors group-hover:border-brand-500 group-hover:bg-brand-500/10">
                    <Briefcase className="h-5 w-5 text-brand-400" />
                  </div>

                  {/* Content */}
                  <Card glow className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-xl font-bold">
                          {exp.title}
                        </h3>
                        <p className="text-brand-400">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{exp.period}</Badge>
                        <p className="mt-1 text-xs text-muted">{exp.type}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-surface-200/70">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="border-t border-surface-800 py-24">
        <div className="container">
          <SectionHeader
            label="Skills"
            title="Technologies I Work With"
            description="Tools and technologies I use to bring ideas to life."
          />

          <div className="mx-auto mt-12 max-w-4xl space-y-8">
            {skillCategories.map((cat, ci) => {
              const catSkills = skills.filter((s) => s.category === cat.key);
              if (catSkills.length === 0) return null;
              return (
                <AnimatedSection key={cat.key} delay={ci * 0.05}>
                  <div className="flex items-center gap-3 mb-4">
                    <cat.icon className="h-5 w-5 text-brand-400" />
                    <h3 className="font-heading text-lg font-semibold">
                      {cat.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {catSkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="brand"
                          className="cursor-default px-4 py-2 text-sm"
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
