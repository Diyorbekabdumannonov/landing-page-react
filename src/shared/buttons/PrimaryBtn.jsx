import React from 'react'

export default function PrimaryBtn({ text, classname, onClick }) {
    return (
        <button
            onClick={() => onClick()}
            className={'btn-primary ' + classname}>
            {text}
        </button>
    )
}
