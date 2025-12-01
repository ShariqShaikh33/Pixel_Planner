import React from 'react'

function CustomButton({onClick, className, text}) {
  return (
    <>
        <button onClick={onClick} className={className}>{text}</button>
    </>
  )
}

export default CustomButton