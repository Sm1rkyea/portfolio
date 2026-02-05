import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"
import { ROUTES } from "./route"

export const navLinks = [
    {
        route: ROUTES.ABOUT,
        label: "About"
    },
    {
        route: ROUTES.PROJECTS,
        label: "Projects"
    },
    {
        route: ROUTES.EXPERIENCE,
        label: "Experience"
    },
]

export const socialsLinks = [
    {
        icon: IconBrandInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/sm1rkyea/"
    },
    {
        icon: IconBrandLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/smirkyea-dev-7693b439b/"
    },
    {
        icon: IconBrandGithub,
        label: "GitHub",
        href: "https://github.com/sm1rkyea"
    },
]
