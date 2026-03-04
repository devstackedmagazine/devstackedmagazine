import ellipse from "@/public/styles/elipse-red.svg";
import Image from "next/image";

const contactDetails = [
  "stygar@help.com",
  "+1 (555) 123-4567",
  "5987 Mid Rivers Mall Dr., St. Charles",
];

const stats = [
  { value: "150+", label: "Project Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Experience" },
  { value: "24/7", label: "Support Available" },
];

function DotCluster({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-1 ${className}`}>
      {Array.from({ length: 9 }, (_, index) => (
        <span
          // index is stable because the grid length is static.
          key={index}
          className="h-2.5 w-2.5 rounded-full bg-red-active"
        />
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section className="relative my-8 -mx-25 px-4 py-10 text-white sm:my-10 sm:px-8 sm:py-14 lg:px-16 lg:py-18">
      <div className="pointer-events-none absolute -inset-20">
        <div className="absolute -left-28 top-8 h-[360px] w-[360px] rounded-full bg-red-active/30 blur-[120px]" />
        <div className="absolute left-[32%] top-[18%] h-[280px] w-[280px] rounded-full bg-red-active/18 blur-[110px]" />
        <div className="absolute right-[8%] top-[20%] h-[320px] w-[320px] rounded-full bg-red-active/24 blur-[120px]" />
        <div className="absolute right-[18%] top-[52%] h-[280px] w-[280px] rounded-full bg-red-active/20 blur-[120px]" />
        <div className="absolute left-[12%] bottom-[12%] h-[340px] w-[340px] rounded-full bg-red-active/22 blur-[130px]" />
        <div className="absolute right-[-10%] bottom-[-8%] h-[400px] w-[400px] rounded-full bg-red-active/26 blur-[140px]" />
      </div>

      <Image
        src={ellipse}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-64 -top-64 h-[860px] w-[860px] rotate-[168deg] opacity-40"
      />
      <Image
        src={ellipse}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-72 -left-80 h-[860px] w-[860px] rotate-[24deg] opacity-34"
      />

      <DotCluster className="pointer-events-none absolute right-[20%] top-[16%] opacity-95" />
      <DotCluster className="pointer-events-none absolute left-[19%] top-[36%] opacity-90" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="relative mb-14 pt-5 text-center sm:mb-18 sm:pt-8">
          <p className="pointer-events-none absolute inset-x-0 top-[58%] -translate-y-1/2 text-[24vw] font-semibold leading-none text-white/[0.06] sm:text-[16vw] lg:text-[15rem]">
            Contact
          </p>

          <h1 className="relative text-[2.45rem] font-semibold leading-tight sm:text-6xl">
            Reach Out Let&apos;s
          </h1>
          <p className="relative mx-auto mt-1 inline-block border border-red-active/80 px-3 text-[2.45rem] font-semibold tracking-tight text-red-active sm:text-6xl">
            Collaborate
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.03fr)] lg:gap-14">
          <article className="lg:pt-3">
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Talk About Your Idea
            </h2>
            <p className="mt-5 max-w-[57ch] text-sm leading-8 text-white/80 sm:text-base">
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
              ricotta garlic dolor sauce marinara Chicago marinara. Tomato
              dolor pesto pesto Bianca pesto roll onions.
            </p>

            <ul className="mt-9 space-y-4 text-sm text-white/95 sm:text-lg">
              {contactDetails.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="rounded-[24px] bg-black/5 p-4 sm:p-6 lg:p-7">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="h-[52px] w-full rounded-full border border-white/25 bg-transparent px-5 text-sm outline-none placeholder:text-white/65 sm:h-[58px] sm:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-[52px] w-full rounded-full border border-white/25 bg-transparent px-5 text-sm outline-none placeholder:text-white/65 sm:h-[58px] sm:text-base"
              />
              <textarea
                placeholder="Discussion"
                className="h-36 w-full resize-none rounded-3xl border border-white/25 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/65 sm:h-48 sm:text-base"
              />
            </div>

            <button
              type="button"
              className="mx-auto mt-7 block rounded-full bg-red-active px-10 py-3 text-lg font-semibold transition-colors hover:bg-red-active-hover"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-dashed border-white/25 pt-8 sm:mt-20 sm:pt-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6 lg:gap-10">
            {stats.map((item, index) => (
              <div key={item.label} className="flex items-start gap-4">
                {index === 0 && <DotCluster className="mt-1 hidden sm:grid" />}
                <div>
                  <p className="text-4xl font-semibold leading-none sm:text-5xl">{item.value}</p>
                  <p className="mt-2 text-sm leading-tight text-white/85 sm:text-base">
                    {item.label}
                  </p>
                </div>
                {index === 3 && <DotCluster className="mt-1 hidden sm:grid" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
