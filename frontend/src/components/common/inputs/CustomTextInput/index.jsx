import React from 'react'

function CustomTextInput({id, type, onChange, placeholder}) {
  return (
    <>
        <input 
        onChange={(e)=>onChange(e.target.value)} 
        className='customInput w-full text-left'
        id={id} 
        type={type} 
        placeholder={placeholder}>
          
        </input>
    </>
  )
}

export default CustomTextInput