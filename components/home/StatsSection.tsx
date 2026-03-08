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
    // <div className="h-28 flex items-center justify-between">
    //   <Image src={RedDots} alt="Red Dots styling" />
    //   {stats.map((stat) => (
    //     <div className="text-white flex items-center gap-4" key={stat.label}>
    //       <div className="text-6xl font-semibold">{stat.value}</div>
    //       <p className="text-gray-300">
    //         {stat.label.split(" ").map((word, index) => (
    //           <span key={index}>
    //             {word}
    //             <br />
    //           </span>
    //         ))}
    //       </p>
    //     </div>
    //   ))}
    //   <Image src={RedDots} alt="Red Dots styling" />
    // </div>
    <div className="min-h-[7rem] py-8 md:py-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-4">
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
            <p className="text-sm md:text-base text-gray-300 leading-tight">
              {stat.label.split(" ").map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
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
