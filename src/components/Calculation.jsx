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
          className="inner-container items-center px-4 pt-20 pb-44 xl:p-0 flex lg:flex-row flex-col-reverse justify-between mt-16">
          <div className="flex-1 lg:mt-0">
            <div className="bg-black py-1 px-3 gap-2 w-max rounded mx-auto lg:mx-0">
              <p className="text-white text-xs font-semibold">Estimator</p>
            </div>
            <h2 className="title text-white">
              Calculate your app
            </h2>
            <p className="subtitle text-white">
              Geniusee estimator will help you to calculate the expected development time of your application as well as
              budget based on our experience working with software products. Select the items below which best describes
              your app and the features you require.
            </p>
          </div>
          <div className="flex-1 flex lg:justify-end hidden lg:block justify-center">
            <img src={exampleImg} alt="example" className="image rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="bg-gray-670 -mt-24 estimator mx-4 xl:mx-auto lg:px-24 md:px-16 px-6 inner-container rounded-2xl md:rounded-[40px] md:py-12 py-4">
        <h1 className="text-gray-light font-black text-5xl md:text-7xl">01</h1>
        <div className="flex items-start gap-6">
          <div className='w-full'>
            <h3 className="mt-3 mb-6 font-black xl:text-2xl md:text-base text-sm">What is your current or expected average hourly rate <br className='hidden md:block' /> in USD per
              one team member ?</h3>
            <div className="flex items-center gap-5 flex-col md:flex-row">
              <form
                onSubmit={(e) => e.preventDefault()}
                className='border-y justify-center border bg-white flex items-end h-14 rounded-full'>
                <button className='controlBtn'>-</button>
                <div className="md:w-48 w-36 flex justify-center items-end">
                  <input className="appearance-none w-10" type="number" value="10" />
                  <p className="ml-1 font-normal text-gray-500">$/hour</p>
                </div>
                <button className='controlBtn'>+</button>
              </form>
              <p className="font-light mt-0 subtitle">
                Define average hourly rate of your development team. It can be average hourly cost of
                your inhouse team
                member or rates that you are paying to your technology partner.</p>
            </div>
          </div>
          <div className='hidden lg:block'>
            <img src={coin} alt="img" className='w-full'/>
          </div>
        </div>
      </section>
      <section className="mt-16 inner-container">
        <h1 className="text-gray-light font-black md:ml-24 ml-10 text-5xl md:text-7xl">02</h1>
        <h3 className="mt-3 mb-6 font-black xl:text-2xl md:ml-24 ml-10">What platforms do you need?</h3>
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-10 gap-4 mt-6 px-4">
          {platforms.map(({ title, description, imgUrl }, index) => {
            return <div key={index}
              className="flex cursor-pointer items-start p-6 rounded-[20px] md:h-52 h-40 w-full justify-between hover">
              <div className="flex flex-col h-full justify-between">
                <img className="md:w-14 w-10" src={imgUrl} alt="img" />
                <div>
                  <h3 className="md:text-2xl font-black">{title}</h3>
                  <p className="md:mt-2 md:text-base text-sm font-light">{description}</p>
                </div>
              </div>
              <img className="w-6" src={select} alt="img" />
            </div>
          })}
        </div>
      </section>
    </>
  )
}
