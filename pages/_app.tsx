import { ThemeProvider } from '../ThemeContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
 {
  return <Component {...pageProps} />
}

export default MyApp;
