import React from 'react'

export default function PrimaryBtn({ text, classname }) {
    return (
        <button className={'btn-primary ' + classname}>{text}</button>
    )
}
