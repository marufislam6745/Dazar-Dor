
import Image from 'next/image';
import React from 'react';


const Banner = () => {
    const currentdate = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full'
    })

    return (
        <div className='max-w-6xl mx-auto my-5 bg-gray-100 rounded-2xl'>
            <div className='text-center lg:text-left lg:flex items-center justify-between p-8'>
                <div className=''>
                    <p className='text-sm inline text-green-700 py-2 px-3 bg-gray-200 rounded-lg'>{currentdate}</p>
                    <h2 className='text-3xl font-bold my-5'>আজকের বাজারের দাম এক নজরে</h2>
                    <pre className='text-sm text-gray-500'>চাল,ডাল,তেল,সবজি,মাছ,মাংস,ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,গড়,<br />
                        সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়
                    </pre>
                    <button className='bg-green-600 py-2 px-4 text-white rounded-xl mt-4'>সব পণ্য দেখুন</button>
                </div>
                <div>
                    <Image className='mx-auto' src={"/bazar-hero.png"} alt='photo' width={300} height={300}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;