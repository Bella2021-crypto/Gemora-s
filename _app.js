import '../styles/globals.scss';import Layout from '../components/Layout';import { useEffect } from 'react';
export default function App({ Component, pageProps }){
  useEffect(()=>{ if('serviceWorker' in navigator){ navigator.serviceWorker.register('/sw.js').catch(()=>{});} },[]);
  return <Component {...pageProps} />;
}
