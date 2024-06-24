import React from 'react'
import { projects } from '../utility'

export default function Projects() {
  return (
    <section class="bg-gray450 sm:py-24 py-16">
      <div class="inner-container px-4 xl:px-0">
        <h1 class="lg:text-6xl sm:text-4xl text-3xl font-semibold text-center">
          It pays to use AngularCh
        </h1>
        <p class="text-center text-gray-700 lg:mt-9 mt-5 sm:text-18 text-sm font-normal max-w-900 mx-auto">
          AngularCh is the only platform that combines revenue-generating
          resident amenities with maintenance software that empowers property
          managers to deliver unbeatable customer service.
        </p>
        <div class="flex items-center sm:mt-16 mt-10 xl:justify-between xl:gap-0 gap-5 flex-wrap justify-center">
          {projects.map(({ title, context, imgUrl }, index) => {
            return <div key={index} class="rounded-2xl hover bg-white hover:scale-105 max-w-370 overflow-hidden">
              <div class="max-h-56 overflow-hidden">
                <img src={imgUrl} alt="example" />
              </div>
              <div class="sm:pb-7 pb-4 sm:px-7 px-4 sm:pt-14 pt-8 flex items-center text-center flex-col">
                <h2 class="font-semibold sm:text-24 text-xl">
                  {title}
                </h2>
                <p class="mt-4 sm:text-18 text-gray-600 font-normal">
                  {context}
                </p>
                <button class="btn bg-gray750 text-white w-full mt-6">
                  <p>Learn More</p>
                </button>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
