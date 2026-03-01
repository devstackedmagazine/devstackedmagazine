import { Mail, Phone, Briefcase } from 'lucide-react';
import Button from '../ui/Button';

export default function Form() {
  return (
    <div className='max-w-4xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className="text-4xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-gray-300">We&apos;d love to hear from you. Send us a message!</p>
      </div>

      <form className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex items-center gap-3 p-3 rounded-lg border-2 border-white/50 focus-within:ring-1 focus-within:ring-white/40'>
            <Briefcase className='w-5 h-5 shrink-0 text-white/50' />  
            <input
              type="text"
              placeholder='Your Name'
              className='w-full bg-transparent text-white focus:outline-none'
            />
          </div>
          <div className='flex items-center gap-3 p-3 rounded-lg border-2 border-white/50 focus-within:ring-1 focus-within:ring-white/40'>
            <Mail className='w-5 h-5 shrink-0 text-white/50' />
            <input
              type="email"
              placeholder='Your Email'
              className='w-full bg-transparent text-white focus:outline-none'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex items-center gap-3 p-3 rounded-lg border-2 border-white/50 focus-within:ring-1 focus-within:ring-white/40'>
            <Phone className='w-5 h-5 shrink-0 text-white/50' />
            <input
              type="tel"
              placeholder='Your Phone'
              className='w-full bg-transparent text-white focus:outline-none'
            />
          </div>
          <div className='flex items-center gap-3 p-3 rounded-lg border-2 border-white/50 focus-within:ring-1 focus-within:ring-white/40'>
            <Briefcase className='w-5 h-5 shrink-0 text-white/50' />
            <input
              type="text"
              placeholder='Company'
              className='w-full bg-transparent text-white focus:outline-none'
            />
          </div>
        </div>

        <div className='flex items-start gap-3 p-3 rounded-lg border-2 border-white/50 focus-within:ring-1 focus-within:ring-white/40'>
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
