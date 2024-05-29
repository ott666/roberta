import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps extends HTMLAttributes<HTMLElement>{
    children:ReactNode
}

export const Container = ({children, ...rest}:ContainerProps) =>{
    return(
        <div className={twMerge("w-full mx-auto px-[10px] max-w-[1200px]", rest.className)}>
            {children}
        </div>
    )
}