import React from 'react'
import { Instagram, MailIcon, Music2 } from "lucide-react"

function Info() {
  return (
    <div className='w-full'>
      <h1 className="mb-4 text-3xl font-semi leading-tight text-white sm:mb-6 md:text-4xl lg:text-5xl">
        Get in Touch with <span className="bg-clip-text text-red-active">DevStacked</span>
      </h1>
      <p className="max-w-2xl text-base text-gray-300 sm:text-lg">
        We&apos;d love to hear from you! Whether you have a question about our services, want to discuss a project, or just want to say hello, feel free to reach out.
      </p>
      <div className='mt-8 flex flex-col gap-3 sm:mt-10'>
        <h2 className="mb-3 mt-6 text-xl font-semibold text-white sm:mb-4 sm:mt-8 sm:text-2xl">Contact Information</h2>
        <div className='flex items-center gap-3 text-white'>
          <div className='flex shrink-0 items-center justify-center rounded-full border-2 border-gray-500 bg-gray-600 p-2'>
            <MailIcon />
          </div>
          <p className="text-gray-300 wrap-break-word">
            Email:
            <a href="mailto:devstackedmagazine@gmail.com" className="ml-1 break-all text-red-active hover:underline">
              devstackedmagazine@gmail.com
            </a>
          </p>
        </div>
        <div className='flex items-center gap-3 text-white'>
          <div className='flex shrink-0 items-center justify-center rounded-full border-2 border-gray-500 bg-gray-600 p-2'>
            <Instagram />
          </div>
          <p className="text-gray-300 wrap-break-word">
            Instagram:
            <a href="https://www.instagram.com/devstackedmagazine" target="_blank" className="ml-1 break-all text-red-active hover:underline">
              @devstackedmagazine
            </a>
          </p>
        </div>
        <div className='flex items-center gap-3 text-white'>
          <div className='flex shrink-0 items-center justify-center rounded-full border-2 border-gray-500 bg-gray-600 p-2'>
            <Music2 />
          </div>
          <p className="text-gray-300 wrap-break-word">
            Tiktok:
            <a href="https://www.tiktok.com/@devstackedmagazine" target="_blank" className="ml-1 break-all text-red-active hover:underline">
              @devstackedmagazine
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info

