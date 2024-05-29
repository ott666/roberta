import type { Metadata } from "next";
import { Exo, Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], weight:['400','500','600','700'], variable:'--font-title'});
const exo = Exo({ subsets: ['latin'], weight:["100","200",'300','400','500','600','700'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${exo.className}`}>{children}</body>
    </html>
  );
}
