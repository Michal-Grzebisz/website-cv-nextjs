import React from 'react';

import { Headline } from '~/components/Headline';
import { Section } from '~/components/Section';
import { SectionID } from '~/consts';
import ReactImage from '../public/technology-staff/react.png'
import ReactQueryImage from '../public/technology-staff/react-query.jpeg'
import AntdImage from '../public/technology-staff/antd.png'
import CssImage from '../public/technology-staff/css.png'
import SassImage from '../public/technology-staff/sass.png'
import TailwindImage from '../public/technology-staff/tailwind.png'
import NextJsImage from '../public/technology-staff/nextjs.png'
import HtmlImage from '../public/technology-staff/html.png'
import JsImage from '../public/technology-staff/js.png'
import Image from 'next/image';

interface Education {
  years: string,
  school: string,
  level?: string,
}

interface Course {
  years: string,
  course: string,
}

interface WorkExperience {
  years: string,
  role: string,
  tasks: string[],
  company: string
}

const Education: Education[] = [
  {
    years: 'Oct 2017 - Jul 2019',
    school: 'Warsaw University of Life Sciences',
    level: 'Second degree engineering studies, Spatial Management',
  },
  {
    years: 'Oct 2013 - Jul 2017',
    school: 'Warsaw University of Life Sciences',
    level: 'First degree engineering studies, Spatial Management',
  },
  {
    years: 'Sept 2009 - May 2012',
    school: 'High school of general education of Queen Jadwiga in Warsaw',
  },
] 

const Course: Course[] = [
  {
    years: 'Sept 2020 - Mar 2021',
    course: 'Frontend Programming course at Coders Lab'
  },
  {
    years: 'Nov 2016',
    course: 'Autodesk Course 3DS MAX Grade 2'
  },
  {
    years: 'Mar 2016',
    course: 'Autodesk Course 3DS MAX Grade 1'
  },
]

const WorkExperience: WorkExperience[] = [
  {
    years: 'Jan 2022 - present',
    role: 'Front End Developer',
    tasks: [
      'creating interior, exterior and product visulizations', 
      '3d solid modeling',
      'verification of documentation received from clients',
      'paricipation in competition projects',
    ],
    company: 'The Digital Bunch'
  },
  {
    years: 'Jun 2019 - Dec 2021',
    role: 'Graphic 3d',
    tasks: [
      'creating websites in React and Next JS',
      'use Talwindcss library',
      'use Ant Design library',
      'use React Query data-fetching library',
    ],
    company: 'The Digital Bunch'
  },
]

const TechnologyStaff = [
  {
    image: HtmlImage
  },
  {
    image: CssImage
  },
  {
    image: SassImage
  },
  {
    image: JsImage
  },
  {
    image: ReactImage
  },
  {
    image: NextJsImage
  },
  {
    image: ReactQueryImage
  },
  {
    image: AntdImage
  },
  {
    image: TailwindImage
  },
]

export const Experience = () => {
  return <Section id={ SectionID.Experience } skipContainer>
    <div className='px-4 grid gap-6 lg:gap-20 m-auto md:grid-cols-2 md:max-w-7xl pt-12'>
      <Headline
        title='WORK EXPERIENCE'
      />
      <div className='bg-gray-50 p-12'>
      {
        WorkExperience.map((work, idx) => (
          <div key={idx} className='mb-16 text-cvDark '>
            <p className='text-xl lg:text-xl font-bold opacity-80'>{work.role}</p>
            <p className='mt-1 lg:text-lg opacity-70'>{work.company} / {work.years}</p>
            <ul className='mt-6'>
              {
                work.tasks.map((task,idx) => <li key={idx} className='opacity-70'>- {task}</li>)
              }
            </ul>
          </div>
        ))
      }
      </div>
      <Headline
        title='COURSE'
      />
      <div className='bg-gray-50 p-12'>
      {
        Course.map((course, idx) => (
          <div key={idx} className='mb-8'>
            <p className='text-lg lg:text-xl opacity-80 font-bold'>{course.course}</p>
            <p className='mt-1 opacity-70'>{course.years}</p>
          </div>
        ))
      }
      </div>
      <Headline
        title='EDUCATION'
      />
      <div className='bg-gray-50 p-12'>
      {
        Education.map((e, idx) => (
          <div key={idx} className='mb-8'>
            <p className='text-lg lg:text-xl font-bold opacity-80'>{e.school}</p>
            <p className='mt-1 opacity-70'>{e.level} / {e.years}</p>
          </div>
        ))
      }
      </div>
      <Headline
        title='TECH STACK'
      />
      <div className='grid grid-cols-4 gap-6'>
      {
        TechnologyStaff.map((t, idx) => (
          <div key={idx}
            className='relative h-36 flex-1'
          >
            <Image
              layout='fill'
              objectFit='contain'
              placeholder='blur'
              quality={ 80 }
              src={ t.image}
            />
          </div>
        ))
      }
      </div>
    </div>
  </Section>;
};
