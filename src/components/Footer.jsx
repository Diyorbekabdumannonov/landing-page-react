import React from 'react'
import logo from './../assets/logo_white.png'
import { icons, links } from './../utility'

export default function Footer() {
  return (
    <footer
      class="mt-24 text-center text-white/75 bg-neutral-800 lg:text-left">
      <div className='cont'>
        <div
          class="flex items-center justify-center border-b-2 border-white/10 p-6 lg:justify-between">
          <div class="me-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div class="flex justify-center">
            {icons.map((icon, index) => {
              return <a key={index} href="#" class="me-6 w-4">
                {icon}
              </a>
            })}
          </div>
        </div>
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="">
              <img src={logo} className='w-32' alt="" />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {links.map((link, index) => {
              return <div key={index}>
                <h6 class="font-semibold uppercase ">
                  {link.columnName}
                </h6>
                {link.links.map((link, index) => {
                  return <li key={index} className='mt-4 flex items-center gap-2'>
                    {link.icon}
                    <a href={link.href}>{link.name}</a>
                  </li>
                })}
              </div>
            })}
          </div>
        </div>
        <div class="bg-black/5 p-6 text-center">
          <span>© 2023 Copyright:</span>
          <a class="font-semibold" href="https://tw-elements.com/">
            TW Elements
          </a>
        </div>
      </div>
    </footer>
  )
}