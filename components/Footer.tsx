import cx from 'classnames';
import React from 'react';

import { LINKS, scrollToSectionHandler } from '~/consts';


const LINK_STYLES = 'block text-white text-sm my-1 mx-2 font-light tracking-wider hover:text-cvSalmon md:mx-6';

export const Footer = () => {
  return <footer className='bg-cvDark'>
    <div className='container py-10 m-auto font-roboto text-center text-white'>
      <div className='flex justify-center m-auto mt-6 max-w-5xl font-lora md:flex-row md:mt-10'>
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
      <hr className='m-auto my-4 w-5/6 opacity-20'/>
    </div>
  </footer>;
};
