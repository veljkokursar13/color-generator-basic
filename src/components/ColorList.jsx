import React from 'react'
import SingleColor from './SingleColor'
import { v4 as uuidv4 } from 'uuid'

function ColorList({colors, toast}) {
  return (
    <section className='colors'>
        {colors.map((color, index) => {
            return <SingleColor key={uuidv4()} color={color} index={index} toast={toast} />
        })}
    </section>
  )
}

export default ColorList