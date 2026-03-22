"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

function NotFound() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-6 text-center relative">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-red-500/50 blur-3xl opacity-30"></div>
      </div>
      <Image src="/icons/404.svg" alt="404" width={600} height={600} />
      <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
      <p className="text-gray-300">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button variant="primary" className="mt-6" onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
}

export default NotFound;
