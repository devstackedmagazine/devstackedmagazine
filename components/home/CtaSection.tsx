import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/home/heroImage.svg";

export default function Page() {
  return (
    <div className="relative my-12 flex h-[350px] w-full rounded-4xl border-2 border-white/20 bg-white/5 p-4 lg:h-[400px] lg:p-10">
      <div className="flex flex-col items-center justify-evenly gap-7 lg:items-start">
        <h2 className="relative z-10 w-auto text-center text-4xl text-white sm:text-5xl lg:text-left lg:text-7xl">
          Let&apos;s Build Something{" "}
          <span className="block text-red-active">Amazing</span>
        </h2>
        <p className="text-center text-sm text-gray-300 text-wrap sm:w-[60%] lg:text-left">
          Whether you need a smarter landing page, a business site refresh, or
          a product-facing build, we can help shape the message and ship the
          final experience.
        </p>
        <div className="flex w-full flex-col justify-center gap-3 sm:w-3/4 sm:flex-row lg:justify-start">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-4xl bg-red-active px-6 text-base font-medium text-white transition-colors hover:bg-red-active-hover"
          >
            Book a project chat
          </Link>
          <a
            href="mailto:devstackedmagazine@gmail.com"
            className="inline-flex h-11 items-center justify-center rounded-4xl border border-white/30 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Email us directly
          </a>
        </div>
      </div>
      <Image
        src={heroImage}
        alt=""
        aria-hidden
        className="absolute bottom-7 right-0 hidden h-[550px] lg:block"
      />
    </div>
  );
}
