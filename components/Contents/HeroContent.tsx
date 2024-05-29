import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { Container } from "../Container"
import { Button } from "../ui/button"
import { PhoneCall } from "lucide-react"

interface HeroContentProps extends HTMLAttributes<HTMLElement>{
    title:string
    subtitle:string
    text:string
}

export const HeroContent = ({title, subtitle, text, ...rest}:HeroContentProps) =>{
    return(
        <Container>
            <div className={twMerge('text-center p-[120px_10px] flex flex-col items-center', rest.className)}>
              <div className="mb-[8px]">
                <span className="text-cprimary text-[22px] leading-[1.5]">Wellcome to Corelaw</span>
              </div>
              <div className="mb-[45px]">
                <h1 className="text-[3.2rem] font-semibold leading-[1.2]">We Are Specialise In All <span className="text-cprimary">criminal law</span></h1>
              </div>
              <div>

              <Button variant={'destructive'}>Practice Area</Button>
              <div className="flex gap-[12px]">
              <PhoneCall size={36}/>
                <div>
                  <span className="capitalize">call us now</span>
                  <h5>(16) 992096845</h5>
                </div>
              </div>
              </div>
            </div>
        </Container>
    )
}