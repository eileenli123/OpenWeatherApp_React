import React, { useRef, useState } from 'react'

const CityInput = ({ onSubmit }) => {
    //keeps state of what the user inputs 
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault(); //on submit defaults a full page referesh (sends http request) --> loses all JS states 
        onSubmit(inputRef.current.value); {/* use prop 'onSubmit' to pass city input back to app  */ }
        inputRef.current.value = ''; //clear input box after submit
    }

    return (
        <>
            <form className='city-form' onSubmit={handleSubmit}>
                <input className='city-input' ref={inputRef} type='text' placeholder='enter a city' />
                <button className='submit-btn' type='submit'>Get Weather</button>
            </form>
        </>
    )
}

export default CityInput