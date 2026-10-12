'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

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
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div onClick={() => setShow(!show)} tabIndex={0} role="button" className="btn m-1 cursor-pointer">
                            <p>{session?.user.name}</p>
                        </div>
                        {
                            show && (
                                <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
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