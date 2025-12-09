import React from 'react'
import CustomSelect from '../inputs/CustomSelect';
import CustomLabel from '../inputs/CustomLabel';

function CustomLabelandSelect(props) {
  const{id, text, value,onChange, options} = props;
  return (
    <div className='w-full flex gap-5 justify-between'>
        <CustomLabel id={id} text={text}/>
        <CustomSelect id={id} value={value} onChange={onChange} options={options}/>
    </div>
  )
}

export default CustomLabelandSelect