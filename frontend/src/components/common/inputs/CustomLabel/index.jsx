import React from 'react'

function CustomLabel({id, text}) {
  return (
    <>
        <label htmlFor={id} className='w-[40%] text-right'>{text}</label>
    </>
  )
}

export default CustomLabel