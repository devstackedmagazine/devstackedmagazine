import Form from "@/components/contact/Form";
import Info from "@/components/contact/Info";
import ellipse from "@/public/styles/elipse-red.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <div className='my-35 grid grid-cols-1 md:grid-cols-[0.95fr_0.05fr_0.95fr] gap-10 relative'>
      <Image
        src={ellipse}
        alt="Ellipse"
        className="absolute -top-50 -right-25 -z-10 rotate-160 h-425  scale-[1.5] "
      />
      <Info />
      <div className='flex flex-col items-center justify-center'>
        <div className="w-px h-60 bg-stone-400">
        </div>
        <div className="w-15 h-15 rounded-full bg-red-800 border-2 border-red-900 flex items-center self-center justify-center text-white font-medium text-xl">
          OR
        </div>
        <div className="w-px h-60 bg-stone-400">
        </div>
      </div>
      <Form />
      <Image
        src={ellipse}
        alt="Ellipse"
        className="absolute h-125 top-[150vh] left-0 -z-10 scale-[5]"
      />
    </div>
  )
}
