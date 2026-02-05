"use client"

import { navLinks, socialsLinks } from "@/constants/links"
import { ROUTES } from "@/constants/route"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true)

    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [])

  if (!mounted) {
    return null
  }

  const ThemeIcon = theme === "dark" ? IconMoon : IconSun;

  return (
    <nav className={`${isScrolled ? "bg-white shadow-sm dark:bg-neutral-900 dark:shadow-none" : "bg-neutral-100/40 dark:bg-neutral-900/40"} fixed z-50 w-screen py-3 page-spacing flex items-center justify-between transition-all`}>
      <button onClick={() => document.getElementById(ROUTES.ABOUT)?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer flex items-center gap-4">
        <Image src="/icons/icon.png" alt="Icon" height={56} width={56} draggable={false} className="rounded-full" />
        
        <div className="space-y-0.5 max-lg:hidden">
          <h1 className="text-[18px] font-bold -ml-7">Smirkyea</h1>
          <p className="text-[12px] text-green-500 font-medium">Website Developer</p>
        </div>
      </button>

      <ul className="max-sm:hidden p-1 bg-neutral-100/60 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 rounded-full flex items-center gap-1">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <Button className="button-navigation!" onClick={() => document.getElementById(link.route)?.scrollIntoView({ behavior: "smooth" })}>
              {link.label}
            </Button>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        <li>
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="button-navigation-socials!">
            <ThemeIcon className="h-5! w-5!" />
          </Button>
        </li>

        {socialsLinks.map((social, idx) => {
          const SocialsIcon = social.icon;

          return (
            <li key={idx} className="button-navigation-socials">
              <Link href={social.href} target="_blank" className="h-full w-full flex flex-col items-center justify-center">
                <SocialsIcon />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar