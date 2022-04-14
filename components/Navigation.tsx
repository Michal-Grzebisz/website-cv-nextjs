import cx from 'classnames';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { LINKS, scrollToSectionHandler } from '~/consts';

import styles from './Navigation.module.css';
import Logo from '../public/monogram.svg'

const LINK_STYLES = 'block text-white font-semibold tracking-wider hover:text-cvSalmon font-light py-2';

export const Navigation = () => {
  const [ menu, setMenu ] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Any as there is no easy TS definition for this
  const trackMenu = useCallback((e: any) => {
    if (menu && menuRef.current?.contains(e.target) === false) {
      setMenu(false);
    }
  }, [ menu ]);

  useEffect(() => {
    document.addEventListener('touchstart', trackMenu);
    document.addEventListener('mousedown', trackMenu);

    return () => {
      document.removeEventListener('touchstart', trackMenu);
      document.removeEventListener('mousedown', trackMenu);
    };
  }, [ menu, trackMenu ]);

  return <>
    <nav className={ cx('fixed z-50 font-lora') } ref={ menuRef }>
      <div className='w-screen bg-cvDark'>
        <div className='container flex justify-between items-center p-4 m-auto bg-cvDark text-white'>
          <Link passHref href='/' >
            <Logo className='w-12 h-12 stroke-cvDark fill-white cursor-pointer'/>
          </Link>
          <div className='hidden gap-3 items-center lg:flex lg:gap-6'>
            {LINKS.map((l, idx) => (
              <a
                className={ cx(LINK_STYLES, 'uppercase') }
                href={ l.url }
                key={ idx }
                onClick={ (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  scrollToSectionHandler(l.section);
                } }
              >{l.name}</a>
            ))}
          </div>
          <div
            className={ cx(styles.menu, menu && styles.open, 'lg:hidden') }
            onClick={ () => setMenu(!menu) }
          ><span/><span/><span/><span/></div>
        </div>
      </div>

      <div
        className={ cx(
          'relative -z-10 lg:hidden gap-10 items-center bg-cvDark flex flex-col justify-center lg:gap-6 pb-10 pt-6',
          !menu && 'hidden'
        ) }
      >
        {LINKS.map((l, idx) => (
          <a
            className={ cx(LINK_STYLES, 'uppercase text-3xl text-center') }
            href={ l.url }
            key={ idx }
            onClick={ (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              setMenu(false);
              scrollToSectionHandler(l.section);
            } }
          >{l.name}</a>
        ))}
      </div>
    </nav>;
    <div
      className={ cx(
        'pointer-events-none fixed top-0 z-40 h-screen w-screen bg-black bg-opacity-40', !menu && 'bg-opacity-0'
      ) }
    />
  </>;
};
