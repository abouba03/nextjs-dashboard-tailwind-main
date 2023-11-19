import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function App({ Component, pageProps }) {
  return (
    <div className='relative'>
      <Image className="absolute top-1 right-5" src={logo} width={100} height={95}/>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </div>
  );
}
