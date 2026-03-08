import Image from "next/image";
import Link from "next/link";
import RedDots from "@/public/styles/red-dots.svg";
import Project from "@/public/images/home/quickit.png";

const projects = [
  {
    name: "Quickit",
    description: "An AI app",
    image: Project,
    link: "/projects/quickit",
  },
  {
    name: "Project 2",
    description: "Description for project 2",
    image: Project,
    link: "/projects/project-2",
  },
  {
    name: "Project 3",
    description: "Description for project 3",
    image: Project,
    link: "/projects/project-3",
  },
  {
    name: "Project 4",
    description: "Description for project 4",
    image: Project,
    link: "/projects/project-4",
  },
];

export default function OurProjectsSection() {
  return (
    <section className="min-h-screen py-20">
      <div className="flex justify-center md:justify-start items-center gap-2">
        <h1 className="text-white text-center sm:text-left text-3xl md:5xl font-light mb-1">
          Our Projects
        </h1>
        <Image src={RedDots} alt="Red Dots" />
      </div>
      <p className="text-white text-center text-sm sm:text-left sm:w-lg mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam
        tenetur ducimus quibusdam voluptas nam commodi rem, exercitationem et
        odit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 mt-5">
        {projects.map((project) => (
          <div
            className="w-[300px] relative overflow-hidden rounded-2xl cursor-pointer border-4 border-transparent transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white/80 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
            key={project.name}
          >
            <Image
              src={project.image}
              alt={project.name}
              className="object-cover"
              draggable={false}
            />
            <div
              className="pointer-events-none absolute inset-0 backdrop-blur-md
            [mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_50%)]
            [-webkit-mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_50%)]
            "
            />
            <h2 className="absolute bottom-8 left-3 text-white text-2xl font-semibold">
              {project.name}
            </h2>
            <p className="absolute bottom-3 left-3 text-white text-sm">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
