import React from 'react'
import CustomTextArea from '../inputs/CustomTextArea/index.jsx';
import CustomLabel from '../inputs/CustomLabel/index.jsx';

function CustomLabelandArea(props) {
  const{id, text, type, placeholder, onChange} = props;
  return (
    <div className='w-full flex gap-5 justify-between'>
        <CustomLabel id={id} text={text}/>
        <CustomTextArea id={id} type={type} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}

export default CustomLabelandArea