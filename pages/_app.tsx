import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PopularityContextWrapper from '../contexts/PopularityContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <PopularityContextWrapper>
    <Component {...pageProps} />
  </PopularityContextWrapper>
);

export default MyApp;
