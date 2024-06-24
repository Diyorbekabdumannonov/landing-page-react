import React from 'react'
import { comments } from '../utility'

export default function Comments() {
  return (
    <section class="inner-container px-4 xl:px-0 md:mt-28 mt-16">
      <h3 class="md:text-5xl text-3xl font-semibold leading-snug text-center">
        What our customers are <br class="hidden sm:block" />
        saying about us
      </h3>
      <div class="flex justify-center">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8 md:mt-16 mt-10">
          {comments.map(({ rate, comment, user }, index) => {
            return <div key={index} class="max-w-340">
              <div class="flex items-center gap-3">
                <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
              </div>
              <p class="font-semibold mt-5 text-gray-700">
                {comment}
              </p>
              <div class="flex items-start gap-4 mt-7">
                <div>
                  <img src={user.imgUrl} alt="example" class="rounded-full" />
                </div>
                <div>
                  <h4 class="font-semibold text-xl">{user.name}</h4>
                  <p class="text-gray-400 font-normal text-sm">{user.occupation}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
      <hr class="border mt-16 border-gray-700" />
      <div class="flex justify-between gap-4 sm:gap-0 items-center mt-6">
        <p class="font-normal sm:text-base text-sm text-gray-700">
          In case you're curious for other prove from our
          <br class="hidden sm:block" />
          loyal clients,
          <a href="#" class="text-blue font-semibold underline">click here to see all</a>
        </p>
        <div class="flex items-center gap-2">
          <button class="btn lg:px-4 px-3 rounded-full bg-white border">
            <i class="fa-solid fa-arrow-left text-primary"></i>
          </button>
          <button class="btn lg:px-4 px-3 rounded-full bg-primary">
            <i class="fa-solid fa-arrow-right text-white"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
