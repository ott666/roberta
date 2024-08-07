import type { Metadata } from "next";
import { Exo, Lora, Playfair_Display, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import NavigationMenuDemo from "@/components/navbar2/Navbar";
import { Footer } from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { WhatsappButton } from "@/components/WhatsappButton";

const lora = Lora({ subsets: ["latin"], weight:['400','500','600','700'], variable:'--font-title'});
const exo = Exo({ subsets: ['latin'], weight:["100","200",'300','400','500','600','700'] })
const playfair = Playfair_Display({subsets:['latin'], weight:['400', '700'], variable:'--font-playfair'})
export const metadata: Metadata = {
  title: "Cavarzani & Murtha Advogados",
  description: "Advocacia e Assessoria Jurídica em Ribeirão Preto - SP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${lora.variable} antialiased ${exo.className} ${playfair.variable}`}>
        <NavigationMenuDemo/>
        <Breadcrumb/>
        {children}
        <Footer/>
        <WhatsappButton/>
      </body>
    
    </html>
  );
}
