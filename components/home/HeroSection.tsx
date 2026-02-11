import Button from "@/components/ui/Button";
import Image from "next/image";
import heroImage from "@/public/images/home/heroImage.svg";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-7rem)] relative flex items-center justify-center overflow-hidden px-[100px]">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-active/10 -z-10" />
      <div className="container">
        <div className="">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-semi text-white mb-6 leading-tight w-3/4">
            Turning <span className="bg-clip-text text-red-active">Ideas </span>
            Into Digital Reality
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Join thousands of developers creating amazing projects with our
            cutting-edge tools and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="md">
              Start a project
            </Button>
            <Button
              variant="outline"
              size="md"
              rightIcon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            >
              See our work
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Image src={heroImage} alt="Hero Image" />
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
