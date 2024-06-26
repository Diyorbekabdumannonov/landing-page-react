import React from 'react'

export default function LogoCard({ cardLogo }) {
    return (
        <div className="card">
            <img src={cardLogo} alt="logo" className='w-full' />
        </div>
    )
}