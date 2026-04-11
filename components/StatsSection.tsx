import RedDots from "@/public/styles/red-dots.svg";
import Image from "next/image";

export const stats = [
  {
    value: "20+",
    label: "Projects Goal for Year One",
  },
  {
    value: "98%",
    label: "Client Satisfaction Target",
  },
  {
    value: "10+",
    label: "Technologies We Work With",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

export default function StatsSection({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`min-h-[7rem] py-8 md:py-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-4 ${className}`}
    >
      <Image
        src={RedDots}
        alt="Red Dots styling"
        className="hidden xl:block w-auto h-auto"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-10 mx-auto">
        {stats.map((stat) => (
          <div
            className="text-white flex items-center gap-4 md:flex-col lg:flex-row"
            key={stat.label}
          >
            <div className="text-4xl md:text-5xl xl:text-6xl font-semibold">
              {stat.value}
            </div>
            <p className="max-w-[13ch] text-sm leading-tight text-gray-300 text-center md:text-center lg:text-left md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <Image
        src={RedDots}
        alt="Red Dots styling"
        className="hidden xl:block w-auto h-auto"
      />
    </div>
  );
}
