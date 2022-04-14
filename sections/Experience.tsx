import React from 'react';

import { Headline } from '~/components/Headline';
import { Section } from '~/components/Section';
import { SectionID } from '~/consts';

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
      'creating interior, exterior and product visulizations', 
      '3d solid modeling',
      'verification of documentation received from clients',
      'paricipation in competition projects',
    ],
    company: 'The Digital Bunch'
  },
  
]

export const Experience = () => {
  return <Section id={ SectionID.Experience } skipContainer>
    <div className='px-4 grid gap-6 lg:gap-32 m-auto md:grid-cols-2 md:max-w-7xl pt-12'>
      <Headline
        title='WORK EXPERIENCE'
      />
      <div>
      {
        WorkExperience.map((work, idx) => (
          <div key={idx} className='mb-16 text-cvDark'>
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
      <div>
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
      <div>
      {
        Education.map((e, idx) => (
          <div key={idx} className='mb-8'>
            <p className='text-lg lg:text-xl font-bold opacity-80'>{e.school}</p>
            <p className='mt-1 opacity-70'>{e.level} / {e.years}</p>
          </div>
        ))
      }
      </div>
    </div>
  </Section>;
};
