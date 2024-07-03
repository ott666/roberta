'use client'
import { Container } from "@/components/Container";
import { ArrowRight, PersonStanding } from "lucide-react";
import { useParams } from 'next/navigation';
import Image from "next/image";
import areasData from '@/data/areas.json'; // Importando os dados JSON diretamente
import { Area } from "@/types/areas";


export default function Page() {
  const { url } = useParams();
  const area: Area | undefined = areasData.find(item => item.url === `/atuacao/${url}`);
  console.log(url)

  if (!area) {
    return <p>Area not found</p>;
  }

  return (
    <section>
        <Container className="space-y-[30px]">
            <div className="flex  flex-col mt-[20px] min-[992px]:flex-row">
                <div >
                    <h2 className="font-title mb-[25px] text-cctextColor2 text-[2.8rem] font-bold leading-[1.2] ">{area.title}</h2>
                    <p className="text-[16px] leading-[1.8] mb-[1rem]">
                    Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim. Orcilagri. Curabitur id nunc hendrerit, dapibus magna sit amet, cursus ogycol magna. Phasellus in vulputate metus. Nullam nisi metus, efficitur sit amet quam id, tempor deada semper tortor.Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Uto nec vulputate nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odio dolor, maximus a finibus eget, euismod vitae tellus.
                    </p>
                    <p className="text-[16px] leading-[1.8]">
                    Vestibulum eget mauris dui. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odio dolorcoul maximus a finibus eget, euismod vitae tellus. Vivamus condimentum nulla rhoncus ipsum jougara vehicula, quis bibendum massa auctor. Suspendisse potenti. Nam vulputate diam tempus orcilagri rhoncus tincidunt et nec dolor. Curabitur id nunc hendrerit, dapibus magna sit amet, cursus ogycol magna. Phasellus in vulputate metus. Nullam nisi metus, efficitur sit amet quam id, tempor deada semper tortor.Vestibulum eget mauris dui. Proin luctus est lacus, eu lobortis orci dignissim at. Uto nec vulputate nisl. Mauris vel dolor augue. Praesent sit amet eros dui. Sed porta gravida mollis. In odio dolor, maximus a finibus eget, euismod vitae tellus.
                    </p>
                </div>
                <ul className="bg-[#005153] py-[30px] font-medium text-[18px] text-white rounded-[5px] min-[992px]:min-w-[33%] min-[992px]:h-fit mt-[1.5rem]">
                    <li className="px-[40px] py-[10px] flex justify-between">Criminal Law <ArrowRight size={18}/></li>
                    <li className="px-[40px] py-[10px] flex justify-between">Criminal Law <ArrowRight size={18}/></li>
                    <li className="px-[40px] py-[10px] flex justify-between">Criminal Law <ArrowRight size={18}/></li>
                    <li className="px-[40px] py-[10px] flex justify-between">Criminal Law <ArrowRight size={18}/></li>
                    <li className="px-[40px] py-[10px] flex justify-between">Criminal Law <ArrowRight size={18}/></li>
                    <li className="px-[40px] py-[10px] flex justify-between">Criminal Law <ArrowRight size={18}/></li>
                    <li className="px-[40px] py-[10px] flex justify-between">Criminal Law <ArrowRight size={18}/></li>
                </ul>
            </div>
            <div className="flex flex-col  min-[992px]:flex-row min-[992px]:gap-[2rem]">
                <div className="min-[992px]:w-[50%]">
                    <h2 className="font-title text-[2.2rem] text-cprimary mb-[45px] border-b-[2px] inline-block font-bold border-cprimary leading-[1.2]">We Provide</h2>
                    <div className="flex flex-col gap-[35px] mb-[20px]">
                        <div className="relative">
                            <PersonStanding size={60} className="absolute left-0 top-0"/>
                            <h3 className="indent-[64px] mb-[10px] leading-[1.2] font-title font-bold text-[1.5rem]">Business Transactions</h3>
                            <p className="indent-[64px] leading-[1.8] text-[16px]">In consequat tincidunt turpis sit amet imperdiet. PraesentClavi In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis.Curabitur et tempus eri</p>
                        </div>
                        <div className="relative">
                            <PersonStanding size={60} className="absolute left-0 top-0"/>
                            <h3 className="indent-[64px] mb-[10px] leading-[1.2] font-title font-bold text-[1.5rem]">Business Transactions</h3>
                            <p className="indent-[64px] leading-[1.8] text-[16px]">In consequat tincidunt turpis sit amet imperdiet. PraesentClavi In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis.Curabitur et tempus eri</p>
                        </div>
                        <div className="relative">
                            <PersonStanding size={60} className="absolute left-0 top-0"/>
                            <h3 className="indent-[64px] mb-[10px] leading-[1.2] font-title font-bold text-[1.5rem]">Business Transactions</h3>
                            <p className="indent-[64px] leading-[1.8] text-[16px]">In consequat tincidunt turpis sit amet imperdiet. PraesentClavi In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis.Curabitur et tempus eri</p>
                        </div>
                    </div>
                </div>
                <div className="relative min-h-[250px] mb-[40px] h-auto w-full min-[992px]:w-1/2">

                    <Image src={'/atuacao.png'} alt="" objectFit="cover"  layout="responsive" width={650} height={550}/>
                </div>
            </div>
            <div className="">
                <h2 className="text-cctextColor1 text-[2.188rem] font-title font-bold mb-[30px] leading-[1.2]">Nossos Advogados</h2>
                <div className="flex-wrap flex gap-y-[20px]">
                    <div className="rounded-[15px] group overflow-hidden relative w-full min-h-[375px] mx-auto text-white bg-gradient-to-b from-gray-500/30 to-black/70 max-w-[320px]">
                        <Image src='/advogado.png' className="z-[-1]" alt="" fill objectFit="cover"/>
                        <div className="absolute bottom-4 left-3">
                            <h2>Jam Pack</h2>
                            <div className="h-1 w-[100px] bg-cprimary"/>
                            <span>Government Lawyer</span>
                        </div>
                        <div className="absolute  bg-red-500 -right-[32px] group-hover:right-0 transition ease-linear duration-500 h-3/4 w-[32px] ">
                            teste
                        </div>
                    </div>
                    <div className="rounded-[15px] overflow-hidden relative w-full min-h-[375px] mx-auto text-white bg-gradient-to-b from-gray-500/30 to-black/70 max-w-[320px]">
                        <Image src='/advogado.png' className="z-[-1]" alt="" fill objectFit="cover"/>
                        <div className="absolute bottom-4 left-3">
                            <h2>Jam Pack</h2>
                            <div className="h-1 w-[100px] bg-cprimary"/>
                            <span>Government Lawyer</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  );
}
