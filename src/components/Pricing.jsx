import React from 'react'
import { pricingInfo } from '../utility'

export default function Pricing() {
  return (
    <section className="bg-primary mt-28 lg:py-24 py-16 text-white">
      <div className="inner-container px-4 lg:px-0">
        <h1 className="lg:text-6xl sm:text-4xl text-3xl font-semibold text-center">
          We're an innovative platform <br className="hidden sm:block" />
          that will gives you:
        </h1>
        <div className="flex items-center flex-col md:flex-row justify-center mt-16">
          {pricingInfo.map(({ title, facilities }, index) => {
            return <div key={index} className="bg-gray650 sm:p-8 p-4 md:mr-12 sm:w-440 w-full hover:bg-blue500 visibility">
              <div className="bg-blue300 w-16 h-16 flex items-center justify-center rounded-full mt-2 icon">
                <i className="fa-solid text-3xl text-blue fa-glasses"></i>
              </div>
              <h3 className="mt-8 text-3xl font-semibold">{title}</h3>
              {facilities.map((facility, index) => {
                return <div key={index} className="flex items-center text-gray-400 gap-4 font-normal mt-6">
                  <i className="fa-solid fa-arrow-right-long"></i>
                  <p className="text-18">{facility}</p>
                </div>
              })}
              <button className="btn bg-blue w-full mt-10 flex items-center justify-center gap-2">
                <p>Learn more</p>
                <i className="fa-sharp fa-solid fa-arrow-right text-sm"></i>
              </button>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
