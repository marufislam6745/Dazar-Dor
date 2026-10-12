import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div className='text-center my-25'>
            <Image className='bg-gray-100 p-2 rounded-xl mx-auto my-2' src={'/logo-icon.png'} alt='photo' width={50} height={80}></Image>
            <h1 className='text-green-700 text-4xl font-bold my-2'>404</h1>
            <h2 className='text-lg font-bold'>পণ্যটি পাওয়া যায়নি</h2>
            <p className='text-sm text-gray-500 my-4'>দুঃখিত, আপনি  যে পণ্যটি খুজছেন সেটি পাওয়া যায়নি</p>
            <Link href={'/'}><button className='bg-green-600 py-2 px-4 text-white rounded-xl'>হোম পেজে ফিরে যান</button></Link>
        </div>
    );
};

export default Notfound;