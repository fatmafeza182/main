import React from 'react'

const Button = ({ onClick, btnText }) => {
    return (
        <div>
            <button className='bg-pink-900 text-white px-4 py-2 mt-4 rounded w-full' onClick={onClick}>{btnText}</button>
        </div>
    )
}

export default Button
