import Link from 'next/link';
import React from 'react';

const page = async ({ params }) => {
    const { productId } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`)
    const data = await res.json()

    const market = data.markets

    const Min = Math.min(...market.map(value => value.min))
    const Max = Math.max(...market.map(value => value.max))

    const ave = market.map((value) => value.min + value.max / 2)
    const aveSum = ave.reduce((sum, value) => sum + value, 0)
    const Average=aveSum/ave.length




    return (
        <div className='max-w-6xl mx-auto mb-5'>
            <div className='flex items-center justify-start gap-2 text-sm text-gray-600 mt-5'>
                <Link href={'/'}>হোম</Link>
                <p>{`> ${data.categoryNameBn} >`}</p>
                <p>{data.nameBn}</p>
            </div>

            <div className='bg-gray-100 p-3 my-6 rounded-2xl flex items-center justify-between'>
                <div className='flex items-center justify-start'>
                    <p className='text-5xl'>{data.categoryIcon}</p>
                    <div>
                        <h2 className='font-bold text-xl'>{data.nameBn}</h2>
                        <p className='text-sm'>প্রতি কেজি - {data.categoryNameBn}</p>
                        <p className='text-sm'>গত কালকের তুলনায় আজ দাম বেড়েছে - {data.today - data.yesterday} টাকা </p>
                    </div>
                </div>
                <div className='bg-white p-3 rounded-2xl text-center'>
                    <p className='text-sm'>আজকের দাম</p>
                    <h2 className='text-2xl font-bold'>{data.today}</h2>
                    <p> টাকা/কেজি</p>
                    <p className={`${data.change.dir === 'up' ? 'bg-red-50' : 'bg-green-50'} ${data.change.dir === 'up' ? 'text-red-700' : 'text-green-700'} py-1 px-2 rounded-xl`}>{data.change.dir === 'up' ? '▲' : '▼'} {data.change.pct}</p>
                </div>
            </div>
            <div className='bg-gray-100 p-3 rounded-2xl'>
                <h3 className='font-bold my-2'>সারসংক্ষেপ দামের</h3>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='border border-gray-400 p-2 rounded-xl'>
                        <p className='text-sm'>সর্বনিম্ন দাম </p>
                        <p className='text-green-700'><span className='text-2xl font-bold'>{Min}</span> টাকা</p>
                        <p className='text-sm'>সবচেয়ে কম দামের বাজার</p>
                    </div>
                    <div className='border border-gray-400 p-2 rounded-xl'>
                        <p className='text-sm'>সর্বাধিক দাম</p>
                        <p className='text-red-700'><span className='text-2xl font-bold'>{Max}</span> টাকা</p>
                        <p className='text-sm'>সবচেয়ে বেশি দামের বাজার</p>
                    </div>
                    <div className='border border-gray-400 p-2 rounded-xl'>
                        <p className='text-sm'>গড় দাম</p>
                        <p className='text-green-700'><span className='text-2xl font-bold'>{Average}</span> টাকা</p>
                        <p className='text-sm'>প্রতি কেজি-এর হিসাব</p>
                    </div>
                </div>
                <h3 className='font-bold my-5'>বাজারভিত্তিক আজকের দাম</h3>

                <div className='border border-gray-400 rounded-2xl overflow-hidden'>
                    <table className=" w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-black bg-white text-black">
                                <th className="px-5 py-4 font-semibold">
                                    বাজার
                                </th>
                                <th className="px-5 py-4 font-semibold">
                                    বিভাগ
                                </th>
                                <th className="px-5 py-4 text-right font-semibold">
                                    সর্বনিম্ন
                                </th>
                                <th className="px-5 py-4 text-right font-semibold">
                                    সর্বাধিক
                                </th>
                                <th className="px-5 py-4 text-right font-semibold">
                                    গড়
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {market.map((item, index) => {
                                const average = (item.min + item.max) / 2;

                                return (
                                    <tr
                                        key={index}
                                        className="border-b border-black last:border-0 hover:bg-white transition-colors"
                                    >
                                        <td className="px-5 py-4 font-medium text-gray-800">
                                            {item.market}
                                        </td>

                                        <td className="px-5 py-4 text-gray-700">
                                            {item.division}
                                        </td>

                                        <td className="px-5 py-4 text-right text-gray-700">
                                            {item.min} টাকা
                                        </td>

                                        <td className="px-5 py-4 text-right text-gray-700">
                                            {item.max} টাকা
                                        </td>

                                        <td className="px-5 py-4 text-right font-semibold text-gray-800">
                                            {average} টাকা
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;