import React from 'react'
import { Instagram, MailIcon, Music2 } from "lucide-react"

function Info() {
  return (
    <div className='flex-1'>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semi text-white mb-6 leading-tight">
        Get in Touch with <span className="bg-clip-text text-red-active">DevStacked</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl">
        We&apos;d love to hear from you! Whether you have a question about our services, want to discuss a project, or just want to say hello, feel free to reach out.
      </p>
      <div className='gap-3 flex flex-col mt-10'>
        <h2 className="text-2xl mt-8 mb-4 font-semibold text-white">Contact Information</h2>
        <div className='text-white flex items-center gap-3'>
          <div className='flex items-center justify-center bg-gray-600 border-2 border-gray-500 p-2 rounded-full'>
            <MailIcon />
          </div>
          <p className="text-gray-300">
            Email:
            <a href="mailto:devstackedmagazine@gmail.com" className="text-red-active hover:underline ml-1">
              devstackedmagazine@gmail.com
            </a>
          </p>
        </div>
        <div className='text-white flex items-center gap-3'>
          <div className='flex items-center justify-center bg-gray-600 border-2 border-gray-500 p-2 rounded-full'>
            <Instagram />
          </div>
          <p className="text-gray-300">
            Instagram:
            <a href="https://www.instagram.com/devstackedmagazine" target="_blank" className="text-red-active hover:underline ml-1">
              @devstackedmagazine
            </a>
          </p>
        </div>
        <div className='text-white flex items-center gap-3'>
          <div className='flex items-center justify-center bg-gray-600 border-2 border-gray-500 p-2 rounded-full'>
            <Music2 />
          </div>
          <p className="text-gray-300">
            Tiktok:
            <a href="https://www.tiktok.com/@devstackedmagazine" target="_blank" className="text-red-active hover:underline ml-1">
              @devstackedmagazine
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info