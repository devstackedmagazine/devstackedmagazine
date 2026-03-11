import Image from "next/image";
import RedDots from "@/public/styles/red-dots.svg";
import Project from "@/public/images/home/quickit.png";

const projects = [
  {
    name: "Quickit",
    description: "A focused product concept designed around speed, clarity, and AI-assisted workflows.",
    image: Project,
  },
  {
    name: "Landing Pages",
    description: "Conversion-minded pages built to explain an offer quickly and move visitors toward action.",
    image: Project,
  },
  {
    name: "Business Websites",
    description: "Clean, flexible sites for teams that need a sharper online presence without unnecessary complexity.",
    image: Project,
  },
  {
    name: "Product MVPs",
    description: "Lean interfaces for startups and internal tools that need to be useful from the first release.",
    image: Project,
  },
];

export default function OurProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="flex items-center justify-center gap-2 md:justify-start">
        <h2 className="mb-1 text-center text-3xl font-light text-white sm:text-left md:text-5xl">
          What We Build
        </h2>
        <Image src={RedDots} alt="Red Dots" />
      </div>
      <p className="mt-3 text-center text-sm text-white sm:max-w-lg sm:text-left">
        A mix of shipped work and the kinds of builds clients bring to us most
        often: product concepts, marketing pages, and business websites that
        need to feel polished from day one.
      </p>
      <div className="mt-5 grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            className="relative w-[300px] overflow-hidden rounded-2xl border-4 border-transparent transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white/80 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
            key={project.name}
          >
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              className="object-cover"
              draggable={false}
            />
            <div
              className="pointer-events-none absolute inset-0 backdrop-blur-md
            [mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_50%)]
            [-webkit-mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_50%)]
            "
            />
            <h3 className="absolute bottom-8 left-3 text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="absolute bottom-3 left-3 text-sm text-white">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
