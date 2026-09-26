"use client";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Image from "next/image";
import arrow from "@/public/icons/arrow.svg";

export default function EmailInput({ className }: { className?: string }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setError(false);
      router.push(`/contact?email=${encodeURIComponent(email)}`);
    } else {
      setError(true);
    }
  };

  return (
    <div className={`flex w-full max-w-md flex-col gap-2 ${className ?? ""}`}>
      <label htmlFor={id} className="text-label text-ash">
        Email
      </label>
      <div
        className={`flex w-full items-center gap-2 rounded-lg border bg-shelf p-1 transition-colors duration-[140ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:border-lime focus-within:ring-2 focus-within:ring-lime focus-within:ring-offset-2 focus-within:ring-offset-void ${
          error ? "border-flare" : "border-rule"
        }`}
      >
        <input
          id={id}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(false);
          }}
          placeholder="you@company.com"
          className="text-body w-full bg-transparent px-3 py-2 text-bone placeholder:text-ash focus:outline-none"
        />
        <Button
          className="rounded-md! px-4! py-2!"
          href="/contact"
          onClick={handleNavigation}
        >
          <Image src={arrow} alt="" width={18} height={18} aria-hidden />
        </Button>
      </div>
      {error && (
        <p className="text-small text-flare">Please enter a valid email.</p>
      )}
    </div>
  );
}
