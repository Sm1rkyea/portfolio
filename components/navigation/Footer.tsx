import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#050505] py-3 absolute bottom-0 left-0 text-center'>
        <h1 className='text-white text-[18px]'>&copy; 2025 Smirkyea | All rights reserved</h1>
        <h1 className='text-[#626262] text-[13px]'>Created by <Link href='https://instagram.com/sm1rkyea' target='_blank' className='transition-all duration-200 hover:text-lblue-300'>Smirkyea</Link> in <Link href='https://tailwindcss.com' target='_blank' className='transition-all duration-200 hover:text-lblue-300'>TailwindCSS</Link> and <Link href='https://nextjs.org' target='_blank' className='transition-all duration-200 hover:text-lblue-300'>Next.js</Link>.</h1>
    </div>
  )
}

export default Footer