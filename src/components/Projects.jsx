import React from 'react'
import { projects } from '../utility'
import ProjectCard from '../shared/card/ProjectCard'

export default function Projects() {
  return (
    <section className="bg-gray450 sm:py-24 py-16">
      <div className="inner-container px-4 xl:px-0">
        <h1 className="title lg:text-center">
          It pays to use AngularCh
        </h1>
        <p className="subtitle text-center max-w-5xl mx-auto">
          AngularCh is the only platform that combines revenue-generating
          resident amenities with maintenance software that empowers property
          managers to deliver unbeatable customer service.
        </p>
        <div className="flex items-center sm:mt-16 mt-10 xl:justify-between xl:gap-0 gap-5 flex-wrap justify-center">
          {projects.map((card, index) => {
            return <ProjectCard card={card} key={index}/>
          })}
        </div>
      </div>
    </section>
  )
}
