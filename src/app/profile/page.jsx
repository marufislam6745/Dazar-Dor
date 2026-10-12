'use client'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Profilepage = () => {

    const { data: session } = authClient.useSession()

    const handleUpdateprofile = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())
        //console.log(userData)

        await authClient.updateUser({
            ...user
        })
    }

    const handleSignOut = async () => {
        await authClient.signOut()
        toast.success('সাইন আউট সম্পূর্ণ হয়েছে')
        redirect('/')
    }

    return (
        <div className='max-w-2xl mx-auto my-10'>
            <h2 className='font-bold text-lg'>আমার প্রোফাইল</h2>
            <p className='text-gray-500'>আপনার একাউন্টের তথ্য এখানে দেখুন</p>
            <div className='flex items-center justify-between bg-gray-100 p-3 rounded-2xl'>
                <div>
                    <h3 className='font-bold'>{session?.user.name}</h3>
                    <p className='text-sm text-gray-500'>{session?.user.email}</p>
                </div>
                <div>
                    <button onClick={handleSignOut} className='text-red-700 text-sm border border-red-700 py-1 px-3 rounded-lg'>সাইন আউট</button>
                </div>
            </div>
            <div className='bg-gray-100 p-3 rounded-2xl mt-5'>
                <h2 className='font-bold text-lg mb-2'>তথ্য</h2>
                <form onSubmit={handleUpdateprofile} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-base font-medium text-[#202b23]"
                        >
                            নাম
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder=" আপনার নাম"
                            autoComplete="name"
                            required
                            className="h-12.5 w-full rounded-[11px] border border-[#dce6de] bg-white px-4 text-base text-[#202b23] outline-none transition placeholder:text-[#28342b] focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>
                    <button type='submit' className='h-12 w-full rounded-[11px] bg-[#078b43] text-base font-bold text-white shadow-[0_4px_5px_rgba(0,0,0,0.22)] transition hover:bg-[#067638] active:translate-y-0.5'>আপডেট </button>
                </form>
            </div>
        </div>
    );
};

export default Profilepage;