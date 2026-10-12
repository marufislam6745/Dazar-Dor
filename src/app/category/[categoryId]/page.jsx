
import SortBy from '@/app/Component/SortBy';
import React from 'react';

const Categorypage = async ({ params }) => {
    const { categoryId } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?category=${categoryId}`)
    const data = await res.json()

    const category = data[0]

    return (
        <div className='max-w-6xl mx-auto mb-10'>
            <div className='flex items-center justify-start gap-2 bg-gray-100 p-3 rounded-2xl my-5'>
                <h2 className='text-5xl'>{category.categoryIcon}</h2>
                <div>
                    <h2 className='text-xl font-bold'>{category.categoryNameBn}</h2>
                    <p className='text-sm text-gray-500'>{data.length}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            <div>
                <SortBy data={data}></SortBy>
            </div>

            {/* <p className='font-bold my-4'>মোট {data.length}টি পণ্য দেখানো হচ্ছে পণ্য</p>

            <div className='lg:grid grid-cols-3 gap-2'>
                {
                    data.map((value) => <div key={value.id} className='bg-gray-100 p-3 rounded-2xl mb-2 hover:border-2 border-green-700'>
                        <div className='flex items-center justify-start gap-2'>
                            <p className='bg-white py-1.5 px-3 rounded-xl text-2xl'>{value.image}</p>
                            <div>
                                <h4 className='font-bold'>{value.nameBn}</h4>
                                <p className='text-sm text-gray-500'>প্রতি কেজি</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-3'>
                            <div>
                                <p className='text-sm'>আজকের দাম</p>
                                <p className='font-bold'><span className='text-2xl'>{value.today}</span>  টাকা</p>
                            </div>
                            <p className={`${value.change.dir === 'up' ? 'bg-red-50' : 'bg-green-50'} ${value.change.dir === 'up' ? 'text-red-700' : 'text-green-700'} py-1 px-2 rounded-xl`}>{value.change.dir === 'up' ? '▲' : '▼'} {value.change.pct}</p>
                        </div>
                    </div>)
                }
            </div> */}
        </div>
    );
};

export default Categorypage;