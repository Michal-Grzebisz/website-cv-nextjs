import cx from 'classnames';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  skipContainer?: boolean;
}

export const Section: React.FC<Props> = ({ className, skipContainer, children, ...restProps }) => {
  return <section
    className={ cx(
      className, !skipContainer && 'container px-4', 'm-auto my-10 lg:my-32'
    ) }
    { ...restProps }
  >{children}</section>;
};
