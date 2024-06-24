import React from 'react'
import { platforms } from '../utility'
import exampleImg from '../assets/example3.png'
import coin from '../assets/coin.webp'
import select from '../assets/select.webp'

export default function Calculation() {
  return (
    <>
      <section class="bg-[#27273d]">
        <div
          class="inner-container items-center text-white px-4 xl:px-0 flex lg:flex-row flex-col-reverse justify-between mt-16">
          <div class="flex-1 lg:mt-0">
            <div class="bg-primary py-1 px-3 gap-2 w-max rounded mx-auto lg:mx-0">
              <p class="text-[#d8d8ff] text-xs font-semibold">Estimator</p>
            </div>
            <h2 class="mt-6 lg:text-5xl sm:text-4xl text-2xl leading-tight font-semibold text-center lg:text-left">
              Calculate your app
            </h2>
            <p class="sm:mt-7 mt-4 text-sm sm:text-base font-medium text-gray-300 text-center lg:text-left">
              Geniusee estimator will help you to calculate the expected development time of your application as well as
              budget based on our experience working with software products. Select the items below which best describes
              your app and the features you require.
            </p>
          </div>
          <div class="flex-1 flex lg:justify-end justify-center">
            <img src={exampleImg} alt="example" class="image rounded-2xl" />
          </div>
        </div>
      </section>
      <section class="bg-gray-670 -mt-24 estimator px-24 inner-container rounded-[40px] py-12">
        <h1 class="text-[#e8e8ff] font-black text-7xl">01</h1>
        <div class="flex items-start gap-6">
          <div>
            <h3 class="mt-3 mb-6 font-black text-2xl">What is your current or expected average hourly rate <br /> in USD per
              one team member ?</h3>
            <div class="flex items-center gap-5">
              <form>
                <button>-</button>
                <div class="w-48 flex justify-center items-end">
                  <input class="appearance-none" type="number" value="10" />
                  <p class="ml-1 font-normal text-[#7e7e9b]">$/hour</p>
                </div>
                <button>+</button>
              </form>
              <p class="font-light">Define average hourly rate of your development team. It can be average hourly cost of
                your inhouse team
                member or rates that you are paying to your technology partner.</p>
            </div>
          </div>
          <div>
            <img src={coin} alt="img" />
          </div>
        </div>
      </section>
      <section class="mt-16 inner-container">
        <h1 class="text-[#e8e8ff] font-black ml-24 text-7xl">02</h1>
        <h3 class="mt-3 mb-6 font-black text-2xl ml-24">What platforms do you need?</h3>
        <div class="grid grid-cols-4 gap-10 mt-6">
          {platforms.map(({ title, description, imgUrl }, index) => {
            return <div key={index} class="flex cursor-pointer items-start p-6 rounded-[20px] h-52 w-full justify-between hover">
              <div class="flex flex-col h-full justify-between">
                <div>
                  <img class="w-14" src={imgUrl} alt="img" />
                </div>
                <div>
                  <h3 class="text-2xl font-black">{title}</h3>
                  <p class="mt-2 font-light">{description}</p>
                </div>
              </div>
              <div>
                <img class="w-6" src={select} alt="img" />
              </div>
            </div>
          })}
        </div>
      </section>
    </>
  )
}
