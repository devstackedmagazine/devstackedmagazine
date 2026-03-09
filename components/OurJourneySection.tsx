import Image from "next/image";
import RedDots from "@/public/styles/red-dots.svg";
import journey from "@/public/styles/journey.svg";

export default function OurJourney() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-center md:justify-start items-center gap-2">
        <h1 className="text-white text-center sm:text-left text-4xl md:text-5xl font-light mb-1">
          Our Journey
        </h1>
        <Image src={RedDots} alt="Red Dots" />
      </div>
      <p className="text-white text-center text-sm sm:text-left sm:max-w-lg mt-3 mx-auto sm:mx-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam
        tenetur ducimus quibusdam voluptas nam commodi rem, exercitationem et
        odit.
      </p>

      {/* Mobile view - Vertical List (Hidden on md and up) */}
      <div className="mt-16 flex flex-col gap-10 md:hidden text-white">
        <div className="relative pl-14">
          <div className="absolute left-0 top-0 w-10 h-10 border border-red-500/50 flex items-center justify-center text-red-500 font-bold text-xl">
            1
          </div>
          <h2 className="text-xl font-light mb-2 text-white">The Idea</h2>
          <p className="font-thin text-sm text-gray-300">
            We started with a simple idea: build clean, modern digital
            experiences that solve real problems.
          </p>
        </div>
        <div className="relative pl-14">
          <div className="absolute left-0 top-0 w-10 h-10 border border-red-500/50 flex items-center justify-center text-red-500 font-bold text-xl">
            2
          </div>
          <h2 className="text-xl font-light mb-2 text-white">
            Planning & Development
          </h2>
          <p className="font-thin text-sm text-gray-300">
            Through research, design, and continuous learning, we turned ideas
            into functional and scalable solutions.
          </p>
        </div>
        <div className="relative pl-14">
          <div className="absolute left-0 top-0 w-10 h-10 border border-red-500/50 flex items-center justify-center text-red-500 font-bold text-xl">
            3
          </div>
          <h2 className="text-xl font-light mb-2 text-white">
            Growth & Optimization
          </h2>
          <p className="font-thin text-sm text-gray-300">
            With each project, we refined our workflow, improved performance,
            and focused on user experience.
          </p>
        </div>
        <div className="relative pl-14">
          <div className="absolute left-0 top-0 w-10 h-10 border border-red-500/50 flex items-center justify-center text-red-500 font-bold text-xl">
            4
          </div>
          <h2 className="text-xl font-light mb-2 text-white">
            Delivery & Impact
          </h2>
          <p className="font-thin text-sm text-gray-300">
            Today, we deliver responsive, reliable, and user-focused products
            that make an impact.
          </p>
        </div>
      </div>

      {/* Desktop view - Absolute positioning over SVG */}
      <div className="hidden md:block mt-20 relative text-white w-full max-w-5xl mx-auto">
        <Image src={journey} alt="Our Journey map" className="w-full h-96" />

        {/* Step 1 */}
        <div className="absolute top-[45%] -left-[50px] w-[28%]">
          <h2 className="text-xl lg:text-2xl font-light mb-2">The Idea</h2>
          <p className="font-thin text-sm lg:text-base text-gray-300">
            We started with a simple idea: build clean, modern digital
            experiences that solve real problems.
          </p>
        </div>

        {/* Step 2 */}
        <div className="absolute top-[25%] right-[10%] w-[40%]">
          <h2 className="text-xl lg:text-2xl font-light mb-2">
            Planning & Development
          </h2>
          <p className="font-thin text-sm lg:text-base text-gray-300">
            Through research, design, and continuous learning, we turned ideas
            into functional and scalable solutions.
          </p>
        </div>

        {/* Step 3 */}
        <div className="absolute top-[90%] left-[20%] w-[40%]">
          <h2 className="text-xl lg:text-2xl font-light mb-2">
            Growth & Optimization
          </h2>
          <p className="font-thin text-sm lg:text-base text-gray-300">
            With each project, we refined our workflow, improved performance,
            and focused on user experience.
          </p>
        </div>

        {/* Step 4 */}
        <div className="absolute top-[56%] left-[72%] w-[35%]">
          <h2 className="text-xl lg:text-2xl font-light mb-2">
            Delivery & Impact
          </h2>
          <p className="font-thin text-sm lg:text-base text-gray-300">
            Today, we deliver responsive, reliable, and user-focused products
            that make an impact.
          </p>
        </div>
      </div>
    </section>
  );
}
