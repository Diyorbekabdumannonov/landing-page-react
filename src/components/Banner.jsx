import React from 'react'
import banner from '../assets/banner.png'

export default function Banner() {
    return (
        <section class="px-4 xl:px-0">
            <div
                class="inner-container gradient flex items-center justify-between mt-28 rounded-xl overflow-hidden max-h-380">
                <div class="lg:pl-20 md:pl-12 lg:flex-[3] flex-1 p-6 md:p-0">
                    <h3 class="lg:text-5xl text-3xl font-semibold leading-snug">
                        See why property managers love using AngularCH
                    </h3>
                    <div class="mt-8 flex items-center gap-4">
                        <button class="btn bg-blue">Get a demo</button>
                        <button class="btn bg-white text-primary">Sign up for free</button>
                    </div>
                </div>
                <div class="lg:flex-[2] flex-1 hidden md:block">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </section>
    )
}