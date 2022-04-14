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
        I started my adventure with programming in the privacy of my home, using 
        information obtained on the Internet. It quickly turned out that programming gives me a lot of fun. 
        Thanks to the consistency in pursuing the goal I managed to finish the Front End Bootcamp while working as 
        a 3D graphic designer and planning a wedding. 
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
