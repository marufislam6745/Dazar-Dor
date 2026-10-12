'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FcNightPortrait } from "react-icons/fc";


const Userinfo = () => {
    const [show, setShow] = useState(false)
    const { data: session } = authClient.useSession()
    //console.log(session)
    const handleSignOut = async () => {
        await authClient.signOut()
    }

    return (
        <div>
            {
                session?.user ?
                    <div className="dropdown dropdown-bottom">
                        <div onClick={() => setShow(!show)} tabIndex={0} role="button" className="btn m-1 cursor-pointer">
                            <p>{session?.user.name}</p>
                        </div>
                        {
                            show && (
                                <ul tabIndex={-1} className="absolute right-30 mt-2 z-1 dropdown-content menu bg-white rounded-lg w-50 p-3 shadow-lg">
                                    <li className='font-bold'>{session?.user.name}</li>
                                    <li className='text-xs text-gray-500'>{session?.user.email}</li>
                                    <li className='text-sm my-2 flex items-center gap-1'><FcNightPortrait /> আমার প্রোফাইল</li>
                                    <li><button onClick={handleSignOut} className='text-red-700 text-sm border border-red-700 py-1 px-3 rounded-lg'>সাইন আউট</button></li>
                                </ul>
                            )
                        }
                    </div> :
                    // <div>
                    //     <button onClick={handleSignOut} className='text-red-700 border border-red-700 py-1 px-3 rounded-xl'>সাইন আউট</button>
                    // </div> 
                    <div>
                        <Link href={'../signin'}>
                            <button
                                className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-green-800 transition"
                            >
                                সাইন ইন
                            </button>
                        </Link>
                        <Link href={'../signup'}>
                            <button
                                className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition duration-200"
                            >
                                সাইন আপ
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default Userinfo;