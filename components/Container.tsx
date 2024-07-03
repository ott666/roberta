import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps extends HTMLAttributes<HTMLElement>{
    children:ReactNode
}

export const Container = ({children, ...rest}:ContainerProps) =>{
    return(
        <div className={twMerge("w-full mx-auto px-[10px] min-[576px]:max-w-[540px] md:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] min-[1400px]:px-[12px]", rest.className)}>
            {children}
        </div>
    )
}