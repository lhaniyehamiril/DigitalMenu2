'use client'

import React from 'react'

type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const StyleButton = ({className , children, ...props }: buttonProps) => {
  return (
    <button className={` ${className} bg-[#333]  p-2 rounded-[1.2rem] text-[#eee] cursor-pointer`}  {...props}>
         {children}
     </button>
  )
}

export default StyleButton
