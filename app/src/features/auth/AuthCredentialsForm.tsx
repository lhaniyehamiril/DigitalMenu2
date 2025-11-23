'use client'
import React, { useState } from 'react'
import { Flex } from '@radix-ui/themes'
import tw from "tailwind-styled-components"

import { authFormProps, FormData } from './types'
import { EmailIcon, PasswordIcon, UserIcon } from '@/utils/icons'
import AuthTabs from './AuthTabs'

import { StyleButton, StyleInput } from '@/components'


const Span = tw.span`
  absolute top-3 right-2 
`
const Div = tw.div`
   w-full relative
`


const AuthCredentialsForm = ({mode} : authFormProps) => {

 const [formData, setFormData] = useState<FormData>({
  username: '',
  email: '',
  password: ''
 })

// Determine which page mode is active
 const isLoginPage = mode === 'login'
 const isSignUpPage = mode === 'signup'

const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
 const {name , value} = e.target;
 setFormData((prv) => ({...prv , [name]: value}))
}
 
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
 console.log('form submit', formData)
 setFormData({
  username: '',
  email: '',
  password: ''
 })
}

  return (
    <Flex justify='center' align='center' direction="column" className='h-[86vh]'>

      <AuthTabs />
        
      <form onSubmit={handleSubmit}
        style={{borderRadius: '61px 35px 67px 200px'}}
        className='bg-[#eee] mt-4 relative shadow  px-9 py-10 max-[387px]:w-[87%] w-80'
         >
        <Flex 
          justify='center'
          align='center'
          direction='column'
          gap='5'
         className='translate-x-3 -translate-y-2'
         >
            {isSignUpPage && 
            <Div>
             <StyleInput name='username' type='text' placeholder='نام'
              value={formData.username}
              onChange={handleChange} />

             <Span>
              <UserIcon size='22'/>
             </Span>
           </Div> 
           }
           

          <Div> 
            <StyleInput name='email' type='email' placeholder='ایمیل'
             value={formData.email} 
             onChange={handleChange}/> 

             <Span>
               <EmailIcon />
            </Span>
          </Div>
            
           
          <Div>
            <StyleInput name='password' type='password' placeholder='رمز' 
            value={formData.password} 
            onChange={handleChange}/>
            
           <Span>
            <PasswordIcon />
          </Span>
          </Div>
          
        </Flex>

         {isLoginPage && 
         <div className='bg-white rounded-full mt-2 hover:bg-red-100 cursor-pointer -mr-4 shadow-white shadow-lg w-30 text-center'>
            <span className='text-[12px] text-red-400'>رمزو فراموش کردید</span>
          </div>
          }
          
        <StyleButton className='mt-5 mr-1 duration-200 hover:w-[71%] w-[70%]'> {isLoginPage ? 'ورود' : 'ثبت نام'} </StyleButton>

      </form>
    </Flex>
    
  )
}

export default AuthCredentialsForm
