import Image from "next/image";
import logo from "@/public/logos/devstacked-horizontally.svg";
import instagram from "@/public/icons/instagram.svg";
import tiktok from "@/public/icons/tiktok.svg";
import discord from "@/public/icons/discord.svg";

export default function Page() {
  return (
    <footer className="py-8 relative overflow-x-clip">
      <div className="text-white grid grid-cols-6 gap-14">
        <div className="col-span-4 flex flex-col gap-10">
          <Image src={logo} alt="Devstacked logo" className="w-72" />
          <p>
            At DevStacked, we create modern web experiences that are fast,
            scalable, and easy to use. From design to development, we help turn
            ideas into real-world products built to grow with your business.
          </p>
          <div className="flex gap-5">
            <p>devstackedmagazine@gmail.com</p>
            <p>+1 (555) 123-4567</p>
            <p>5987 Mid Rivers Mall Dr., St. Charles</p>
          </div>
          <div className="border-2 border-zinc-700 bg-background-gray w-40 py-3 px-3 rounded-3xl flex items-center justify-evenly">
            <Image
              src={instagram}
              alt="Instagram"
              className="w-5 cursor-pointer"
            />
            <Image src={tiktok} alt="TikTok" className="w-5 cursor-pointer" />
            <Image src={discord} alt="Discord" className="w-5 cursor-pointer" />
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl mb-5 font-semibold">Services</h2>
          <ul className="flex flex-col gap-3 text-nowrap relative">
            <li className="hover:ms-2 transition-all cursor-pointer">
              UI/UX Design
            </li>
            <li className="hover:ms-2 transition-all cursor-pointer">
              Web Development
            </li>
            <li className="hover:ms-2 transition-all cursor-pointer">
              Mobile App Development
            </li>
            <li className="hover:ms-2 transition-all cursor-pointer">
              Consulting
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl mb-5 font-semibold">Company</h2>
          <ul className="flex flex-col gap-3 text-nowrap">
            <li className="hover:ms-2 transition-all cursor-pointer">
              About Us
            </li>
            <li className="hover:ms-2 transition-all cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:ms-2 transition-all cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
