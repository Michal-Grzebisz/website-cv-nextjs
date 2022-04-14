

import { Headline } from '~/components/Headline';
import { SectionID } from '~/consts';


export const Contact = () => {
  return <section className='flex relative flex-col items-center py-10 lg:py-32 bg-cvDark' id={ SectionID.Contact }>
    <div className='container z-10'>
      <Headline
        title='Contact Me'
        whiteTitle
      />
      <div className='flex flex-col mt-16 justify-center items-center px-4 m-auto max-w-3xl text-white'>
        <p className='text-xl lg:text-2xl'>Michał Grzebisz</p>
        <p className='mt-2 lg:text-xl lg:mt-4'>723-612-688</p>
        <p className='lg:text-xl mt-2'>mg.michbisz.mg@gmail.com</p>
      </div>
    </div>
  </section>;
};
