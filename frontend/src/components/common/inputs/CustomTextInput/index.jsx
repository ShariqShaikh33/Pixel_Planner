import React from 'react'

function CustomTextInput({id, type, placeholder}) {
  return (
    <>
        <input className='border w-full text-left' id={id} type={type} placeholder={placeholder}></input>
    </>
  )
}

export default CustomTextInput