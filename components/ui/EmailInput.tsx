import Button from "@/components/ui/Button";
import Image from "next/image";
import arrow from "@/public/icons/arrow.svg";

export default function Page({ className }: { className: string }) {
  return (
    <div
      className={`flex items-center w-full max-w-md border-2 border-white/30 rounded-3xl p-1 focus-within:ring-1 focus-within:ring-white/40 ${className}`}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-transparent px-4 py-2 text-white focus:outline-none"
      />
      <Button className="!rounded-3xl px-8 py-2">
        <Image src={arrow} alt="Arrow" width={18} height={18} />
      </Button>
    </div>
  );
}
