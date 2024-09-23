'use client'
import { FormEvent, useState } from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'


function ContactPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted:', { email, message });
  }

  return (
    <div className="bg-black py-16 pt-32 min-h-screen relative">
      <BackgroundBeams className='absolute top-0 left-0 w-full h-full z-0' />
      <div className='text-center relative z-10'>
        <h1 className="text-3xl md:text-6xl font-bold mt-14 ">Contact Us</h1>
        <p className='text-gray-400 mt-10 max-w-[30rem] mx-auto'>We're here to help with any question about our courses, programs or event. Reach out and let us know how we can assist you in your musical journey.  </p>
        <form onSubmit={handleSubmit}>
          <div className='z-50 text-center flex flex-col gap-8 max-w-[40rem] mx-auto mt-8'>
            <input type="email" placeholder='Your email address' className='rounded-lg p-3 dark:bg-slate-800 border border-neutral-700 ' onChange={(e)=> setEmail(e.target.value)} required />
            <textarea placeholder='Your message' rows={4} className='rounded-lg p-3 dark:bg-slate-800 border border-neutral-700 ' onChange={(e)=> setMessage(e.target.value)} required />
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-semibold rounded-lg py-3 max-w-36 transition-all duration-300'> Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
