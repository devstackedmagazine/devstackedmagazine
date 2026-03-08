import { Mail, Phone, Briefcase } from 'lucide-react';
import Button from '../ui/Button';

export default function Form() {
  return (
    <div className='mx-auto w-full max-w-4xl'>
      <div className='mb-8 text-center sm:mb-12'>
        <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
        <p className="text-sm text-gray-300 sm:text-base">We&apos;d love to hear from you. Send us a message!</p>
      </div>

      <form className='space-y-5 sm:space-y-6'>
        <div className='grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2'>
          <div className='flex items-center gap-3 rounded-lg border-2 border-white/50 p-3 
          focus-within:border-red-active transition-colors duration-300 bg-gray-300/5'>
            <Briefcase className='w-5 h-5 shrink-0 text-white/50' />  
            <input
              type="text"
              placeholder='Your Name'
              className='w-full bg-transparent text-white focus:outline-none'
            />
          </div>
          <div className='flex items-center gap-3 rounded-lg border-2 border-white/50 p-3 
          focus-within:border-red-active transition-colors duration-300 bg-gray-300/5'>
            <Mail className='w-5 h-5 shrink-0 text-white/50' />
            <input
              type="email"
              placeholder='Your Email'
              className='w-full bg-transparent text-white focus:outline-none'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2'>
          <div className='flex items-center gap-3 rounded-lg border-2 border-white/50 p-3 
          focus-within:border-red-active transition-colors duration-300 bg-gray-300/5'>
            <Phone className='w-5 h-5 shrink-0 text-white/50' />
            <input
              type="tel"
              placeholder='Your Phone'
              className='w-full bg-transparent text-white focus:outline-none'
            />
          </div>
          <div className='flex items-center gap-3 rounded-lg border-2 border-white/50 p-3 
          focus-within:border-red-active transition-colors duration-300 bg-gray-300/5'>
            <Briefcase className='w-5 h-5 shrink-0 text-white/50' />
            <input
              type="text"
              placeholder='Company'
              className='w-full bg-transparent text-white focus:outline-none'
            />
          </div>
        </div>

        <div className='flex items-start gap-3 rounded-lg border-2 border-white/50 p-3 
        focus-within:border-red-active transition-colors duration-300 bg-gray-300/5'>
          <Mail className='w-5 h-5 shrink-0 mt-1 text-white/50' />
          <textarea
            placeholder='Your Message'
            rows={5}
            className='w-full bg-transparent text-white focus:outline-none resize-none'
          />
        </div>

        <Button
          type="submit"
          className='w-full rounded-lg'
          variant='primary'
        >
          Send Message
        </Button>
      </form>
    </div>
  )
}
