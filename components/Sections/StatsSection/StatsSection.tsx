import { Container } from "@/components/Container"
import { LogoIcon } from "@/components/LogoIcon"
import Spinner from "@/components/Spinner/Spinner"
import { PersonStanding } from "lucide-react"
import Link from "next/link"

export const StatsSection = () =>{
    return(
        <section className="bg-black/90 pt-[50px]  pb-[150px] backdrop-blur-md">
        <Container className="flex px-[16px] sm:justify-center sm:max-w-[600px] md:max-w-[720px] min-[992px]:justify-end   min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] min-[992px]:flex-row-reverse flex-col gap-[45px]">
        
           
            <div className="text-white ">
                <h2 className="text-[2.2rem] leading-[1.4] font-bold mb-[30px] font-title md:text-[2.8125rem]">Prepare-se para as Eleições com Consultoria em <span className="text-cprimary">Direito Eleitoral</span>
                </h2>
                <p className="leading-[1.8] text-[16px] text-balance">Com profundo conhecimento em legislação eleitoral, estamos preparados para representar seus interesses e oferecer orientação jurídica sólida em questões eleitorais. Assessoramos candidatos e partidos políticos, ajudando-os a alcançar seus objetivos eleitorais de maneira ética, legal e bem-sucedida durante este período crucial.
</p>
                <div className="mt-[40px] flex flex-wrap  gap-[30px]">
                    <div>
                        <h4 className="font-title text-[1.5rem] text-cprimary leading-[1.2] mb-[.5rem] font-medium">Consultoria em Registro de Candidatura </h4>
                        <p className="text-[15px] font-medium leading-[1.8]">Auxiliamos no registro legal de candidaturas eleitorais com expertise jurídica.</p>
                    </div>
                    <div>
                        <h4 className="font-title text-[1.5rem] text-cprimary leading-[1.2] mb-[.5rem] font-medium">Assessoria Jurídica de Pré-Campanha</h4>
                        <p className="text-[15px] font-medium leading-[1.8]">Oferecemos suporte jurídico estratégico para preparação pré-eleitoral e conformidade legal.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[50px] min-[992px]:justify-between  min-[992px]:max-w-[40%]">

                <div className="flex flex-col items-center justify-center pt-[50px] min-[992px]:pt-0 md:gap-[15px]  min-[992px]:gap-[5px]">
                                <LogoIcon className="h-fit max-w-[200px] min-[400px]:max-w-[350px]  md:max-w-[500px] min-[992px]:max-w-[300px]"/>
                                <div className="text-center">
                                    <h1 className="text-4xl  font-medium font-title pt-[15px] mb-[0] min-[400px]:mb-[7px] md:mb-[15px] min-[992px]:mb-0 text-cprimary min-[400px]:text-[38px] sm:text-[48px] md:text-[60px] min-[992px]:text-[32px]">Cavarzani & Murtha</h1>
                                    <span className="text-3xl font-medium text-cprimary/90 font-title min-[400px]:text-[32px] sm:text-[38px] md:text-[48px] min-[992px]:text-[26px]">Advogados Associados</span>
                                </div>
                </div>
                <Link href={'/atuacao/direito-eleitoral'} className="text-cdark self-center bg-cprimary rounded-[15px] capitalize px-5 py-3 text-[22px] font-medium">Mais informações</Link>
            </div>
        </Container>
    </section>
    )
}