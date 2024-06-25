import React from 'react'
import { platforms } from '../utility'
import exampleImg from './../assets/example3.png'
import coin from './../assets/coin.webp'
import select from './../assets/select.webp'

export default function Calculation() {
  return (
    <>
      <section className="bg-[#27273d]">
        <div
          className="inner-container items-center text-white px-4 xl:px-0 flex lg:flex-row flex-col-reverse justify-between mt-16">
          <div className="flex-1 lg:mt-0">
            <div className="bg-primary py-1 px-3 gap-2 w-max rounded mx-auto lg:mx-0">
              <p className="text-[#d8d8ff] text-xs font-semibold">Estimator</p>
            </div>
            <h2 className="mt-6 lg:text-5xl sm:text-4xl text-2xl leading-tight font-semibold text-center lg:text-left">
              Calculate your app
            </h2>
            <p className="sm:mt-7 mt-4 text-sm sm:text-base font-medium text-gray-300 text-center lg:text-left">
              Geniusee estimator will help you to calculate the expected development time of your application as well as
              budget based on our experience working with software products. Select the items below which best describes
              your app and the features you require.
            </p>
          </div>
          <div className="flex-1 flex lg:justify-end justify-center">
            <img src={exampleImg} alt="example" className="image rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="bg-gray-670 -mt-24 estimator px-24 inner-container rounded-[40px] py-12">
        <h1 className="text-[#e8e8ff] font-black text-7xl">01</h1>
        <div className="flex items-start gap-6">
          <div>
            <h3 className="mt-3 mb-6 font-black text-2xl">What is your current or expected average hourly rate <br /> in USD per
              one team member ?</h3>
            <div className="flex items-center gap-5">
              <form>
                <button className='controlBtn'>-</button>
                <div className="w-48 flex justify-center items-end">
                  <input className="appearance-none" type="number" value="10" />
                  <p className="ml-1 font-normal text-[#7e7e9b]">$/hour</p>
                </div>
                <button className='controlBtn'>+</button>
              </form>
              <p className="font-light">Define average hourly rate of your development team. It can be average hourly cost of
                your inhouse team
                member or rates that you are paying to your technology partner.</p>
            </div>
          </div>
          <div>
            <img src={coin} alt="img" />
          </div>
        </div>
      </section>
      <section className="mt-16 inner-container">
        <h1 className="text-[#e8e8ff] font-black ml-24 text-7xl">02</h1>
        <h3 className="mt-3 mb-6 font-black text-2xl ml-24">What platforms do you need?</h3>
        <div className="grid grid-cols-4 gap-10 mt-6">
          {platforms.map(({ title, description, imgUrl }, index) => {
            return <div key={index} className="flex cursor-pointer items-start p-6 rounded-[20px] h-52 w-full justify-between hover">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <img className="w-14" src={imgUrl} alt="img" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-2 font-light">{description}</p>
                </div>
              </div>
              <div>
                <img className="w-6" src={select} alt="img" />
              </div>
            </div>
          })}
        </div>
      </section>
    </>
  )
}
