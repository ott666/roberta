import { WhatsappIcon } from "@/public/whatsapp"
import Link from "next/link"

export const WhatsappButton = () =>{
    return(
        <Link href='https://api.whatsapp.com/send/?phone=16992096845&textOla%21gostaria%21de%21mais%21informa%C3%A7%C3%B5es' className="fixed size-16 md:size-32 rounded-full z-[10] hover:shadow-2xl hover:shadow-green-300 hover:translate-x-[-25px] transition duration-500 ease-in-out hover:scale-125 hover:translate-y-[-25px]  bottom-10 right-4 md:right-8">
            <WhatsappIcon />
        </Link>
    )
}