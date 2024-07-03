'use client'
import { Container } from "@/components/Container";
import { ArrowRight, PersonStanding } from "lucide-react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import areasData from '@/data/areas.json'; // Importando os dados JSON diretamente
import { Area } from "@/types/areas";
import Link from "next/link";


export default function Page() {
  const { url } = useParams();
  const area: Area | undefined = areasData.find(item => item.url === `/atuacao/${url}`);

  if (!area) {
    return <p>Area not found</p>;
  }

  return (
    <section className="bg-slate-100">
        <Container className="space-y-[30px]">
            <div className="flex  flex-col pt-[20px] min-[992px]:flex-row min-[992px]:gap-[50px]">
                <div >
                    <h2 className="font-title mb-[25px] text-cctextColor2 text-[2.8rem] font-bold leading-[1.2] ">{area.pageTitle}</h2>
                    <p className="text-[16px] leading-[1.8]  mb-[1rem]">
                        {area.pageText}
                    </p>
                    <p className="text-[16px] block leading-[1.8] ">
                        {area.pageText2}
                    </p>
                </div>
                <ul className="bg-[#202020] py-[30px] font-medium text-[18px] text-white rounded-[5px] min-[992px]:min-w-[33%] min-[992px]:h-fit mt-[1.5rem]">
                    {areasData.map((area=>{
                        return(
                            <li key={area.id} className="px-[40px] py-[10px] "><Link className="hover:text-cprimary flex justify-between" href={area.url}>{area.title}<ArrowRight size={18}/></Link></li>
                        )
                    }))}
                </ul>
            </div>
            <div className="flex flex-col  min-[992px]:flex-row min-[992px]:gap-[2rem]">
                <div className="min-[992px]:w-[50%]">
                    <h2 className="font-title text-[2.2rem] text-cprimary mb-[45px] border-b-[2px] inline-block font-bold border-cprimary leading-[1.2]">Sobre nossa atuação</h2>
                    <div className="flex flex-col gap-[35px] mb-[20px]">
                        {area.pageItems && Object.keys(area.pageItems).map((key) => {
                        const pageItem = area.pageItems[key];
                        return (
                                <div key={key} className="relative">
                                    <PersonStanding size={60} className="absolute left-0 top-0"/>
                                    <h3 className="ml-[64px] mb-[10px] leading-[1.2] font-title font-bold text-[1.5rem]">{pageItem.title}</h3>
                                    <p className="indent-[64px] leading-[1.8] text-[16px] block">{pageItem.text}</p>
                                </div>
                            )
                        })}
                       
                    </div>
                </div>
                <div className="relative min-h-[250px] mb-[40px] h-auto w-full min-[992px]:w-1/2">

                    <Image src={`${area.urlImg}`} alt="" objectFit="cover"  layout="responsive" width={650} height={550}/>
                </div>
            </div>
            
        </Container>
    </section>
  );
}
