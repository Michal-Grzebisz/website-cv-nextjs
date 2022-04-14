import '../styles/globals.css';
import 'react-image-lightbox/style.css';
import 'rc-slider/assets/index.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect } from 'react';

import { GA_TRACKING_ID } from '~/consts';

import OgImage from '../public/og-cover-front-end.png';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteChange = (url: string) => {
    if (GA_TRACKING_ID) {
      // @ts-ignore
      window.gtag('config', GA_TRACKING_ID, { page_path: url });
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ router.events ]);

  return (
    <>
      <Head>
        <title>Front-End Developer - Michał Grzebisz</title>
        <meta charSet='utf-8' />
        <meta
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
          name='viewport'
        />
        <meta content='Front-End Developer - Michał Grzebisz' property='og:title' />
        <meta content={ OgImage.src } property='og:image' />
        <meta content='Front-End Developer - Michał Grzebisz' property='og:description' />
        <link
          href='/apple-touch-icon.png?v=JFGR324re45'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicon-32x32.png?v=JFGR324re45'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicon-16x16.png?v=JFGR324re45'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link
          href='/site.webmanifest?v=JFGR324re45'
          rel='manifest'
        />
        <link
          color='#29c4f0'
          href='/safari-pinned-tab.svg?v=JFGR324re45'
          rel='mask-icon'
        />
        <link
          href='/favicon.ico?v=JFGR324re45'
          rel='shortcut icon'
        />
        <meta
          content='Front-End Developer - Michał Grzebisz'
          name='apple-mobile-web-app-title'
        />
        <meta
          content='Front-End Developer - Michał Grzebisz'
          name='application-name'
        />
        <meta
          content='#da532c'
          name='msapplication-TileColor'
        />
        <meta
          content='#ffffff'
          name='theme-color'
        />
        <link
          href='/favicon.ico'
          rel='shortcut icon'
        />

        {GA_TRACKING_ID ? (
          <>
            <Script
              async
              id='google-analytics'
              src={ `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}` }
            />

            <Script
              dangerouslySetInnerHTML={ {
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
              `,
              } }
              id='google-analytics-init'
            />
          </>
        ) : null}
      </Head>
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
