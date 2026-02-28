import Image from "next/image";
import heroImage from "@/public/images/home/heroImage.svg";
import EmailInput from "@/components/ui/EmailInput";

export default function Page() {
  return (
    <div className="flex my-12 p-10 relative border-2 border-white/20 bg-white/5 rounded-4xl">
      <div className="flex flex-col gap-7">
        <h2 className="text-7xl text-white w-96">
          Let's Build Something <span className="text-red-active">Amazing</span>
        </h2>
        <p className="text-gray-300 w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab
          autem magnam sequi saepe earum, fugit rerum! Rem labore perferendis
          mollitia! Impedit commodi labore earum?
        </p>
        <div>
          <EmailInput />
        </div>
      </div>
      <Image
        src={heroImage}
        alt="Hero Image"
        className="h-[550px] absolute right-0 bottom-7"
      />
    </div>
  );
}
