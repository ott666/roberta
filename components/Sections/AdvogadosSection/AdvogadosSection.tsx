import { Container } from "@/components/Container"
import { LogoIcon } from "@/components/LogoIcon"
import Image from "next/image"

export const AdvogadosSection = () =>{
    return(
        <section className="bg-[#202020] py-10">
            <Container>
                <div>
                    <h2 className="text-5xl text-center text-white pb-[50px] pt-[20px]">Nossos Advogados</h2>
                    <div className="flex flex-col items-center gap-[50px]  min-[992px]:flex-row sm:justify-between">
                        <div className="flex flex-wrap items-center w-full min-[992px]:w-3/5   justify-center  min-[992px]:justify-start gap-y-[30px] gap-x-[15px]">
                            <div className="max-w-[200px] sm:max-w-none sm:w-[48%] rounded-[15px] after:rounded-[15px] after:absolute after:inset-0 hover:after:scale-y-0 ahter:transition after:duration-500 after:ease-in-out after:bg-black/50 aspect-3/4 w-full relative">
                                <Image alt="bg"  src={'/advogado1.png'} className="rounded-[inherit]" fill objectFit="cover"/>
                            </div>
                            <div className="max-w-[200px] sm:max-w-none sm:w-[48%] rounded-[15px] after:rounded-[15px] after:absolute after:inset-0 hover:after:scale-y-0 ahter:transition after:duration-500 after:ease-in-out after:bg-black/50 aspect-3/4 w-full relative">
                                <Image alt="bg"  className="rounded-[inherit]" src={'/advogado1.png'} fill objectFit="cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <LogoIcon/>
                            <div className="text-center">
                                <h1 className="text-4xl  font-medium font-title pt-[15px] mb-[0] text-cprimary">Cavarzani & Murtha</h1>
                                <span className="text-3xl text-cprimary/90 font-title">Advogados Associados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}