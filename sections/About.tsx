import Image from 'next/image';
import React from 'react';

import { Headline } from '~/components/Headline';
import { Section } from '~/components/Section';
import { SectionID } from '~/consts';
import CvPhoto from '../public/cv-photo.jpg'


export const About = () => {
  return <Section id={ SectionID.About }>
    <Headline
      title='About me'
    />
    <div className='grid gap-8 lg:gap-32 m-auto md:grid-cols-2 md:max-w-7xl mt-20 pb-12'>
      <div>
      <p className='lg:text-lg text- leading-8'>
        Hi, my name is  Michal, I am currently working as an 3d graphic designer 
        in one of the Warsaw companies. 
      </p>
      <p className='lg:text-lg text- leading-8 mt-6'>
        Although my current job gives me a lot of fun, 
        I owe my success in this industry by self-denial and consistency in pursuing my goals. 
        I try to constantly develop, broaden my horizons and keep up with the times. Therefore, 
        I have decided to change my direction a bit and learn new skills in another industry, my choice was programming. 
      </p>
      <p className='lg:text-lg text- leading-8 mt-6 mb-8'>
        If you would ask someone around my group of friends “why programming?” most of them would say that "he constantly 
        keeps thinking and scheming, sometimes I wonder if he is tired of it". Yes, I have a creative mind, 
        I love to think and look for ways to solve various problems, but I am not tired of it, it just gives 
        me pleasure. Thanks to the experience gained, I can process in a team, think outside the box and 
        effectively manage my time.
      </p>
      <a
          download className='py-1.5 px-2 mr-2 text-sm text-white bg-cvSalmon rounded-md'
          href='/cv-file.pdf'
        >Download CV</a>
      </div>
      <div className='relative' style={{height: 600}}>
      <Image src={CvPhoto.src} objectFit='contain' layout='fill' sizes='40vw'/>
      </div>
    </div>
  </Section>;
};
