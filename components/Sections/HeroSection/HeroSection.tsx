import { Container } from "@/components/Container"
import { WhatsappIcon } from "@/components/WhatsappIcon"
import { Button } from "@/components/ui/button"
import { Minus, PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export const HeroSection = () =>{
    return(
        <section className="h-[90vh] md:h-screen w-screen relative overflow-hidden flex items-center bg-black/40">
        <div className="flex-col gap-[1.5rem] items-center justify-center inset-y-0 left-0 bg-white w-[60px] hidden  absolute min-[1400px]:w-[80px]">
            <div className="bg-white z-[1] py-[5px]">
            <FaWhatsapp color="black" width={17} height={17}/>
            </div>
            <div className="bg-white z-[1] py-[5px]">
            <FaWhatsapp color="black" width={17} height={17}/>
            </div>
            <div className="bg-white z-[1] py-[5px]">
            <FaWhatsapp color="black" width={17} height={17}/>
            </div>
            <div className="bg-white z-[1] py-[5px]">
            <FaWhatsapp color="black" width={17} height={17}/>
            </div>
          <div className="w-[1px] bg-cprimary absolute inset-y-0 left-[30px] min-[1400px]:left-[40px] "/>
        </div>

        <div className=" items-center justify-center inset-y-0 right-0 bg-white w-[60px] hidden  absolute min-[1400px]:w-[80px]">
          <div className="w-[1px] bg-cprimary absolute inset-y-0 right-[30px] min-[1400px]:right-[40px]"/>
          <div className="rotate-90"><span className="px-[20px] bg-white whitespace-nowrap text-[16px] text-cprimary font-semibold">Scroll Down</span></div>
        </div>
        <Image src={'/bgHero.png'} objectPosition="left" quality={100} alt="bg" priority={true} objectFit="cover" fill className=" animate-scaleAnimation  z-[-1]"/>
        <Container className="flex flex-col items-center justify-center   py-[120px] px-[20px]  min-[576px]:max-w-[540px] md:max-w-[720px] min-[992px]:max-w-[770px] min-[1200px]:max-w-[1140px]">
          <div className="flex flex-col items-center justify-center max-w-5xl">
          <div className="mb-[45px] text-center ">
            <h1 className="text-[3.2rem] min-[576px]:text-[4rem] min-[992px]:text-[5rem] min-[992px]:leading-[1.3] text-balance leading-[1.2] text-white font-title font-semibold">Experiência Jurídica para seus <span className="text-cprimary">Desafios Legais.</span></h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-[35px]">

              <Link href={'https://api.whatsapp.com/send/?phone=16992096845&textOla%21gostaria%21de%21mais%21informa%C3%A7%C3%B5es'} className="flex items-center gap-[12px] rounded-sm justify-center text-white bg-[#18181b] h-[60px]  w-[250px]">
              <WhatsappIcon height={28} width={28}/>
                    <div>
                      <h5 className="text-[1.25rem] ">Contato Imediato</h5>
                    </div>
              </Link>
            <Link href={'/atuacao'} className="text-[1.25rem] leading-[1.5] text-center flex items-center justify-center font-medium rounded-sm p-0 bg-cprimary  h-[60px] text-cdark2  w-[250px]">
              Áreas de atuação
            </Link>
          </div>
          </div>
        </Container>

        
       </section>
    )
}