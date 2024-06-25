import React from 'react'
import PrimaryBtn from '../buttons/PrimaryBtn'

export default function ProjectCard({ card }) {
    const { title, imgUrl, context } = card
    return (
        <div className="rounded-2xl hover bg-white hover:scale-105 max-w-370 overflow-hidden">
            <div className="max-h-56 overflow-hidden">
                <img src={imgUrl} alt="example" />
            </div>
            <div className="sm:pb-7 pb-4 sm:px-7 px-4 sm:pt-14 pt-8 flex items-center text-center flex-col">
                <h2 className="font-semibold sm:text-24 text-xl">
                    {title}
                </h2>
                <p className="subtitle text-center mt-4">
                    {context}
                </p>
                <PrimaryBtn classname='w-full mt-4' text='Learn More' />
            </div>
        </div>
    )
}