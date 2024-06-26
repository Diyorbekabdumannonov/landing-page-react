import React from 'react'
import { cards } from '../utility'
import LogoCard from './../shared/card/LogoCard'

export default function Platforms() {
  return (
    <div className="inner-container py-16 px-4 xl:px-0">
      <h1 className="font-extrabold text-2xl">
        The Platforms We Work
      </h1>
      <div className="grid mt-6 grid-cols-5 xl:gap-20 gap-4">
        {cards.map((cardLogo, index) => {
          return <LogoCard key={index} cardLogo={cardLogo} />
        })}
      </div>
    </div>
  )
}
