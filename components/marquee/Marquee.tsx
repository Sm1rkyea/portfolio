"use client"
import { TechnologiesMarqueeList, ToolsMarqueeList } from "@/constants/marquees"

const Marquee = () => {
  const loopTechnologies = [...TechnologiesMarqueeList, ...TechnologiesMarqueeList]
  const loopTools = [...ToolsMarqueeList, ...ToolsMarqueeList]

  return (
    <div className="max-h-[36vh] w-full rounded-2xl flex items-center gap-5 overflow-hidden">
      <div className="overflow-hidden relative h-full">
        <ul className="flex flex-col gap-4 animate-marquee-vertical h-max">
          {loopTechnologies.map((item, idx) => {
            const Icon = item.icon

            return (
              <li key={idx} className="h-16 w-[22vh] px-10 flex items-center gap-3 bg-neutral-200/60 dark:bg-neutral-900/50 rounded-full shrink-0 transition-colors delay-100 duration-300">
                <Icon />
                <p>{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="overflow-hidden relative h-full">
        <ul className="flex flex-col gap-4 animate-marquee-vertical-slow h-max">
          {loopTools.map((item, idx) => {
            const Icon = item.icon

            return (
              <li key={idx} className="h-16 w-[22vh] px-10 flex items-center gap-3 bg-neutral-200/60 dark:bg-neutral-900/50 rounded-full shrink-0 transition-colors delay-150 duration-300">
                <Icon />
                <p>{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Marquee