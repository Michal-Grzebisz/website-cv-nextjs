import type { NextPage } from 'next';
import React from 'react';

import { Footer } from '~/components/Footer';
import { Navigation } from '~/components/Navigation';
import { ScrollToTop } from '~/components/ScrollToTop';
import { About } from '~/sections/About';
import { Contact } from '~/sections/Contact';
import { Experience } from '~/sections/Experience';
import { Work } from '~/sections/Work';
import { Header } from '~/sections/Header';

const Index: NextPage = () => {
  return (
    <main>
      <Navigation/>
      <Header className='pt-14'/>
      <ScrollToTop />
      <About/>
      <Experience />
      <Work/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default Index;
