import React from 'react'
import { navLinks } from '../utility'
import logo from './../assets/logo.png'
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="bg-secondary h-12 px-5 relative">
      <div className="inner-container mx-atuo flex items-center justify-between">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul className="md:flex hidden items-center h-full text-sm font-normal gap-8">
          {navLinks.map((link, index) => {
            return <a key={index} href={link.href} className="text-gray-700 hover:text-black">{link.name}</a>
          })}
        </ul>
        <div className="flex items-center justify-center gap-2 z-50 relative h-full">
          <CiSearch className='text-xl cursor-pointer hover:rotate-90 duration-300' />
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