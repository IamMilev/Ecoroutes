import React from 'react'

const Input = ({ label, id, value, onChange }) => {
    return(
        <>
            <label htmlFor={id}>
                {label}:
                <input id={id} value={value} onChange={onChange}/>
            </label>
        </>
    )
}

export default Input