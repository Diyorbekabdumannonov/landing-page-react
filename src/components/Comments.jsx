import React from 'react'
import { comments } from '../utility'

export default function Comments() {
  return (
    <section className="inner-container px-4 xl:px-0 md:mt-28 mt-16">
      <h3 className="title text-center">
        What our customers are <br className="hidden sm:block" />
        saying about us
      </h3>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 md:mt-16 mt-10">
          {comments.map(({ rate, comment, user }, index) => {
            return <div key={index} className="max-w-340">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
                <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
                <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
                <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
                <i className="fa-solid fa-star text-yellow-400 text-2xl"></i>
              </div>
              <p className="subtitle mt-0">
                {comment}
              </p>
              <div className="flex items-start gap-4 mt-7">
                <div>
                  <img src={user.imgUrl} alt="example" className="rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl">{user.name}</h4>
                  <p className="text-gray-400 font-normal text-sm">{user.occupation}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
      <hr className="border mt-16 border-gray-700" />
      <div className="flex justify-between gap-4 sm:gap-0 items-center mt-6">
        <p className="font-normal sm:text-base text-sm text-gray-700">
          In case you're curious for other prove from our
          <br className="hidden sm:block" />
          loyal clients,
          <a href="#" className="text-blue font-semibold underline">click here to see all</a>
        </p>
        <div className="flex items-center gap-2">
          <button className="btn lg:px-4 px-3 rounded-full bg-white border">
            <i className="fa-solid fa-arrow-left text-primary"></i>
          </button>
          <button className="btn lg:px-4 px-3 rounded-full bg-primary">
            <i className="fa-solid fa-arrow-right text-white"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
