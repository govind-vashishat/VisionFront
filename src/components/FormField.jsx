import React from 'react'

const FormField = ({ LabeLName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (   
    <div> 
      <div className='flex items-center gap-2 mb-2'>
       <label 
       htmlFor={name}
       className='block text-sm font-medium text-[#efefef]'
       >
        {LabeLName}
        </label>
        {isSurpriseMe && (
          <button 
          type='button'
          onClick={handleSurpriseMe}
          className='font-semibold text-xs bg-[#6469ff] py-1 px-2 rounded-[5px] text-[#efefef]'
          >
            Surprise Me  
          </button>
        )} 
      </div>
      <input 
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      className='bg-[#202123] border border-[#101014] text-white text-sm rounded-lg  focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField