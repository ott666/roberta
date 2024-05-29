import { Container } from "@/components/Container"
import { Button } from "@/components/ui/button"
import { PersonStanding } from "lucide-react"

export default function Page(){
    return(
        <>
        <section>
            <Container className='min-[576px]:max-w-[540px] md:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]'>
                <div className="grid  min-[992px]:grid-cols-2 min-[992px]:place-content-between">
                    <div className="min-[992px]:px-[10px]">
                        <h2 className="capitalize font-title font-bold text-[3rem] leading-[1.2] mb-[15px]">About Corelaw</h2>
                        <p className="text-[16px] leading-[1.8] text-cctextColor2 pb-[60px]">
                            In consequat tincidunt turpis sit amet imperdiet. Praesent Class officelan nonatoureanor mauris laoreet, iaculis libero quis.Curabitur et tempus eri consequat tincidunt turpis sit amet imperdiet. Praesent nonatourean olei aptent taciti sociosqu ad litora torquent per.
                        </p>

                        <h3 className="pb-[32px] text-[1.875rem] font-bold text-cctextColor1 leading-[1.35] font-title">Get about our law firm and learn about our expertise.</h3>
                        <div className="p-[20px] border-black/10 border">
                            <p className="text-[16px] mb-[15px] leading-[1.8] text-cctextColor2 ">
                            In consequat tincidunt turpis sit amet imperdiet. Praesent Classei consequat tincidunt turpis sit amet imperdiet for mind.
                            </p>
                            <div className="w-12 mb-[15px] h-5 bg-black"></div>
                            <p className="mb-[7px] block">Simanto Rahman, CEO-Founder</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center min-[992px]:px-[10px] min-[992px]:justify-end">
                        <div className=" rounded-[240px] max-[991px]:mt-[70px] max-w-[530px] ml-[40px] before:z-[-1]  relative before:top-[15px] before:h-full before:rounded-[240px] before:absolute before:w-full before:right-[15px] before:bg-red-500 mb-[15px] bg-black">
                        <img src="/about1-bg.png" className="rounded-[240px]" alt="lala" />
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
        <section>
            <Container>
                <div className="grid">
                    <div className="group ">
                        <div className="p-[30px] transition-all duration-300 ease-out group-hover:bg-cprimary  font-title rounded-t-[10px] bg-cprimary/20">
                           <div className="flex justify-between items-center">
                                <PersonStanding size={38}/>
                                <Button className="text-[14px] border-[#202020] border text-[#202020] outline-none bg-inherit  rounded-[25px] font-bold capitalize ">completed case (12)</Button>
                           </div>
                            <span className="capitalize   text-cctextColor1  text-[1.5rem] font-bold">business law</span>
                        </div>
                        <div className="p-[30px] transition-all duration-300 ease-out group-hover:bg-[#202020] bg-[#20202026] ">
                            <p className="leading-[1.8] text-cdark2 text-[16px] group-hover:text-white">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class officelan gola nonatoureanor mauris.</p>
                        </div>

                    </div>
                    <div className="group ">
                        <div className="p-[30px] transition-all duration-300 ease-out group-hover:bg-cprimary  font-title rounded-t-[10px] bg-cprimary/20">
                            <span className="capitalize   text-cctextColor1  text-[1.5rem] font-bold">business law</span>
                        </div>
                        <div className="p-[30px] transition-all duration-300 ease-out group-hover:bg-stone-600 bg-[#20202026] ">
                            <p className="leading-[1.8] text-[16px] group-hover:text-white">In consequat tincidunt turpis sit ametoi imperdiet. Praesent Class officelan gola nonatoureanor mauris.</p>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
        </>
    
    )
}