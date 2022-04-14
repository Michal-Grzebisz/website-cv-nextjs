import cx from 'classnames';
import disableScroll from 'disable-scroll';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Headline } from '~/components/Headline';
import { Section } from '~/components/Section';
import { SectionID } from '~/consts';
import GpGallery1 from '~/public/gallery-graphic/gallery-1.jpeg';
import GpGallery2 from '~/public/gallery-graphic/gallery-2.jpeg';
import GpGallery3 from '~/public/gallery-graphic/gallery-3.jpeg';
import GpGallery4 from '~/public/gallery-graphic/gallery-4.jpeg';
import GpGallery5 from '~/public/gallery-graphic/gallery-5.jpeg';
import GpGallery6 from '~/public/gallery-graphic/gallery-6.jpeg';
import GpGallery7 from '~/public/gallery-graphic/gallery-7.jpeg';
import GpGallery8 from '~/public/gallery-graphic/gallery-8.jpeg';
import FeGallery2 from '~/public/gallery-front-end/gallery-1.png';
import FeGallery1 from '~/public/gallery-front-end/gallery-2.png';
import FeGallery3 from '~/public/gallery-front-end/gallery-3.png';



import styles from './Gallery.module.css';

export interface FRONT_END_IMAGES {
  image: StaticImageData;
  url: string
}

const GRAPHIC_IMAGES = [
  GpGallery1,
  GpGallery2,
  GpGallery3,
  GpGallery4,
  GpGallery5,
  GpGallery6,
  GpGallery7,
  GpGallery8,
];

const FRONT_END_IMAGES: FRONT_END_IMAGES[] = [
  { image: FeGallery1, url: 'https://green-park.pl/' },
  { image: FeGallery2, url: 'https://www.thedigitalbunch.com/', },
  { image: FeGallery3, url: 'https://michal-grzebisz.github.io/good_hands/' },
];

export const Work = () => {
  const [ on, setOn ] = useState(false);
  const [ activePhotoIdx, setActivePhotoIdx ] = useState<number>(0);

  const nextPhotoIndex = useMemo(() => {
    const nextIndex = (activePhotoIdx || 0) + 1;

    return nextIndex >= GRAPHIC_IMAGES.length ? 0 : nextIndex;
  }, [ activePhotoIdx ]);

  const prevPhotoIndex = useMemo(() => {
    const prevIndex = (activePhotoIdx || 0) - 1;

    return prevIndex < 0 ? GRAPHIC_IMAGES.length - 1 : prevIndex;
  }, [ activePhotoIdx ]);

  const handleNext = useCallback(() => {
    setActivePhotoIdx(nextPhotoIndex);
  }, [ nextPhotoIndex ]);

  const handlePrev = useCallback(() => {
    setActivePhotoIdx(prevPhotoIndex);
  }, [ prevPhotoIndex ]);

  return <Section
    id={ SectionID.Work }
  >
    <Headline
      title='Work'
    />
    <p className='text-3xl text-cvSalmon ml-8 my-4 font-lora mt-20'>- Front End Projects</p>
    <div className='grid relative gap-2 md:flex-row lg:grid-cols-2 xl:grid-cols-4 xl:gap-2 mt-12'>
      {FRONT_END_IMAGES.map((image, idx) => (
        <div
          className={ cx('relative h-96 flex-1', styles.image) }
          key={ idx }
        >
          <a href={image.url} target="_blank" rel="noreferrer" >
          <Image
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={ 80 }
            src={ image.image }
          />
          <div className='bg-cvDark absolute w-full h-full opacity-5'/>
          </a>
        </div>
      ))}
    </div>

    <p className='text-3xl text-cvSalmon ml-8 my-4 font-lora mt-40'>- Graphic Projects</p>
    <div className='grid relative gap-2 md:flex-row lg:grid-cols-2 xl:grid-cols-4 xl:gap-2 mt-12'>
      {GRAPHIC_IMAGES.map((image, idx) => (
        <div
          className={ cx('relative h-96 flex-1', styles.image) }
          key={ idx }
        >
          <Image
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            quality={ 80 }
            src={ image }
            onClick={ () => {
              setOn(!on);
              setActivePhotoIdx(idx);
              disableScroll.on();
            } }
          />
          <div className={ cx('text-white text-sm text-center absolute bottom-0 left-0 w-full p-2 bg-cvDark bg-opacity-40 tracking-wider', styles.disclaimer) }>
          Click to zoom
          </div>
        </div>
      ))}
    </div>
    {on && (
        <Lightbox
          imagePadding={ 80 }
          mainSrc={ GRAPHIC_IMAGES[activePhotoIdx].src }
          nextSrc={ GRAPHIC_IMAGES[nextPhotoIndex].src }
          prevSrc={ GRAPHIC_IMAGES[prevPhotoIndex].src }
          onCloseRequest={ () => {
            setOn(false);
            disableScroll.off();
          } }
          onMoveNextRequest={ handleNext }
          onMovePrevRequest={ handlePrev }
        />
    )}
  </Section>;
};
