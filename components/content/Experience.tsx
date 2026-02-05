import { experienceProjectsList } from "@/constants/experience"
import { ROUTES } from "@/constants/route"
import { IconMedal } from "@tabler/icons-react"

const Experience = () => {
  return (
    <section id={ROUTES.EXPERIENCE} className="py-14 page-spacing space-y-14 bg-neutral-200/30 dark:bg-neutral-900/20">
      <div className="text-center space-y-4">
        <h1 className="text-[28px] font-bold">
          My Work Experience
        </h1>

        <p className="max-w-[52vh] text-neutral-800 dark:text-neutral-300/80 mx-auto">
          Projects I&apos;ve actively worked on as a Website Developer, where I gained hands-on experience and my work had real impact within the community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {experienceProjectsList.map((project, idx) => (
          <div key={idx} className="bg-neutral-200 dark:bg-neutral-900/80 p-5 space-y-5 rounded-[22px] shadow-md w-full transition-all duration-200 hover:-translate-y-1">
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <span className="h-14 w-14 max-sm:hidden bg-green-800/70 dark:bg-green-500/30 rounded-[15px] flex flex-col items-center justify-center">
                  <IconMedal size={36} />
                </span>

                <div>
                  <h1 className="text-[18px] font-bold">
                    {project.role}
                  </h1>

                  <p className="text-green-700 dark:text-green-500 text-[13px]">
                    {project.title}
                  </p>
                </div>
              </div>

              <span className="bg-neutral-300 dark:bg-neutral-800/40 h-fit py-2 px-4 rounded-full text-neutral-900 dark:text-neutral-400 text-[14px]">
                {project.fromYear} - {project.toYear}
              </span>
            </div>

            <p className="text-neutral-700 dark:text-neutral-400">
              {project.description}
            </p>

            <ul className="list-disc max-lg:space-y-2.5 ml-6 text-neutral-950 dark:text-neutral-200">
              {project.impacts.map((impact, idz) => (
                <li key={idz}>
                  {impact}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience