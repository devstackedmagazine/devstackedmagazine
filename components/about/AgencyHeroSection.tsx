import Image from "next/image";
import redDots from "@/public/styles/red-dots.svg";

export default function AgencyHeroSection() {
  return (
    <section className="relative min-h-[380px] mt-2 grid place-items-center">
      <Image src={redDots} alt="" className="absolute w-[50px] h-auto right-[72px] top-[32px] max-[980px]:right-[42px] max-[980px]:top-[22px] max-[680px]:w-[38px] max-[680px]:right-[24px] max-[680px]:top-[14px]" aria-hidden />
      <span className="absolute inset-0 flex items-center justify-center text-[clamp(6rem,17vw,14rem)] leading-none tracking-[0.08em] text-transparent uppercase select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]">About</span>
      <div className="relative text-center z-10">
        <h1 className="m-0 text-[clamp(2.1rem,5vw,4rem)] font-medium leading-[1.06]">
          The People Behind
          <br />
          The <span className="text-[#db1323] border-b border-[rgba(219,19,35,0.7)]">Pixels</span>
        </h1>
      </div>
      <Image
        src={redDots}
        alt=""
        className="absolute w-[52px] h-auto left-[120px] bottom-[54px] max-[980px]:left-[60px] max-[980px]:bottom-[34px] max-[680px]:w-[40px] max-[680px]:left-[24px] max-[680px]:bottom-[20px]"
        aria-hidden
      />
    </section>
  );
}
