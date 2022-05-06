import { CacheProvider, EmotionCache, Global } from '@emotion/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import createEmotionCache from '../styles/createEmotionCache';
import { GlobalStyles } from '../styles/global';

type NextPageWithLayout<P = unknown> = NextPage<P> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
};

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Global styles={GlobalStyles} />
      {getLayout(<Component {...pageProps} />)}
    </CacheProvider>
  );
}

export default MyApp;
