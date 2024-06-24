import React from 'react'
import navLinks from '../utility'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav class="bg-gray450 h-12 px-5 relative z-50">
      <div class="inner-container h-full mx-atuo flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" class="nav-logo" />
        </div>
        <ul class="md:flex hidden items-center h-full text-sm font-normal gap-8">
          {navLinks.map(({ name, href }, index) => {
            return <a key={index} href={href} class="h-full text-gray-700 hover:text-black">{name}</a>
          })}
        </ul>
        <div class="flex items-center justify-center gap-2 z-50 relative h-full">
          <button class="relative h-full md:w-16 flex items-center search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              class="w-[0.875rem] h-[0.875rem] rotate-[135deg] transition-[all] duration-500">
              <path d="M 15,8 A 7,7 0 1,1 1,8 A 7,7 0 1,1 15,8"></path>
            </svg>
            <div class="search-animation"></div>
          </button>
          <button class="menu-btn">
            {[1, 2, 3].map((index) => {
              return <div key={index} class="menu-line" />
            })}
          </button>
        </div>
      </div>
    </nav>
  )
}