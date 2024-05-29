import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { HeroContent } from "./Contents/HeroContent"

export const Slider = () =>{
    return(
        <Carousel className="h-full">
            <CarouselContent>
                <CarouselItem className="h-screen"><HeroContent title="The Legal Advice Need Phone Call Away" text=' Lorem Ipsum generators on the Internet tend to predefined chunks as necessary making.' subtitle="aaa"/></CarouselItem>
                <CarouselItem className="">2</CarouselItem>
                <CarouselItem className="">3</CarouselItem>
            </CarouselContent>
           
        </Carousel>
    )
}