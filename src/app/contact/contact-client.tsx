"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/social-icons";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "swastik@example.com",
    href: "mailto:swastik@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gujarat, India",
    href: null,
  },
];

const socials = [
  { icon: GithubIcon, href: "https://github.com/swastikjoshi", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/swastikjoshi", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com/swastikjoshi", label: "Twitter" },
];

export function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[140px]" />
          <div className="bg-dot-grid absolute inset-0 opacity-30" />
        </div>

        <div className="container">
          <SectionHeader
            label="Contact"
            title="Let's Connect"
            description="Have a project in mind, a question, or just want to say hi? I'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <Card glow>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-white transition-colors hover:text-brand-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}

              {/* Social Links */}
              <AnimatedSection delay={0.2}>
                <Card glow>
                  <h3 className="mb-4 font-heading text-lg font-semibold">
                    Find Me Online
                  </h3>
                  <div className="flex gap-3">
                    {socials.map((social) => (
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
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Right - Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <Card glow className="relative overflow-hidden">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                      <CheckCircle2 className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-bold">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-muted">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-heading text-xl font-bold mb-6">
                      Send a Message
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-surface-200"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full rounded-xl border border-surface-800 bg-surface-900/50 px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-surface-200"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="w-full rounded-xl border border-surface-800 bg-surface-900/50 px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-surface-200"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="What's this about?"
                        className="w-full rounded-xl border border-surface-800 bg-surface-900/50 px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-surface-200"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project or idea..."
                        className="w-full resize-none rounded-xl border border-surface-800 bg-surface-900/50 px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      isLoading={isSubmitting}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
