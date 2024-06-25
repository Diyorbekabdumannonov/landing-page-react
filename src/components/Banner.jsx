import React from 'react'
import banner from '././../assets/angular-logo.png'

export default function Banner() {
    return (
        <section className="px-4 xl:px-0">
            <div
                className="inner-container gradient flex items-center justify-between mt-28 rounded-xl overflow-hidden max-h-380">
                <div className="lg:pl-20 md:pl-12 lg:flex-[3] flex-1 p-6 md:p-0">
                    <h3 className="lg:text-5xl text-3xl font-semibold leading-snug">
                        See why property managers love using AngularCH
                    </h3>
                    <div className="mt-8 flex items-center gap-4">
                        <button className="btn bg-blue">Get a demo</button>
                        <button className="btn bg-white text-primary">Sign up for free</button>
                    </div>
                </div>
                <div className="lg:flex-[2] flex-1 hidden md:block">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </section>
    )
}