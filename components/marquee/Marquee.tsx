"use client"
import { TechnologiesMarqueeList, ToolsMarqueeList } from "@/constants/marquees"

const Marquee = () => {
  const loopTechnologies = [...TechnologiesMarqueeList, ...TechnologiesMarqueeList]
  const loopTools = [...ToolsMarqueeList, ...ToolsMarqueeList]

  return (
    <div className="max-h-[36vh] w-full rounded-2xl flex gap-5 overflow-hidden">
      <div className="overflow-hidden relative h-full w-[22vh]">
        <ul className="flex flex-col gap-4 animate-marquee-vertical">
          {loopTechnologies.map((item, idx) => {
            const Icon = item.icon
            
            return (
              <li key={idx} className="h-16 flex items-center gap-3 bg-neutral-200/60 dark:bg-neutral-900/50 rounded-full shrink-0 px-10">
                <Icon />
                <p>{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="overflow-hidden relative h-full w-[22vh]">
        <ul className="flex flex-col gap-4 animate-marquee-vertical-slow">
          {loopTools.map((item, idx) => {
            const Icon = item.icon

            return (
              <li key={idx} className="h-16 flex items-center gap-3 bg-neutral-200/60 dark:bg-neutral-900/50 rounded-full shrink-0 px-10">
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
