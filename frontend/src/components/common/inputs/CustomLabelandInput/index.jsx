import React from 'react'
import CustomLabel from '../CustomLabel'
import CustomTextInput from '../CustomTextInput'

function CustomLabelandText(props){
  const{id, text, type, placeholder, onChange} = props;
  return (
    <div className='w-full flex gap-5 justify-between'>
        <CustomLabel id={id} text={text}/>
        <CustomTextInput id={id} type={type} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

export default CustomLabelandText