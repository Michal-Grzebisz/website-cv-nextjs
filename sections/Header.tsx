import cx from 'classnames';
import React, { useRef } from 'react';
import Particles from "react-tsparticles";

import { Headline } from '~/components/Headline';
import { SectionID } from '~/consts';

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  const ref = useRef()

  return <section
    className={ cx(
      'h-screen uppercase text-white flex items-center justify-center flex-col overflow-hidden relative bg-cvDark',
      className
    ) }
    id={ SectionID.Header }
    >
     <div className='z-10 text-center font-lora'>
       <p className='text-2xl lg:text-7xl'>Front-End Developer</p>
       <p className='text-lg mt-2 lg:text-3xl lg:mt-6 opacity-90'>Michał Grzebisz</p>
    </div>
    <div className='absolute'>
    <Particles
      id="tsparticles"
      width='800px'
      height='400px'
      options={{
        fpsLimit: 120,
        fullScreen: {enable:false},
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 1,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#ed6c64",
          },
          links: {
            color: "#ed6c64",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
    </div>

  </section>;
};
