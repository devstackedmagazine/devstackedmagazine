import Image from "next/image";
import heroImage from "@/public/images/home/heroImage.svg";
import EmailInput from "@/components/ui/EmailInput";

export default function Page() {
  return (
    <div className="w-full h-[350px] md:h-[400px] flex my-12 p-4 lg:p-10 relative border-2 border-white/20 bg-white/5 rounded-4xl">
      <div className="flex flex-col items-center justify-evenly lg:items-start gap-7">
        <h2 className="relative text-4xl sm:text-5xl lg:text-7xl text-white w-auto text-center lg:text-left z-10">
          Let&apos;s Build Something{" "}
          <span className="block text-red-active">Amazing</span>
        </h2>
        <p className="text-gray-300 text-sm sm:w-[60%] text-center text-wrap lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab
          autem magnam sequi saepe earum, fugit rerum! Rem labore perferendis
          mollitia! Impedit commodi labore earum?
        </p>
        <div className="w-full sm:3/4 flex justify-center lg:justify-start">
          <EmailInput className="w-full" />
        </div>
      </div>
      <Image
        src={heroImage}
        alt="Hero Image"
        className="hidden lg:block h-[550px] absolute right-0 bottom-7"
      />
    </div>
  );
}
