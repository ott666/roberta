import { Button } from "@/components/ui/button"
import { Area } from "@/types/areas"
import { PersonStanding } from "lucide-react"
import Link from "next/link"

interface AreaCardProps{
    area:Area
}


export const AreaCard = ({area}: AreaCardProps ) =>{
    return(
        <Link href={area.url} className="group ">
        <div className="p-[30px]  transition-all duration-300 ease-out group-hover:bg-[#202020] flex flex-row-reverse justify-between items-center rounded-t-[10px] bg-stone-300">
            <Button className="text-[14px] border-[#202020] py-0 bg-cdark border text-white  group-hover:bg-white  rounded-[25px] font-bold capitalize group-hover:border-white group-hover:text-cdark">Saiba mais</Button>
            <span className="capitalize   text-cctextColor1  group-hover:text-white text-[1.5rem] font-bold md:tracking-tight">{area.title}</span>
        </div>
        <div className="p-[30px] transition-all duration-300 ease-out md:h-[250px] min-[992px]:h-[170px] xl:h-[230px]   group-hover:bg-cprimary   bg-stone-200 ">
            <p className="leading-[1.8] text-cdark2 text-[17px] group-hover:text-[#202020] font-medium">{area.cardText}</p>
        </div>
        </Link>
    )
}