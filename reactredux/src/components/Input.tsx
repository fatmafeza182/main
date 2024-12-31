import React from 'react'

const Input = ({ type, id, name, onChange, placeholder, value }) => {
    return (
        <div>
            <input className='h-10 w-full border rounded-md p-2 outline-none mt-3' placeholder={placeholder} type={type} id={id} name={name} onChange={onChange} value={value}></input>
        </div>
    )
}

export default Input
