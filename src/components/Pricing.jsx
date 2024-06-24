import React from 'react'
import { pricingInfo } from '../utility'

export default function Pricing() {
  return (
    <section class="bg-primary mt-28 lg:py-24 py-16 text-white">
      <div class="inner-container px-4 lg:px-0">
        <h1 class="lg:text-6xl sm:text-4xl text-3xl font-semibold text-center">
          We're an innovative platform <br class="hidden sm:block" />
          that will gives you:
        </h1>
        <div class="flex items-center flex-col md:flex-row justify-center mt-16">
          {pricingInfo.map(({ title, facilities }, index) => {
            return <div key={index} class="bg-gray650 sm:p-8 p-4 md:mr-12 sm:w-440 w-full hover:bg-blue500 visibility">
              <div class="bg-blue300 w-16 h-16 flex items-center justify-center rounded-full mt-2 icon">
                <i class="fa-solid text-3xl text-blue fa-glasses"></i>
              </div>
              <h3 class="mt-8 text-3xl font-semibold">{title}</h3>
              {facilities.map((facility, index) => {
                return <div key={index} class="flex items-center text-gray-400 gap-4 font-normal mt-6">
                  <i class="fa-solid fa-arrow-right-long"></i>
                  <p class="text-18">{facility}</p>
                </div>
              })}
              <button class="btn bg-blue w-full mt-10 flex items-center justify-center gap-2">
                <p>Learn more</p>
                <i class="fa-sharp fa-solid fa-arrow-right text-sm"></i>
              </button>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
