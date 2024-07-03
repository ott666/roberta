import Link from "next/link";
import { LogoIcon } from "./LogoIcon";
import { Container } from "./Container";

export const Footer = () => {
  const navigationItems = [

    {
      title: "Áreas de atuação",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Direito Eleitoral",
          href: "/atuacao/direito-eleitoral",
        },
        {
          title: "Direito Civil",
          href: "/atuacao/direito-civil",
        },
        {
          title: "Área da Saúde",
          href: "/atuacao/saude",
        },
        {
          title: "Area Criminal",
          href: "/atuacao/area-criminal",
        },
        {
          title: "Direito Imobiliário",
          href: "/atuacao/direito-imobiliario",
        },
        {
          title: "Soluções Empresariais",
          href: "/atuacao/solucoes-empresariais",
        },
      ],
    },
    
  ];

  return (
    <section className="bg-[#202020] py-10">
      <Container className="sm:max-w-none">

        <div className="flex flex-col min-[992px]:flex-row min-[992px]:justify-between min-[992px]:items-start gap-[20px]">

          <div className="flex flex-col sm:flex-row gap-[20px] xl:gap-[50px]">
            <div className="flex w-fit mx-auto sm:mx-0 flex-col  items-center">
                    <LogoIcon className="max-w-[300px] sm:max-w-[200px] mb-[10px]"/>
                    <h4 className="text-cprimary text-center font-medium text-[32px] sm:text-[28px] min-[360px]:text-[35px] mb-0 leading-none font-title">Cavarzani & Murtha</h4>
                    <p className="text-cprimary text-center font-medium text-[26px] sm:text-[24px] min-[360px]:text-[30px] leading-none font-title">Advogados Associados</p>
            </div>
            <div className="flex justify-around sm:items-end min-[992px]:items-start sm:gap-[30px]">

              <div className="flex flex-col gap-2">
                <p className="text-white text-xl block">Endereço</p>
                <p className="text-white/70 text-md block">Felipe Achê, 544</p>
                <p className="text-white/70 text-md block">Jardim São Luíz</p>
                <p className="text-white/70 text-md block">Ribeirão Preto - SP</p>
                <p className="text-white/70 text-md block">CEP: 14020-420</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-xl block">Contato</p>
                <p className="text-white/70 text-md block">rcavarzani@gmail.com</p>
                <p className="text-white/70 text-md block">rcavarzani@gmail.com</p>
                <p className="text-white/70 text-md block">(16) 99799-8799</p>
                <p className="text-white/70 text-md block">(16) 99799-8799</p>
              </div>
            </div>
          </div>
          <div className="flex  mx-auto sm:mx-0 flex-col w-fit gap-4">
              <p className="text-white text-center text-xl block">Areas de atuação</p>
              <div className="flex gap-[50px]">
                <div className="flex flex-col gap-2">
                  <Link href='/atuacao/direito-eleitoral' className="text-white/70 text-md block hover:text-cprimary">Direito Eleitoral</Link>
                  <Link href='/atuacao/area-criminal' className="text-white/70 text-md block hover:text-cprimary">Área Criminal</Link>
                  <Link href='/atuacao/saude' className="text-white/70 text-md block hover:text-cprimary">Área da Saúde</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href='/atuacao/imobiliaria' className="text-white/70 text-md block hover:text-cprimary">Direito Imobiliário</Link>
                  <Link href='/atuacao/solucoes-empresariais' className="text-white/70 text-md block hover:text-cprimary">Soluções Empresariais</Link>
                  <Link href='/atuacao/direito-civil' className="text-white/70 text-md block hover:text-cprimary">Direito Civil</Link>
                </div>
              </div>
          </div>
        </div>
      </Container>
    </section>
  );
};