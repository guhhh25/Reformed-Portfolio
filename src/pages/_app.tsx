import '../styles/globals.css'
import AOS from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
			delay: 400,
			duration: 800,
      once: true
		});
  }, []);

  
  return <Component {...pageProps} />
}

export default MyApp
