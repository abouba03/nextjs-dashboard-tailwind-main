import React from 'react';
import Image from 'next/image.js';
import first from "../public/first.jpg";
import second from "../public/second.jpg";
import Inflation from '@/components/Inflation.jsx';

const customers = () => {
  return (
    <>
      <div>
        <h2 className='text-center text-2xl font-bold mt-10'>
        Коэффициент инфляции дисперсии
        </h2>
        <div className='mx-5'><Inflation/></div>
        <div className='flex flex-row'></div>
        <Image src={first} width={700} height={500}/>
        <Image src={second} width={700} height={500}/>
      </div>
    </>
  );
};

export default customers;
