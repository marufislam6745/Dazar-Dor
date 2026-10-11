'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const SortBy = ({ data }) => {

    const [sortby, setSortby] = useState('')
    const sortData = (data) => {
        const sortedData = [...data]

        if (sortby === "কম থেকে বেশি") {
            sortedData.sort((a, b) => a.today - b.today)
        }
        else if (sortby === " বেশি থেকে কম") {
            sortedData.sort((a, b) => b.today - a.today)
        }
        return sortedData
    }
    const sortProduct = sortData(data)

    return (
        <div>

            <div className='bg-gray-100 p-3 rounded-xl flex items-center justify-end gap-4'>
                <p>সাজান</p>
                <select
                    value={sortby}
                    onChange={(e) => setSortby(e.target.value)}
                    className="p-2 rounded-xl border-2 border-black"
                >

                    <option disabled value="">ডিফল্ট</option>
                    <option value="কম থেকে বেশি">কম থেকে বেশি</option>
                    <option value=" বেশি থেকে কম"> বেশি থেকে কম</option>
                </select>
            </div>
            <p className='font-bold my-4'>মোট {data.length}টি পণ্য দেখানো হচ্ছে পণ্য</p>

            <div className='lg:grid grid-cols-3 gap-2'>
                {
                    sortProduct.map((value) => <Link href={`/product/${value.id}`} key={value.id}>
                        <div className='bg-gray-100 p-3 rounded-2xl mb-2 hover:border-2 border-green-700'>
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
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default SortBy;