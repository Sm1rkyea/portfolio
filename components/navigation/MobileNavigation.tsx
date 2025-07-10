'use client'

import React from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { navbarLinks } from '@/constants'

const MobileNavigation = () => {
  return (
    <Sheet>
        <SheetTrigger className='md:hidden text-white cursor-pointer'><Image src='/icons/hamburger.svg' alt='Hamburger' width={30} height={30} className='transition duration-200 hover:drop-shadow-[0_0_2px_white]' /></SheetTrigger>
        <SheetContent className='w-screen h-screen bg-black border-none'>
            <SheetHeader>
            <SheetTitle className='flex items-center justify-between px-4'>
              <Link href="/"><Image src="/images/logo.png" alt="Icon" width={48} height={48} /></Link>

              <SheetClose className='cursor-pointer'><Image src="/icons/close.svg" alt="Close" width={26} height={26} className='transition duration-200 hover:drop-shadow-[0_0_4px_red]' /></SheetClose>
            </SheetTitle>
            <SheetDescription className='mt-16 flex flex-col items-center space-y-4 px-4'>
              {navbarLinks.map((link, index) => (
                <SheetClose key={index} className='block w-full text-left'>
                    <Link href={link.href} className='block bg-white/[0.05] py-3 px-4 rounded-[4px] rounded-tl-[10px] rounded-br-[10px] w-full text-[18px] text-white transition-all duration-200 hover:bg-white/[0.1] hover:rounded-tr-[10px] hover:rounded-bl-[10px]  hover:rounded-tl-[4px] hover:rounded-br-[4px]'>
                        {link.label}
                    </Link>
                </SheetClose>
              ))}
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation