import { Container } from "@/components/Container"
import { Card1 } from "@/components/cards/Card1"
import Card1Data from '@/data/Card1data.json'

export const FeaturesSection = () =>{
    return(
        <section className="relative before:absolute before:inset-0 before:bg-[#f7f7f7] before:z-[-2]">
        <Container className="min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">

       <div className="grid grid-cols-1 min-[576px]:grid-cols-2 md:grid-cols-4">
        {Card1Data.map((data)=>{
          return(
            <Card1 className="col-span-1" key={data.id} numbers={data.numbers} text={data.text}/>
          )
        })}
        
       </div>
        </Container>
        
       </section>
    )
}