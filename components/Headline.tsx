import cx from 'classnames';
import React from 'react';


interface Props {
  title: string;
  whiteSubtitle?: boolean;
  whiteTitle?: boolean;
}

export const Headline = ({title, whiteSubtitle, whiteTitle }: Props) => {
  return <div className='flex flex-col justify-center items-center mb-8 font-lora tracking-widest text-center uppercase'>
    <h2
      className={ cx('text-3xl lg:text-4xl m-auto leading-relaxed px-2', whiteTitle ? 'text-white' : 'text-cvSalmon') }
      style={ { maxWidth: 600 } }
    >- {title} -</h2>
  </div>;
};
