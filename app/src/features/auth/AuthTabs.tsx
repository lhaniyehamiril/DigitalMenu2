'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import tw from "tailwind-styled-components"

import { UserIcon } from "@/utils/icons";


const NavLinkStyle = tw(Link)<{$isactive : boolean}>`
  py-2 px-10 rounded-[1.1rem] text-center 
  
  ${(p) => p.$isactive 
    ? 'bg-[#444]  text-white  font-semibold'
    : 'bg-[#eee] ' 
  }
`;

const AuthTabs = () => {
    const path = usePathname()

    return (
        <div className="flex relative ml-12 p-4">
            <div className="absolute -top-3.5 right-13">
                <UserIcon size="42" />
            </div>
           
           <NavLinkStyle 
               className="-translate-x-7"
               href='/login' 
               $isactive={path === '/login'}
           >
               ورود
           </NavLinkStyle> 
           
           <NavLinkStyle 
               href='/signup' 
               $isactive={path === '/signup'}
           >
               ثبت نام
           </NavLinkStyle>   
        </div>
    )
}

export default AuthTabs