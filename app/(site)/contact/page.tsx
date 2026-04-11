"use client";

import ellipse from "@/public/styles/elipse-red.svg";
import Image from "next/image";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";
import redDots from "@/public/styles/red-dots.svg";

const contactDetails = [
  "Email: devstackedmagazine@gmail.com",
  "Instagram: devstackedmagazine",
  "TikTok: devstackedmagazine",
];

type ContactFormData = {
  fullName: string;
  email: string;
  discussion: string;
};

const CONTACT_FORM_STORAGE_KEY = "contact-form-values";

const EMPTY_CONTACT_FORM: ContactFormData = {
  fullName: "",
  email: "",
  discussion: "",
};

function getInitialFormData(): ContactFormData {
  if (typeof window === "undefined") {
    return EMPTY_CONTACT_FORM;
  }

  const saved = localStorage.getItem(CONTACT_FORM_STORAGE_KEY);
  if (!saved) {
    return EMPTY_CONTACT_FORM;
  }

  try {
    const parsed = JSON.parse(saved) as Partial<ContactFormData>;
    return {
      fullName: parsed.fullName ?? "",
      email: parsed.email ?? "",
      discussion: parsed.discussion ?? "",
    };
  } catch {
    localStorage.removeItem(CONTACT_FORM_STORAGE_KEY);
    return EMPTY_CONTACT_FORM;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(getInitialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    localStorage.setItem(CONTACT_FORM_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as keyof ContactFormData;
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    if (submitMessage) {
      setSubmitMessage(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      discussion: formData.discussion.trim(),
    };

    if (!payload.fullName || !payload.email || !payload.discussion) {
      setSubmitMessage({
        type: "error",
        text: "Please fill in your name, email, and discussion.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/contact/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitMessage({
          type: "error",
          text: result.error ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setSubmitMessage({
        type: "success",
        text: "Thanks! Your message has been sent.",
      });
      setFormData(EMPTY_CONTACT_FORM);
      localStorage.removeItem(CONTACT_FORM_STORAGE_KEY);
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Unable to send right now. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative my-8 -mx-[20px] overflow-x-clip px-4 py-10 text-white sm:my-10 sm:-mx-[50px] sm:px-8 sm:py-14 lg:-mx-[100px] lg:px-16 lg:py-18">
      <div className="pointer-events-none absolute -inset-20">
        <div className="absolute -left-28 top-8 h-90 w-90 rounded-full bg-red-active/30 blur-[120px]" />
        <div className="absolute left-[32%] top-[18%] h-70 w-70 rounded-full bg-red-active/18 blur-[110px]" />
        <div className="absolute right-[8%] top-[20%] h-80 w-[320px] rounded-full bg-red-active/24 blur-[120px]" />
        <div className="absolute right-[18%] top-[52%] h-70 w-70 rounded-full bg-red-active/20 blur-[120px]" />
        <div className="absolute left-[12%] bottom-[12%] h-85 w-85 rounded-full bg-red-active/22 blur-[130px]" />
        <div className="absolute right-[-10%] bottom-[-8%] h-100 w-100 rounded-full bg-red-active/26 blur-[140px]" />
      </div>

      <Image
        src={ellipse}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-64 -top-64 h-215 w-215 rotate-168 opacity-40"
      />
      <Image
        src={ellipse}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-72 -left-80 h-215 w-215 rotate-24 opacity-34"
      />

      <Image src={redDots} alt="Red dots styling" className="pointer-events-none absolute -right-64 -top-64 h-215 w-215 rotate-168 opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={variants.staggerContainer}
          className="relative mb-14 pt-5 text-center sm:mb-18 sm:pt-8"
        >
          <motion.p
            variants={variants.fadeInDown}
            className="pointer-events-none absolute inset-x-0 top-[58%] -translate-y-1/2 text-[24vw] font-semibold leading-none text-white/6 sm:text-[16vw] lg:text-[15rem]"
          >
            Contact
          </motion.p>

          <motion.h1
            variants={variants.fadeInUp}
            className="relative text-[2.45rem] font-semibold leading-tight sm:text-6xl"
          >
            Got an Idea? Let&apos;s
          </motion.h1>
          <motion.p
            variants={variants.fadeInUp}
            className="relative mx-auto mt-1 inline-block border border-red-active/80 px-3 text-[2.45rem] font-semibold tracking-tight text-red-active sm:text-6xl"
          >
            Make It Real
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={variants.staggerContainer}
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.03fr)] lg:gap-14"
        >
          <motion.article variants={variants.fadeInUp} className="lg:pt-3">
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Tell Us About Your Project
            </h2>
            <p className="mt-5 max-w-[57ch] text-sm leading-8 text-white/80 sm:text-base">
              {""}
            </p>

            <ul className="mt-9 space-y-4 text-sm text-white/95 sm:text-lg">
              {contactDetails.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                  <span className="min-w-0 break-all">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.div
            variants={variants.scaleUp}
            className="rounded-3xl bg-black/5 p-4 sm:p-6 lg:p-7"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="h-13 w-full rounded-full border border-white/25 bg-transparent px-5 text-sm outline-none placeholder:text-white/65 sm:h-14.5 sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-13 w-full rounded-full border border-white/25 bg-transparent px-5 text-sm outline-none placeholder:text-white/65 sm:h-14.5 sm:text-base"
              />
              <textarea
                name="discussion"
                placeholder="Discussion"
                value={formData.discussion}
                onChange={handleInputChange}
                required
                className="h-36 w-full resize-none rounded-3xl border border-white/25 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/65 sm:h-48 sm:text-base"
              />
              {submitMessage && (
                <p
                  className={`text-sm ${
                    submitMessage.type === "success"
                      ? "text-green-300"
                      : "text-red-300"
                  }`}
                >
                  {submitMessage.text}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto mt-3 block rounded-full bg-red-active px-10 py-3 text-lg font-semibold transition-colors hover:bg-red-active-hover disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Get in Touch"}
              </button>
            </form>
          </motion.div>
        </motion.div>
        <StatsSection className="mt-10 mb-50" />
        <CtaSection />
      </div>
    </section>
  );
}
