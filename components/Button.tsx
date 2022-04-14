import cx from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ children, className, onClick, ...restProps }) => {
  return (
    <button
      className={ cx('bg-cvDark py-4 px-8 text-white uppercase tracking-wider text-sm', className) }
      onClick={ onClick }
      { ...restProps }
    >
      {children}
    </button>
  );
};
