import { IconBrandGmail } from "@tabler/icons-react"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-white dark:text-neutral-400 dark:bg-neutral-900 border-t border-t-neutral-300 dark:border-t-neutral-800 py-5 page-spacing flex items-center sm:justify-between justify-center">
      <p className="max-sm:text-[14px]">
        &copy; {new Date().getFullYear()} Smirkyea - All rights reserved
      </p>

      <Link href="mailto:contact@smirkyea.eu" target="_blank" className="max-sm:hidden flex items-center gap-2 transition-colors duration-200 hover:text-green-500">
        <IconBrandGmail size={18} />
        
        <p>Contact Email</p>
      </Link>
    </div>
  )
}

export default Footer