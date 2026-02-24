import Image from "next/image";
import RedDots from "@/public/styles/red-dots.svg";
import journey from "@/public/styles/journey.svg";

export default function OurJourney() {
  return (
    <section className="min-h-screen py-20">
      <div className="flex items-center gap-2">
        <h1 className="text-white text-5xl font-light mb-1">Our Journey</h1>
        <Image src={RedDots} alt="Red Dots" />
      </div>
      <p className="text-white text-sm w-lg mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam
        tenetur ducimus quibusdam voluptas nam commodi rem, exercitationem et
        odit.
      </p>
      <div className="mt-10 relative text-white">
        <Image
          src={journey}
          alt="Our Journey"
          className="w-full mt-10 absolute"
        />
        <div className="relative ps-18 pt-24 grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="text-xl font-light mb-2">The Idea</h2>
            <p className="font-thin w-1/2">
              We started with a simple idea: build clean, modern digital
              experiences that solve real problems.
            </p>
          </div>
          <div className="">
            <h2 className="text-xl font-light mb-2">Planning & Development</h2>
            <p className="font-thin w-1/2">
              Through research, design, and continuous learning, we turned ideas
              into functional and scalable solutions.
            </p>
          </div>
        </div>
        <div className="relative pt-10 flex justify-end items-start gap-50">
          <div className="inline-block">
            <h2 className="text-xl font-light mb-2">Growth & Optimization</h2>
            <p className="font-thin max-w-sm">
              With each project, we refined our workflow, improved performance,
              and focused on user experience.
            </p>
          </div>
          <div className="inline-block">
            <h2 className="text-xl font-light mb-2">Delivery & Impact</h2>
            <p className="font-thin max-w-xs">
              Today, we deliver responsive, reliable, and user-focused products
              that make an impact.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="h-full relative pt-14">
        <Image
          src={journeyLines}
          alt="Journey Lines"
          className="hidden md:block absolute w-4xl object-contain pointer-events-none ms-5"
        />
        <div className="relative h-[300px] grid grid-cols-1 gap-x-24 gap-y-20">
          <div className="flex justify-between items-start mt-10 w-1/2">
            <Image
              src={firstpoint}
              alt="First Point"
              className="max-w-md justify-self-start"
            />

            <Image
              src={secondpoint}
              alt="Second Point"
              className="max-w-md justify-self-end"
            />
          </div>
          <div className="flex justify-between items-end w-1/2 mx-auto">
            <Image
              src={thirdpoint}
              alt="Third Point"
              className="max-w-md justify-self-start"
            />

            <Image
              src={fourthpoint}
              alt="Fourth Point"
              className="max-w-md justify-self-end"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
}
