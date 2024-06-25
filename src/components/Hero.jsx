import React, { useState } from 'react'
import Highlight from 'react-highlight'
import { highlightedText, languages } from '../utility'

export default function Hero() {
    const [selectedLanguage, setSelectedLanguage] = useState('FrontEnd')
    console.log(languages.filter(e => e.languageName === selectedLanguage))

    return (
        <section className="flex bg-gray450 pt-14 lg:pl-14 py-6 cont flex-col lg:flex-row items-center">
            <div className="flex-1 lg:py-24 sm:py-16 py-8 flex flex-col items-start">
                <h1 className="title !mt-0">
                    See how we can help you reach your goals
                </h1>
                <p className="subtitle max-w-96">
                    Answer two questions to help us match our expertise and software solutions to your sector.
                </p>
                <h3 className="mt-8 font-bold text-gray750">What is your industry?</h3>
                <div className="flex mt-8 items-center gap-4">
                    <div
                        onClick={() => setSelectedLanguage('')}
                        className={selectedLanguage ? 'dot' : "dot dot-active"} />
                    <div className={!selectedLanguage ? 'dot' : "dot dot-active"} />
                </div>
                <div className="mt-8 flex items-center flex-wrap gap-y-6 gap-x-4 btn-container">
                    {!selectedLanguage && ['FrontEnd', 'Backend'].map((lang, index) => {
                        return <button
                            key={index}
                            onClick={() => setSelectedLanguage(lang)}
                            className="btn-primary">
                            {lang}
                        </button>
                    })}
                    {selectedLanguage && languages.filter(e => e.languageName === selectedLanguage)[0].langs
                        .map((lang, index) => {
                            return <button
                                key={index}
                                onClick={() => setSelectedLanguage('')}
                                className="btn-primary">
                                {lang}
                            </button>
                        })}
                </div>
            </div>
            <div className="flex-1 hidden lg:flex items-center justify-center">
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
        </section >
    )
}