
import "bootstrap/dist/css/bootstrap.css"
import '@/styles/globals.css'

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      require("bootstrap/dist/js/bootstrap");
    }
  }, [router.events]);

  return <Component {...pageProps} />;
}
