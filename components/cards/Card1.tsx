import { PersonStanding } from "lucide-react"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface Card1Props extends HTMLAttributes<HTMLElement>{
    numbers:string
    text:string
}

export const Card1 = ({numbers, text, ...rest}:Card1Props) =>{
    return(
        <div className={twMerge(`flex group flex-col items-center p-[30px_25px] text-center md:p-[60px_30px] relative transition-all
        after:absolute after:z-[-1] after:inset-y-0 after:origin-left after:scale-x-0 after:w-full after:bg-cdark 
        hover:after:scale-x-100 after:ease-in-out after:duration-700`, rest.className)}>
          <span className="absolute text-[3rem] group-hover:text-[#ffffff1a]  text-transparent font-outline font-bold top-0 left-[20px]">
            01
          </span>
          <div className="mb-[10px] md:mb-[20px]">
            <PersonStanding size={70}  className="text-cprimary"/>
          </div>
          <div className="mb-[3px]">
            <h3 className="text-[35px] text-cdark2 group-hover:text-white font-bold font-title leading-[1.2] delay-[350]">{numbers}</h3>
          </div>
          <div className="mb-[.5rem]">
            <h5 className="text-[18px] text-clight font-medium capitalize">{text}</h5>
          </div>
        </div>
    )
}