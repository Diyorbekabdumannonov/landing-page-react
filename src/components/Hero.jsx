import React, { useState } from 'react'
import Highlight from 'react-highlight'
import { highlightedText, languages } from '../utility'
import PrimaryBtn from './../shared/buttons/PrimaryBtn'

export default function Hero() {
    const [selectedLanguage, setSelectedLanguage] = useState()

    return (
        <section className="bg-secondary">
            <div className='flex pt-14 xl:pl-14 sm:px-10 px-4 xl:px-0 py-6 cont flex-col lg:flex-row items-center'>
                <div className="flex-1 lg:py-24 py-4 flex flex-col items-start">
                    <h1 className="title !mt-0">
                        See how we can help you reach your goals
                    </h1>
                    <p className="subtitle max-w-96">
                        Answer two questions to help us match our expertise and software solutions to your sector.
                    </p>
                    <h3 className="sm:mt-8 mt-2 mx-auto lg:mx-0 text-center font-bold text-gray750">What is your industry?</h3>
                    <div className="flex mt-8 items-center gap-4 mx-auto lg:mx-0">
                        <div
                            onClick={() => setSelectedLanguage('')}
                            className={selectedLanguage ? 'dot' : "dot dot-active"} />
                        <div className={!selectedLanguage ? 'dot' : "dot dot-active"} />
                    </div>
                    <div className="mt-8 flex items-center mx-auto lg:mx-0 flex-wrap gap-y-6 gap-x-4 btn-container">
                        {!selectedLanguage && ['FrontEnd', 'Backend'].map((lang, index) => {
                            return <PrimaryBtn key={index} text={lang} onClick={() => setSelectedLanguage(lang)} />
                        })}
                        {selectedLanguage &&
                            languages.filter(e => e.languageName === selectedLanguage)[0]
                                .langs.map((lang, index) => {
                                    return <PrimaryBtn key={index} text={lang}
                                        onClick={() => setSelectedLanguage('')} />
                                })}
                    </div>
                </div>
                <div className="flex-1 w-full flex items-center xl:justify-center justify-center lg:justify-end">
                    {!selectedLanguage && <Highlight className='javascript'>
                        {highlightedText[0]}
                    </Highlight>}
                    {selectedLanguage === 'FrontEnd' && <Highlight className='javascript'>
                        {highlightedText[1]}
                    </Highlight>}
                    {selectedLanguage === 'Backend' && <Highlight className='javascript'>
                        {highlightedText[2]}
                    </Highlight>}
                </div>
            </div>

        </section >
    )
}