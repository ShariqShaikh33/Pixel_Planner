import React from 'react'

function CustomSelect(props) {
    const {id, value, onChange, options} = props;
  return (
        <select id={id} value={value} className='border w-full h-full' onChange={(e)=>onChange(e.target.value)}>
            {options.map((e)=>(
                    <option key={e.optionid} value={e.option}>{e.option}</option>
                ))
            }
        </select>
  )
}

export default CustomSelect