'use client'
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import Image from 'next/image';
import { Container } from '../Container';
import { LogoIcon } from '../LogoIcon';

const NavigationMenuDemo: React.FC = () => {
  return (
    
    
    <NavigationMenu.Root className="NavigationMenuRoot z-[10] py-2 bg-[#202020] text-white fixed top-0">
      <Container className='flex justify-end'>
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger text-cdark text-[18px] font-semibold hover:text-white tracking-wider">
            Início <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href='/'>
                    <div className='flex flex-col items-center gap-[10px]'>
                      <LogoIcon className='h-fit max-w-[150px]' />
                      <div>
                        <h1 className='text-center text-cprimary font-medium font-title tracking-tighter mb-0 leading-none'>Cavarzani & Murtha</h1>
                        <p className='text-center text-cprimary  font-medium font-title tracking-tighter text-[15px] leading-none'>Advogados Associados</p>
                      </div>
                    </div>
                    <p className="CalloutText text-[12px] leading-4 pt-[30px]">Não hesite em nos contatar, seja atendido hoje mesmo</p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <ListItem href="https://api.whatsapp.com/send/?phone=16992096845&textOla%21gostaria%21de%21mais%21informa%C3%A7%C3%B5es" title="Fale Conosco">
                Clique aqui para conversar com a gente no WhatsApp.
              </ListItem>
              <ListItem href="/atuacao" title="Áreas de atuação">
                Confira nossas especializações em diversos ramos do direito.
              </ListItem>
              <ListItem href="/" title="Página Inicial">
                Volte para a página inicial.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        


        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </Container>
    </NavigationMenu.Root>

  );
};

type ListItemProps = {
  className?: string;
  children: React.ReactNode;
  title: string;
  href: string;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
