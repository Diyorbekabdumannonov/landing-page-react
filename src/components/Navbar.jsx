import React from 'react'
import { navLinks } from '../utility'
import logo from './../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="bg-gray450 h-12 px-5 relative z-50">
      <div className="inner-container h-full mx-atuo flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" className="nav-logo" />
        </div>
        <ul className="md:flex hidden items-center h-full text-sm font-normal gap-8">
          {navLinks.map((link, index) => {
            return <a key={index} href={link.href} className="text-gray-700 hover:text-black">{link.name}</a>
          })}
        </ul>
        <div className="flex items-center justify-center gap-2 z-50 relative h-full">
          <button className="relative h-full md:w-16 flex items-center search-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="w-[0.875rem] h-[0.875rem] rotate-[135deg] transition-[all] duration-500">
              <path d="M 15,8 A 7,7 0 1,1 1,8 A 7,7 0 1,1 15,8"></path>
            </svg>
            <div className="search-animation"></div>
          </button>
          <button className="menu-btn">
            {[1, 2, 3].map((index) => {
              return <div key={index} className="menu-line" />
            })}
          </button>
        </div>
      </div>
    </nav>
  )
}