import { Container } from "@/components/Container";
import { HeroContent } from "@/components/Contents/HeroContent";
import { Slider } from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { PhoneCall, Minus, PersonStanding } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Card1Data from '@/data/Card1data.json'

import Image from "next/image";
import { Card1 } from "@/components/cards/Card1";



export default function Home() {
  return (
    <main className="">
      <div className="w-full h-[65px] lg:h-[67px] min-[1200px]:h-[85px] bg-black"></div>
       <section className="h-[90vh] w-screen relative overflow-hidden flex items-center bg-black/40">
        <div className="flex-col gap-[1.5rem] items-center justify-center inset-y-0 left-0 bg-white w-[60px] hidden min-[992px]:flex absolute min-[1400px]:w-[80px]">
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

        <div className=" items-center justify-center inset-y-0 right-0 bg-white w-[60px] hidden min-[992px]:flex absolute min-[1400px]:w-[80px]">
          <div className="w-[1px] bg-cprimary absolute inset-y-0 right-[30px] min-[1400px]:right-[40px]"/>
          <div className="rotate-90"><span className="px-[20px] bg-white whitespace-nowrap text-[16px] text-cprimary font-semibold">Scroll Down</span></div>
        </div>
        <Image src={'/bgHero.png'} objectPosition="left" quality={100} alt="bg" priority={true} objectFit="cover" fill className=" animate-scaleAnimation  z-[-1]"/>
        <Container className="flex flex-col justify-center py-[120px] px-[20px]  min-[576px]:max-w-[540px] md:max-w-[720px] min-[992px]:max-w-[770px] min-[1200px]:max-w-[1140px]">
          <div className="mb-[8px] text-center">
            <span className="text-[22px] leading-[1.5] text-cprimary">Wellcome to Corelaw</span>
          </div>
          <div className="mb-[45px] text-center">
            <h1 className="text-[3.2rem] min-[576px]:text-[4rem] min-[992px]:text-[5rem] min-[992px]:leading-[1.3] leading-[1.2] text-white  font-title font-semibold">We Are Specialise In All <span className="text-cprimary">Criminal Law..</span></h1>
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-[35px]">

            <Button className="text-[16px] leading-[1.5] w-fit p-[12px_25px] rounded-none md:p-[15px_35px] h-fit text-white gap-[5px]">
              <Minus size={16}/>
              Practice Area
            </Button>
              <div className="flex items-center gap-[12px] text-white">
                  <PhoneCall size={36}/>
                    <div>
                      <span className="capitalize">call us now</span>
                      <h5 className="font-title text-[1.25rem] font-bold">+880 170 1111 000</h5>
                    </div>
              </div>
          </div>
        </Container>

        
       </section>
       <section>
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

       <section className="py-[90px] min-[992px]:py-[120px] relative">
        <Container className="min-[576px]:max-w-[540px] md:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="min-[992px]:flex min-[992px]:gap-[30px]">
            <div className="text-center min-[992px]:w-[50%] min-[992px]:text-start">
              <div className="mb-[60px]">
                  <div className="mb-[15px] mt-[-7px]">
                      <h2 className="capitalize font-title font-bold text-[3rem] leading-[1.2]">about corelaw</h2>
                  </div>
                  <p className="text-[16px] leading-[1.8] text-cctextColor2">
                      In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis.Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent nonatourean olei aptent taciti sociosqu ad litora torquent per.
                  </p>
              </div>
              <div>
                <h3 className="text-[1.875rem] font-bold text-cctextColor1 leading-[1.35] font-title">Get about our law firm and learn about our expertise.</h3>
                <div className="border border-[#20202012] mt-[32px] p-[20px] ">
                  <div className="mb-[1rem]">
                    <p className="text-[16px] leading-[1.8] text-cctextColor2 ">
                    In consequat tincidunt turpis sit amet imperdiet. Praesent Classei consequat tincidunt turpis sit amet imperdiet for mind.
                    </p>
                  </div>
                  <div className="h-[30px] mb-[16px] w-[130px] bg-purple-100 mx-auto" id="assinatura">
                  </div>
                  <div className="mb-[.5rem]">
                    <h6 className="text-cprimary text-[16px]">Simanto Rahman, CEO-Founder</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[490px]  min-[992px]:max-w-[510px] min-[992px]:w-[50%] ">
              <div className="relative  rounded-[240px] mb-[15px] ml-[40px] h-full max-[991px]:mt-[70px] before:rounded-[240px] before:absolute before:left-[-30px] before:top-[15px] before:bg-[#dea05733] before:w-full  before:max-w-[490px] before:h-full ">
                <Image src={'/about1-bg.png'} className="rounded-[240px] max-w-[470px]" layout="responsive" width={470} height={570} alt="about"/>
                <div className="absolute w-full max-w-[170px] text-center bg-cctextColor1  rounded-[50%] h-full max-h-[170px] min-[577px]:top-[-25px] min-[577px]:right-[-25px] flex flex-col items-center justify-center max-[576px]:top-[185px] max-[576px]:right-[10px] 
                before:absolute before:rounded-[50%] before:left-[-5px] before:top-[-5px]  before:bg-white before:border-cctextColor1 before:border-[2px] before:w-[106%] before:h-[106%] before:max-h-[190px] before:z-[-5]">
                  <div className="mb-[.5rem]">
                    <h2 className="text-cprimary font-title italic text-[3.125rem] font-medium">05 <span className="not-italic text-[18px] font-semibold text-white">Years</span></h2>
                  </div>
                  <p className="capitalize text-[13px] text-white leading-[1.5]">we have a lot of real experience</p>
                  <PersonStanding className="absolute top-[-10px] right-[-5px] bg-white rounded-full" size={60}/>
                </div>
              </div>
            </div>
          </div>
        </Container>
       </section>
    </main>
  );
}
