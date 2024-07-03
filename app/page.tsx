import { Container } from "@/components/Container";
import { HeroContent } from "@/components/Contents/HeroContent";
import { Slider } from "@/components/Slider";
import { Button } from "@/components/ui/button";
import { PhoneCall, Minus, PersonStanding } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Card1Data from '@/data/Card1data.json'

import Image from "next/image";
import { Card1 } from "@/components/cards/Card1";
import { AboutSection } from "@/components/Sections/AboutSection/AboutSection";
import { AreasSection } from "@/components/Sections/AreasSection/AreasSection";
import { StatsSection } from "@/components/Sections/StatsSection/StatsSection";
import { FeaturesSection } from "@/components/Sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "@/components/Sections/HeroSection/HeroSection";
import { AdvogadosSection } from "@/components/Sections/AdvogadosSection/AdvogadosSection";



export default function Home() {
  return (
    <main className="">
       <HeroSection/>
      <StatsSection/>
      <AboutSection/>
      <AreasSection/>
    </main>
  );
}
