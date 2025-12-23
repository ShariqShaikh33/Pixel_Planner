import React from 'react'

function CustomButton({onClick, className, text}) {
  return (
    <>
        <button onClick={onClick} className={`button flex justify-center items-center ${className}`}>{text}</button>
    </>
  )
}

export default CustomButton