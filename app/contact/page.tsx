import Form from "@/components/contact/Form";
import Info from "@/components/contact/Info";
import ellipse from "@/public/styles/elipse-red.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <div className='relative my-16 -mx-25 grid grid-cols-1 gap-8 px-4 sm:my-20 sm:px-8 md:mx-0 md:my-24 md:gap-10 md:px-0 lg:my-35 lg:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,0.95fr)]'>
      <Image
        src={ellipse}
        alt="Ellipse"
        className="pointer-events-none absolute -top-24 -right-12 -z-10 h-72 scale-[1.05] rotate-160 sm:-top-32 sm:-right-16 sm:h-96 sm:scale-[1.2] md:-top-50 md:-right-25 md:h-425 md:scale-[1.5]"
      />
      <Info />
      <div className='flex flex-row items-center justify-center gap-4 lg:flex-col lg:gap-0'>
        <div className="h-px w-16 bg-stone-400 sm:w-24 lg:h-40 lg:w-px lg:h-60">
        </div>
        <div className="h-12 w-12 rounded-full bg-red-800 border-2 border-red-900 flex items-center self-center justify-center text-base text-white font-medium sm:h-15 sm:w-15 sm:text-xl">
          OR
        </div>
        <div className="h-px w-16 bg-stone-400 sm:w-24 lg:h-40 lg:w-px lg:h-60">
        </div>
      </div>
      <Form />
      <Image
        src={ellipse}
        alt="Ellipse"
        className="pointer-events-none absolute -left-8 top-[135vh] -z-10 h-72 scale-[2.2] sm:left-0 sm:top-[145vh] sm:h-96 sm:scale-[3.5] md:top-[150vh] md:h-125 md:scale-[5]"
      />
    </div>
  )
}
