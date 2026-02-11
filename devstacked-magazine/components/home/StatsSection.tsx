import RedDots from "@/public/styles/red-dots.svg";
import Image from "next/image";

export const stats = [
  {
    value: "150+",
    label: "Completed Projects",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

export default function StatsSection() {
  return (
    <div className="px-[100px] h-28 flex items-center justify-between">
      <Image src={RedDots} alt="Red Dots styling" />
      {stats.map((stat) => (
        <div className="text-white flex items-center gap-4" key={stat.label}>
          <div className="text-6xl font-semibold">{stat.value}</div>
          <p className="text-gray-300">
            {stat.label.split(" ").map((word, index) => (
              <span key={index}>
                {word}
                <br />
              </span>
            ))}
          </p>
        </div>
      ))}
      <Image src={RedDots} alt="Red Dots styling" />
    </div>
  );
}
