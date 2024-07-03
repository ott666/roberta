import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"
import { PersonStanding } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const AboutSection = () =>{
    return(
        <section className="py-[100px] relative">
            <div className="hidden md:block absolute left-0 bottom-0 w-[252px] top-[500px] min-[992px]:top-[30px]">
                <Image fill src={'/section-bg1.svg'} alt="bg"/>
            </div>
            <Container className='min-[576px]:max-w-[540px] md:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]'>
                <div className="grid  min-[992px]:grid-cols-2 min-[992px]:place-content-between">
                    <div className="min-[992px]:px-[10px] min-[1400px]:px-[12px]">
                        <h2 className="capitalize font-title font-bold text-[3rem] leading-[1.2] mb-[15px]">Nosso escritório</h2>
                        <p className="text-[16px] leading-[1.8] text-cctextColor2 pb-[60px] inline-block">
                        Com mais de uma década de experiência no mercado, nosso escritório é especializado em diversas áreas do Direito, incluindo Direito Público, Eleitoral, Previdenciário, Tributário e Recuperação de Crédito, Terceiro Setor, Administrativo Público e Empresarial, Compliance e Integridade Corporativa, Sindical e Direito Ambiental.
                        </p>

                        <h3 className="pb-[32px] text-[1.875rem] font-bold text-cctextColor1 leading-[1.35] font-title">Experiência e dedicação para proporcionar o melhor serviço jurídico.
                        </h3>
                        <div className="p-[20px] border-black/10 border">
                            <p className="text-[16px] mb-[15px] leading-[1.8] text-cctextColor2 ">
                            Comprometidos com ética, responsabilidade, confiabilidade, inovação e melhorias contínuas em nossos serviços jurídicos.
                            </p>
                            <Link href={'https://api.whatsapp.com/send/?phone=16992096845&textOla%21gostaria%21de%21mais%21informa%C3%A7%C3%B5es'} className="text-slate-100 mt-[20px] block w-fit mx-auto  bg-cdark rounded-[15px] capitalize px-5 py-3 text-[22px] font-medium">Contato Imediato</Link>

                        </div>
                    </div>
                    <div className="w-full flex justify-center min-[992px]:px-[10px] min-[992px]:justify-end">
                        <div className=" rounded-[240px] max-[991px]:mt-[70px] max-w-[530px] ml-[40px] before:z-[1]  relative before:top-[15px] before:h-full before:rounded-[240px] before:absolute before:w-full before:right-[15px] before:bg-cprimary/20 mb-[15px] bg-black">
                        <img src="/sobre.jpeg" className="rounded-[240px] object-cover" alt="lala" />
                        <div className="absolute w-full max-w-[170px] text-center bg-cctextColor1  rounded-[50%] h-full max-h-[170px] min-[577px]:top-[-25px] min-[577px]:right-[-25px] flex flex-col items-center justify-center max-[576px]:top-[185px] max-[576px]:right-[10px] 
                            before:absolute before:rounded-[50%] before:left-[-5px] before:top-[-5px]  before:z-[-1] before:bg-white before:border-cctextColor1 before:border-[2px] before:w-[106%] before:h-[106%] before:max-h-[190px] ">
                            <div className="mb-[.5rem]">
                                <h2 className="text-cprimary font-title italic text-[3.125rem] font-medium">05 <span className="not-italic text-[18px] font-semibold text-white">Anos</span></h2>
                            </div>
                            <p className="capitalize text-[13px] text-white leading-[1.5]">Vasta experiência <br/>jurídica</p>
                            <PersonStanding className="absolute top-[-10px] right-[-5px] bg-white rounded-full" size={60}/>
                        </div>
                    </div>
                </div>
                        </div>
            </Container>

        </section>
    )
}