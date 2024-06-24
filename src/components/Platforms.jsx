import React from 'react'
import { cards } from '../utility'

export default function Platforms() {
  return (
    <div class="inner-container py-16 px-4 xl:px-0">
      <h1 class="font-extrabold text-2xl">
        Our Working Platforms
      </h1>
      <div class="grid mt-6 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-20">
        {cards.map((cardLogo, index) => {
          return <div key={index} class="card">
            <img src={cardLogo} alt="logo" />
          </div>
        })}
      </div>
    </div>
  )
}
