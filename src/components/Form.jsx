import React, { useState } from 'react'

const Form = ({ addColor }) => {
    const [color, setColor] = useState('#f15025')
    const [textColor, setTextColor] = useState('#f15025')

    const handleChange = (e) => {
        setColor(e.target.value)
        setTextColor(e.target.value)
    }

    const handleTextChange = (e) => {
        setTextColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!textColor) {
            return
        }
        addColor(textColor)
    }

    return (
        <section className='container'>
            <h4>color generator</h4>
            <form className='color-form' onSubmit={handleSubmit}>
                <input 
                    type='color' 
                    value={color} 
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    value={textColor} 
                    onChange={handleTextChange}
                    placeholder='#f15025'
                />
                <button className='btn' type='submit'>
                    submit
                </button>
            </form>
        </section>
    )
}

export default Form