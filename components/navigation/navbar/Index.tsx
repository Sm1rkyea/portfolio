'use client';

import { navbarLinks } from '@/constants';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import MobileNavigation from '../MobileNavigation';

const Index = () => {
	const [opaque, setOpaque] = useState(false);

	useEffect(() => {
			const onScroll = () => {
			setOpaque(window.scrollY >= 12);
			};

			onScroll();
			window.addEventListener('scroll', onScroll, { passive: true });
			return () => window.removeEventListener('scroll', onScroll);
	}, []);

  return (
    <nav className={clsx('z-50 fixed w-screen items-center py-8 max-md:px-8', 'transition-all duration-200', opaque ? 'bg-[#050505] w-screen' : 'bg-transparent')}>
			<div className='justify-between flex'>
				<Link href='/'><Image src='/images/logo.png' alt='Logo' width={64} height={64} className='transition duration-200 hover:drop-shadow-[0_0_4px_white] md:hidden' /></Link>
				<MobileNavigation />
			</div>

		  <ul className="flex space-x-5 2xl:space-x-32 items-center justify-center max-md:hidden">
				{navbarLinks.map((link, index) => {
					const halfway = Math.ceil(navbarLinks.length / 2);

					return (
						<React.Fragment key={link.label}>
							<li className="text-[19px] text-white transition-colors duration-200 hover:text-lblue-300">
								<Link href={link.href} target={link.href === '/' ? '_self' : '_blank'}>{link.label}</Link>
							</li>

							{index + 1 === halfway && (
								<li className='max-2xl:px-8'>
									<Link href='/'><Image src='/images/logo.png' alt='Logo' width={64} height={64} className='transition duration-200 hover:drop-shadow-[0_0_4px_white]' /></Link>
								</li>
							)}
						</React.Fragment>
					);
				})}
			</ul>
    </nav>
  )
}

export default Index