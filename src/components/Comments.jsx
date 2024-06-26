import React from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import SwiperComponent from './SwiperComponent'


export default function Comments() {
  return (
    <section className="inner-container px-4 xl:px-0 md:mt-28 mt-16">
      <h3 className="title text-center">
        What our customers are <br className="hidden sm:block" />
        saying about us
      </h3>
      <div className="flex justify-center">
        <div className="md:mt-16 mt-10">
          <SwiperComponent />
        </div>
      </div>
      <hr className="border mt-16 border-gray-700" />
      <div className="flex justify-between gap-4 sm:gap-0 items-center mt-6">
        <p className="sm:text-base text-sm">
          In case you're curious for other prove from our
          <br className="hidden sm:block" />
          loyal clients,
          <a href="#" className="text-blue font-semibold underline">click here to see all</a>
        </p>
        <div className="flex items-center gap-2">
          <button className="slider-btn">
            <FaArrowLeft />
          </button>
          <button className="slider-btn">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
