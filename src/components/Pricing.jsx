import React from 'react'
import { pricingInfo } from '../utility'
import { FaGlasses } from "react-icons/fa";
import { IoCheckmarkDone } from 'react-icons/io5';


export default function Pricing() {
  return (
    <section className="bg-primary mt-28 lg:py-24 py-16 text-white">
      <div className="inner-container px-4 lg:px-0">
        <h1 className="title text-white lg:text-center">
          We're an innovative platform <br className="hidden sm:block" />
          that will gives you:
        </h1>
        <div className="flex items-center flex-col md:flex-row gap-12 justify-center mt-16">
          {pricingInfo.map(({ title, facilities }, index) => {
            return <div key={index}
              className="bg-gray650 rounded-2xl sm:p-8 p-4 sm:w-440 w-full duration-200 visibility">
              <div className="bg-blue300 duration-200 w-16 h-16 flex items-center justify-center rounded-full mt-2 icon">
                <FaGlasses className='text-2xl' />
              </div>
              <h3 className="subtitle text-3xl text-white">{title}</h3>
              {facilities.map((facility, index) => {
                return <div key={index} className="flex items-center text-gray-400 gap-4 font-normal mt-6">
                  <IoCheckmarkDone className='text-white' />
                  <p className="subtitle mt-0 text-white">{facility}</p>
                </div>
              })}
              <button className="btn bg-blue w-full mt-10 flex items-center justify-center gap-2 duration-200">
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
