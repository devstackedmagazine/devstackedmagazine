import Image from "next/image";
import RedDots from "@/public/styles/red-dots.svg";
import journey from "@/public/styles/journey.svg";

export default function OurJourney() {
  return (
    <section id="process" className="min-h-screen py-20">
      <div className="flex items-center gap-2">
        <h2 className="mb-1 text-5xl font-light text-white">How We Work</h2>
        <Image src={RedDots} alt="Red Dots" />
      </div>
      <p className="mt-3 w-lg text-sm text-white">
        Good work is easier to ship when the process is clear. We keep the
        project focused, communicate early, and build with performance and real
        users in mind.
      </p>
      <div className="relative mt-10 text-white">
        <Image
          src={journey}
          alt="Our process timeline"
          className="absolute mt-10 w-full"
        />
        <div className="relative grid grid-cols-1 ps-18 pt-24 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-light">Discovery</h3>
            <p className="w-1/2 font-thin">
              We start by understanding the offer, the audience, and what the
              site needs to do beyond simply looking good.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-light">Direction</h3>
            <p className="w-1/2 font-thin">
              Then we shape the page structure, visual rhythm, and content flow
              so every section has a clear job.
            </p>
          </div>
        </div>
        <div className="relative flex items-start justify-end gap-50 pt-10">
          <div className="inline-block">
            <h3 className="mb-2 text-xl font-light">Build</h3>
            <p className="max-w-sm font-thin">
              Development stays lean and deliberate, with responsive layouts,
              accessible markup, and performance considered from the start.
            </p>
          </div>
          <div className="inline-block">
            <h3 className="mb-2 text-xl font-light">Refine</h3>
            <p className="max-w-xs font-thin">
              Before launch, we tighten copy, polish interactions, and clean up
              technical details that help the finished site hold up in the wild.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
