import React from 'react'

function SingleColor({color, index, toast}) {
  const {hex, weight, type} = color
  const hexValue = `#${hex}`
  
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(hexValue)
        toast.success('Color copied to clipboard!')
      } catch (error) {
        console.error('Failed to copy to clipboard:', error)
        toast.error('Failed to copy color!')
      }
    }
  }

  return (
    <article 
      className={`color ${index > 10 ? 'color-light' : ''}`} 
      style={{backgroundColor: hexValue}}
      onClick={saveToClipboard}
    >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexValue}</p>
    </article>
  )
}

export default SingleColor