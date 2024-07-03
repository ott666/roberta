
import { Container } from "@/components/Container"
import { AreaCard } from "@/components/cards/AreaCard/AreaCard"

import areasData from '@/data/areas.json'


export const AreasSection = ({}) =>{
    
    return(
        <section className="pb-[100px] bg-[#161616] pt-[100px]">
            <Container className="min-[576px]:max-w-[540px] md:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">

                <div className="mb-[60px] max-w-2xl mx-auto text-center">
                    <h2 className="text-[3rem] text-center font-title font-bold mb-[15px] leading-[1.2] text-slate-100">Áreas de atuação</h2>
                    <p className="text-[16px] text-slate-100 leading-[1.8] text-center md:w-[58%] text-balance mx-auto">
                    Serviços jurídicos especializados em diversas áreas de atuação. Desde transações imobiliárias e defesa criminal até disputas cíveis, nossos advogados experientes oferecem suporte completo, garantindo a proteção de seus direitos e interesses.
                    </p>
                </div>
                <div className="grid gap-6   min-[576px]:w-[83%] md:w-full mx-auto md:grid-cols-2 xl:grid-cols-3  place-content-stretch">
                    
                    {areasData.map((area =>{
                        return(
                            <AreaCard key={area.id}area={area}  />
                        )
                    }))}
                   
                    
                   
                </div>
            </Container>
        </section>
    )
}