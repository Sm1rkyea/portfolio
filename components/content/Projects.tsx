import { projectsList } from "@/constants/projects"
import { ROUTES } from "@/constants/route"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <section id={ROUTES.PROJECTS} className="py-14 page-spacing space-y-14">
      <div className="text-center space-y-4">
        <h1 className="text-[28px] font-bold">
          Projects I Worked On
        </h1>

        <p className="max-w-[52vh] text-neutral-800 dark:text-neutral-300/80 mx-auto">
          Here are some of the projects I worked on. On these, I usually work with SEO, Next.js, and other modern tools and technologies that are popular and relevat now.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {projectsList.map((project, idx) => (
          <div key={idx} className="bg-neutral-200 dark:bg-neutral-900/80 p-3 space-y-5 rounded-[32px] shadow-md w-full transition-all duration-200 hover:-translate-y-1">
            <div className="relative w-full xl:h-82 lg:h-64 md:h-94 sm:h-72 h-52">
              <Image src={project.imgSrc} alt={project.title} fill draggable={false} className="rounded-[22px]" />
            </div>

            <div className="px-3 pb-1.5 space-y-2.5">
              <h1 className="text-[24px] font-bold">
                {project.title}
              </h1>

              <p className="text-neutral-700 dark:text-neutral-400">
                {project.description}
              </p>

              <ul className="flex flex-wrap items-center gap-2 pt-6">
                {project.tags.map((tag, idz) => (
                  <li key={idz} className="bg-neutral-300 dark:bg-neutral-800/40 text-neutral-700 dark:text-neutral-300 py-2 px-5 rounded-full w-fit text-[14px]">
                    {tag}
                  </li>
                ))}
              </ul>

              <Link href={project.href} target="_blank" className="bg-neutral-400 dark:bg-neutral-800/60 py-3 px-6 rounded-3xl block text-center mt-3 transition-colors duration-200 hover:text-white hover:bg-neutral-500 dark:hover:bg-neutral-800">
                View Site
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects