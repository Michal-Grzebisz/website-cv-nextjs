import cx from 'classnames';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [ isVisible, setIsVisible ] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', debounce(toggleVisibility, 200));

    return () => window.removeEventListener('scroll', debounce(toggleVisibility, 200) );
  }, []);

  const classes = cx(
    'fixed px-4 lg:px-5 pt-4 lg:pt-5 pb-3 lg:pb-4 z-30 bg-cvSalmon bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer transition-all',
    isVisible && 'opacity-100 scale-100',
    !isVisible && 'opacity-0 scale-50'
  );

  return (
    <div
      className={ classes }
      onClick={ scrollToTop }
    >
      <div className='p-1 border-t-2 border-l-2 rotate-45'></div>
    </div>
  );
};
