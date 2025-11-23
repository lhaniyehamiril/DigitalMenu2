import React from 'react'

type inputProps = React.InputHTMLAttributes<HTMLInputElement>


const StyleInput = ({className, ...props}: inputProps) => {
  return (
    <input 
     className={`bg-white rounded-[1.2rem] placeholder:text-[#777] pr-9 focus:outline-none shadow-lg
       w-full shadow-white ${className} p-3`}  
       {...props} 
    />
  )
}

export default StyleInput
