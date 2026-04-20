"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const iconMap = {
  brain: Brain,
  code: Code2,
  "pen-tool": Sparkles,
};

const gradients = [
  "from-violet-500/20 to-indigo-500/20",
  "from-blue-500/20 to-cyan-500/20",
  "from-pink-500/20 to-rose-500/20",
];

export function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[120px]" />
          <div className="bg-dot-grid absolute inset-0 opacity-30" />
        </div>

        <div className="container">
          <SectionHeader
            label="Services"
            title="What I Can Do For You"
            description="I offer a range of services combining AI expertise with modern web development to deliver exceptional digital solutions."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container space-y-12">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Code2;
            return (
              <AnimatedSection key={service.id}>
                <Card glow className="overflow-hidden">
                  <div className="grid gap-8 lg:grid-cols-5">
                    {/* Left - Icon + Title */}
                    <div className="lg:col-span-2">
                      <div
                        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[i]} border border-surface-700`}
                      >
                        <Icon className="h-8 w-8 text-brand-400" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-surface-200/70">
                        {service.description}
                      </p>
                    </div>

                    {/* Right - Features */}
                    <div className="lg:col-span-3">
                      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                        What&apos;s Included
                      </h4>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <motion.li
                            key={feature}
                            whileHover={{ x: 4 }}
                            className="flex items-start gap-3 rounded-lg border border-surface-800 bg-surface-900/50 p-3 transition-colors hover:border-surface-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                            <span className="text-sm text-surface-200">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-surface-800 py-24">
        <div className="container">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Interested in Working Together?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get a Quote
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
