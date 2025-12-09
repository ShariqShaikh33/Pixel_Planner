import React from 'react'

function CustomTextArea(props) {
    const {id, type, placeholder, onChange} = props;
  return (
    <>
        <textarea 
            id={id} 
            type={type} 
            placeholder={placeholder} 
            className='border w-full'
            onChange={(e)=>onChange(e.target.value)}>
        </textarea>
    </>
  )
}

export default CustomTextArea