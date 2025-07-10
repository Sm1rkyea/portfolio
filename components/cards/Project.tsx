import { projectList } from '@/constants/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <>
      {projectList.map((project) => (
          <div key={project.id} className="bg-[#070707] p-3 text-white rounded-[12px] text-left">
            <div className="relative w-full h-72">
              <Image src={project.img} alt={project.project} fill priority className="rounded-[12px] transition-all duration-200 hover:scale-[102.5%] hover:rounded-[24px] hover:shadow-sm hover:shadow-white/10" />
            </div>

            <div className='p-1 pt-3'>
              <div className='flex justify-between'>
                <Link href={project.link} target="_blank" className="text-[#585858] transition-colors duration-200 hover:text-white/80">— {project.project}</Link>
                <span className='text-[#585858]'>{project.date}</span>
              </div>

              <h1 className='text-[22px] font-semibold'>{project.project} | {project.label}</h1>
              
              <p className='pt-3'>{project.description}</p>

              <Link href={project.link} target="_blank" className='mt-4 py-3 rounded-[10px] text-center block bg-white/[0.03] transition-colors duration-200 hover:bg-white/[0.05]'>Zobrazit</Link>
            </div>
          </div>
      ))}
    </>
  )
}

export default Project