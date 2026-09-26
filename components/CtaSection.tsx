"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="relative border border-rule bg-shelf px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-28"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="label-mark">The next step</p>
              <h2 className="text-display-xl mt-6 text-bone">
                Got a project? <br />
                <span className="text-lime">Let&apos;s build it.</span>
              </h2>
              <p className="text-subhead mt-8 max-w-[65ch] text-ash">
                Drop us a note. We read everything personally and respond within
                one business day with a clear next step.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-4">
              <Button href="/contact" size="lg">
                Start a project
              </Button>
              <Button href="/project" variant="secondary" size="lg">
                Or take the 2-min brief
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
