import React from 'react'
import { links } from '../utility'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <>
      <footer class="bg-primary py-16 text-white mt-28">
        <div class="inner-container px-4 xl:px-0 flex-col md:flex-row flex items-start justify-between">
          <div
            class="flex items-start flex-col sm:flex-row justify-center lg:gap-14 md:gap-5 sm:justify-between md:justify-normal w-full gap-y-8 flex-wrap">
            <div class="flex gap-3 items-center md:w-full xl:w-auto w-full sm:w-auto">
              <img src={logo} alt="logo" class="logo rounded-full" />
              <h3 class="font-semibold text-24 text-white">AngularCh</h3>
            </div>
            {links.map(({ links, columnName }, index) => {
              return <ul key={index} class="font-normal text-sm flex flex-col gap-5 text-gray-300">
                <p class="font-semibold text-base mb-3 text-white">{columnName}</p>
                {links.map((link, index) => {
                  return <li key={index}>
                    <a href={link.href}>{link}</a>
                  </li>
                })}
              </ul>
            })}
          </div>
          <div class="lg:max-w-475 md:max-w-370 max-w-475 mx-auto md:mx-0 mt-10 md:mt-0">
            <h3 class="font-semibold">Subscribe</h3>
            <p class="mt-5 text-gray-300">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form class="flex flex-col mt-5">
              <input type="text" placeholder="first name" class="inp" />
              <input type="text" placeholder="company name" class="inp" />
              <input type="text" placeholder="email address" class="inp" />
              <button class="btn bg-blue rounded-md font-normal">
                Subscribe
              </button>
            </form>
            <p class="mt-4 text-gray-300 text-sm font-semibold">
              By subscribing you agree to with our Privacy Police and provide
              inner-containerent to recieve updates from our company.
            </p>
          </div>
        </div>
        <div class="inner-container px-4 xl:px-0">
          <hr class="mt-10 border-gray-700" />
          <div class="flex justify-between flex-col md:flex-row items-center mt-5">
            <div
              class="flex items-center text-gray-300 flex-col sm:flex-row sm:text-sm text-xs font-normal gap-1 sm:gap-5">
              <p>2022 AngularCh. All right reserved</p>
              <a href="#" class="underline">Privacy Policy</a>
              <a href="#" class="underline">Terms of Service</a>
              <a href="#" class="underline"> Cookies Settings</a>
            </div>
            <div class="flex items-center gap-5 mt-8 md:mt-0">
              <i class="fas fa-linkedin"></i>
              <i class="fas fa-linkedin"></i>
              <i class="fas fa-linkedin"></i>
              <i class="fas fa-linkedin"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}