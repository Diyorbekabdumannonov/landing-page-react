import React from 'react'
import { links } from '../utility'
import logo from './../assets/logo.png'

export default function Footer() {
  return (
    <>
      <footer className="bg-primary py-16 text-white mt-28">
        <div className="inner-container px-4 xl:px-0 flex-col md:flex-row flex items-start justify-between">
          <div
            className="flex items-start flex-col sm:flex-row justify-center lg:gap-14 md:gap-5 sm:justify-between md:justify-normal w-full gap-y-8 flex-wrap">
            <div className="flex gap-3 items-center md:w-full xl:w-auto w-full sm:w-auto">
              <img src={logo} alt="logo" className="logo rounded-full" />
              <h3 className="font-semibold text-24 text-white">AngularCh</h3>
            </div>
            {links.map((link, index) => {
              return <ul key={index} className="font-normal text-sm flex flex-col gap-5 text-gray-300">
                <p className="font-semibold text-base mb-3 text-white">{link.columnName}</p>
                {link.links.map((link, index) => {
                  return <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                })}
              </ul>
            })}
          </div>
          <div className="lg:max-w-475 md:max-w-370 max-w-475 mx-auto md:mx-0 mt-10 md:mt-0">
            <h3 className="font-semibold">Subscribe</h3>
            <p className="mt-5 text-gray-300">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="flex flex-col mt-5">
              <input type="text" placeholder="first name" className="inp" />
              <input type="text" placeholder="company name" className="inp" />
              <input type="text" placeholder="email address" className="inp" />
              <button className="btn bg-blue rounded-md font-normal">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-gray-300 text-sm font-semibold">
              By subscribing you agree to with our Privacy Police and provide
              inner-containerent to recieve updates from our company.
            </p>
          </div>
        </div>
        <div className="inner-container px-4 xl:px-0">
          <hr className="mt-10 border-gray-700" />
          <div className="flex justify-between flex-col md:flex-row items-center mt-5">
            <div
              className="flex items-center text-gray-300 flex-col sm:flex-row sm:text-sm text-xs font-normal gap-1 sm:gap-5">
              <p>2022 AngularCh. All right reserved</p>
              <a href="#" className="underline">Privacy Policy</a>
              <a href="#" className="underline">Terms of Service</a>
              <a href="#" className="underline"> Cookies Settings</a>
            </div>
            <div className="flex items-center gap-5 mt-8 md:mt-0">
              <i className="fas fa-linkedin"></i>
              <i className="fas fa-linkedin"></i>
              <i className="fas fa-linkedin"></i>
              <i className="fas fa-linkedin"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}