'use client'
import tw from "tailwind-styled-components"

import { UserIcon } from "@/utils/icons";
import { AuthTabsProps } from "./types";



const StyleButton = tw.button<{$isactive : boolean}> `
  py-2 w-28 rounded-[1.1rem] text-center  
  
  ${(p) => p.$isactive 
    ? 'bg-[var(--main-black-color)] text-white font-semibold'
    : 'bg-[#eee] ' 
  }
`;



const AuthTabs = ({tab, setTab}: AuthTabsProps) => {
    
    return (
        <div className="flex relative ml-12 p-4">
            <div className="absolute -top-3.5 right-13">
                <UserIcon size="42" />
            </div>
           
           <StyleButton 
               className="-translate-x-5 "
               onClick={() => setTab('login')}
               $isactive={tab === 'login'}
               
           >
               ورود
           </StyleButton> 
           
           <StyleButton
                onClick={() => setTab('signup')}
               $isactive={tab === 'signup'}
           >
               ثبت نام
           </StyleButton>   
        </div>
    )
}

export default AuthTabs