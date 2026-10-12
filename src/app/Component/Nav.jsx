
import Image from 'next/image';
import React from 'react';
import Userinfo from './Userinfo';
import Marquee from './Marquee';
import Link from 'next/link';

const Nav = async () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { cache: 'force-cache' })
    if(!res.ok){
        throw new Error(`HTTP error! status:${res.status}`)
    }
    const data = await res.json()

    return (
        <div>
            <div className="w-full max-w-300 mx-auto px-4 sm:px-6 skeleton">

                {/* Top Header */}
                <div className="border-b border-gray-200 py-4">

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                        {/* Logo + Title */}
                        <div className="flex items-center gap-2 sm:gap-2">
                            <Image
                                src="/logo-icon.png"
                                alt="logo"
                                width={50}
                                height={80}
                                className=" p-2 rounded-xl "
                            />

                            <div>
                                <h2 className="text-black text-xl sm:text-1xl md:text-2xl font-bold leading-tight">
                                    বাজার দর
                                </h2>
                                <h3 className="text-sm sm:text-sm text-gray-500">
                                    {date}
                                </h3>
                            </div>
                        </div>

                        {/* Authentication Buttons */}
                        <div>
                            <Userinfo></Userinfo>
                        </div>
                    </div>
                </div>


                {/* Navigation */}
                <div className='flex justify-center items-center gap-2 text-sm my-2'>
                    {
                        data.map((value, i) => <Link className='hover:bg-green-100 py-1 px-2 rounded-lg' key={i} href={`/category/${value.id}`}>{value.icon} {value.nameBn}</Link>)
                    }
                </div>
            </div>
            <Marquee></Marquee>
        </div>
    );
};

export default Nav;