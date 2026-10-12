"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";




export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit =async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user =Object.fromEntries(formData.entries())

        const {data,error}=await authClient.signIn.email({
            ...user,
            callbackURL:"/"
        })
        if(data){
            console.log(data)
        }
        if(error){
            console.log(error)
        }
    };

    const handleGooglebtn = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }
    const handleGithunbtn=async()=>{
        await authClient.signIn.social({
            provider:"github"
        })
    }

    return (
        <main className="min-h-screen bg-[#f0f5f1] px-4 py-8 sm:py-10">
            <div className="mx-auto max-w-130">

                {/* Heading */}
                <header className="mb-8 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-[#202b23] sm:text-[34px]">
                        সাইন ইন
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-[#68736b] sm:text-base">
                        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                    </p>
                </header>

                {/* Login Card */}
                <section className="rounded-[20px] border border-[#dce6de] bg-[#fbfdfb] px-5 py-7 shadow-sm sm:px-7.5 sm:py-7.5">

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-base font-medium text-[#202b23]"
                            >
                                ইমেইল
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                                className="h-12.5 w-full rounded-[11px] border border-[#dce6de] bg-transparent px-4 text-base text-[#202b23] outline-none transition placeholder:text-[#28342b] focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-base font-medium text-[#202b23]"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                autoComplete="current-password"
                                minLength={8}
                                required
                                className="h-12.5 w-full rounded-[11px] border border-[#dce6de] bg-transparent px-4 text-base text-[#202b23] outline-none transition placeholder:text-[#28342b] focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />

                            <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm text-[#58665b]">
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={(e) => setShowPassword(e.target.checked)}
                                    className="accent-green-700"
                                />
                                পাসওয়ার্ড দেখুন
                            </label>
                        </div>


                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="h-12.5 w-full rounded-[11px] bg-[#078b43] text-base font-bold text-white shadow-[0_4px_5px_rgba(0,0,0,0.22)] transition hover:bg-[#067638] active:translate-y-0.5"
                        >
                            সাইন ইন
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4">
                        <div className="h-0.5 flex-1 bg-[#e1e7e2]" />

                        <span className="text-sm text-[#68736b]">অথবা</span>

                        <div className="h-0.5 flex-1 bg-[#e1e7e2]" />
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                        {/* Google */}
                        <button
                            type="button"
                            onClick={handleGooglebtn}
                            className="flex h-12.5 items-center justify-center gap-2 rounded-[11px] border border-[#dce6de] px-2 text-sm font-semibold text-[#28342b] transition hover:bg-[#f0f5f1] sm:text-base"
                        >
                            <svg viewBox="0 0 48 48" className="h-5 w-5 shrink-0">
                                <path
                                    fill="#EA4335"
                                    d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.5 13.2l7.8 6.1C12.2 13.2 17.6 9.5 24 9.5Z"
                                    transform="translate(0 4)"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M47.5 24.5c0-1.6-.2-3.2-.5-4.7H24v9h13.2c-.6 3-2.3 5.5-4.8 7.2l7.8 6.1c4.6-4.3 7.3-10.5 7.3-17.6Z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M24 48c6.5 0 12-2.1 16-5.9l-7.8-6.1c-2.2 1.5-5 2.4-8.2 2.4-6.3 0-11.7-4.2-13.6-9.9l-7.9 6C6.5 42.4 14.6 48 24 48Z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M10.4 28.5c-.5-1.4-.8-2.9-.8-4.5s.3-3.1.8-4.5l-7.9-6C.9 16.9 0 20.3 0 24s.9 7.1 2.5 10.5l7.9-6Z"
                                />
                            </svg>
                            Google দিয়ে চালিয়ে যান
                        </button>

                        {/* GitHub */}
                        <button
                            type="button"
                            onClick={handleGithunbtn}
                            className="flex h-12.5 items-center justify-center gap-2 rounded-[11px] border border-[#dce6de] px-2 text-sm font-semibold text-[#28342b] transition hover:bg-[#f0f5f1] sm:text-base"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 shrink-0 fill-current"
                                aria-hidden="true"
                            >
                                <path d="M12 .8a11.3 11.3 0 0 0-3.57 22.02c.57.1.77-.25.77-.55v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.52-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.5-.28-5.12-1.25-5.12-5.57 0-1.23.44-2.24 1.17-3.03-.12-.28-.51-1.44.11-3 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.1-1.16 3.1-1.16.63 1.56.24 2.72.12 3 .73.79 1.17 1.8 1.17 3.03 0 4.33-2.62 5.29-5.13 5.57.41.36.77 1.04.77 2.1v3.13c0 .3.2.66.78.55A11.3 11.3 0 0 0 12 .8Z" />
                            </svg>

                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-6 text-center text-sm text-[#28342b] sm:text-base">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link
                            href="../signup"
                            className="font-medium text-[#078b43] hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>
                </section>

                {/* Back to Home */}
                <div className="mt-8 pb-2 text-center">
                    <Link
                        href="/"
                        className="text-sm text-[#7b867d] transition hover:text-green-700"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </main>
    );
}
