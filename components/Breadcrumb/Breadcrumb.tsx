// components/Breadcrumb.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Breadcrumb = () => {
  const pathname = usePathname();
  const img = pathname.split('/')[2];
  console.log(img);

  // Mapeamento das rotas para substituição
  const routeMap: { [key: string]: string } = {
    'atuacao': 'atuação',
    'saude': 'área da saúde',
    'direito-imobiliario': 'direito imobiliário',
    'area-criminal': 'área criminal',
    'direito-eleitoral': 'Direito Eleitoral',
    'solucoes-empresariais':"empresarial"
  };

  // Dividir a URL em partes
  const pathParts = pathname.split('/').filter((part) => part);

  // Não exibir o breadcrumb na página raiz
  if (pathParts.length === 0) {
    return null;
  }

  // Função para obter o título da rota
  const getTitle = (part: string): string => {
    return routeMap[part] || decodeURIComponent(part);
  };

  return (
    <nav aria-label="breadcrumb" className="flex flex-col items-center pt-8 justify-end text-primary h-[300px] md:h-[400px] lg:h-[500px] relative">
      <img src={`/breadcrumb/estatua.jpeg`} alt={img} className='fixed z-[-1] overflow-visible w-full h-full object-cover top-0 left-[300px] sm:left-[200px] min-[820px]:left-0 lg:top-[40px]' />
      <div className='absolute bg-black/60 inset-0'></div>
      <div className='absolute inset-0 flex items-center pt-12 justify-center'>
        <div className='w-fit flex flex-col items-center'>
          <Badge className='flex group  flex-wrap space-x-2 lg:text-2xl bg-black/80 justify-center font-poppins font-bold px-4 py-2 rounded-full'>
            <Link href="/" className='hover:text-cprimary'>
              Home
            </Link>
            {pathParts.map((part, index) => {
              // Construir a URL parcial até o ponto atual
              const href = '/' + pathParts.slice(0, index + 1).join('/');

              // O último elemento não deve ser um link
              const isLast = index === pathParts.length - 1;

              return (
                <span key={href} className="flex capitalize items-center">
                  <span className="mx-2">/</span>
                  {isLast ? (
                    <span className=" capitalize  text-cprimary">{getTitle(part)}</span>
                  ) : (
                    <Link href={href} className='hover:text-cprimary'>
                      {getTitle(part)}
                    </Link>
                  )}
                </span>
              );
            })}
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
