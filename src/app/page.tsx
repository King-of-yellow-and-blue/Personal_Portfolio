"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { services, projects } from "@/lib/constants";

const roles = ["I build websites & AI systems for businesses — from scratch."];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-500/8 via-transparent to-transparent" />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-brand-500/15 blur-[140px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]" />
          <div className="bg-dot-grid absolute inset-0 opacity-40" />
        </div>

        <div className="container flex min-h-[90vh] items-center py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-8 font-heading text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Swastik Joshi</span>
            </motion.h1>

            {/* Role Rotator */}
            <motion.div variants={itemVariants} className="mt-4">
              <div className="flex items-center justify-center gap-3 text-xl text-muted sm:text-2xl">
                {roles.map((role, i) => (
                  <span key={role} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="hidden h-1.5 w-1.5 rounded-full bg-brand-400 sm:block" />
                    )}
                    <span>{role}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-surface-200/70"
            >
              I'm Swastik — a developer and AI builder based in Ahmedabad. 
              I build custom websites, AI chatbots, and intelligent tools for businesses. 
              Fast, direct, no agency.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center justify-center gap-3"
            >
              {[
                { icon: GithubIcon, href: "https://github.com/King-of-yellow-and-blue", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/swastik-joshi/", label: "LinkedIn" },
                { icon: TwitterIcon, href: "https://x.com/Swastik_A_Joshi", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-800 text-muted transition-all hover:border-brand-500/50 hover:text-brand-400 hover:bg-brand-500/5"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-surface-200/50 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-24">
        <div className="container">
          <SectionHeader
            label="What I Do"
            title="My Services"
            description="Specialized in building intelligent systems and modern web applications."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => {
              const icons = { brain: Brain, code: Code2, "pen-tool": Sparkles };
              const Icon = icons[service.icon as keyof typeof icons] || Code2;
              return (
                <AnimatedSection key={service.id} delay={i * 0.1}>
                  <Card glow className="group h-full">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-3">
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="border-t border-surface-800 bg-surface-950 py-24">
        <div className="container">
          <SectionHeader
            label="Featured Work"
            title="Recent Projects"
            description="A selection of my recent work spanning AI/ML and web development."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                <Card glow className="group h-full flex flex-col">
                  {/* Gradient placeholder */}
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-500/20 via-purple-500/10 to-pink-500/20 flex items-center justify-center">
                    <span className="text-4xl opacity-50">
                      {project.category === "ai-ml" ? "🤖" : "💻"}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="brand">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[120px]" />
        </div>
        <div className="container">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              Got a project in mind or looking for a passionate developer?
              I&apos;d love to hear from you.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}