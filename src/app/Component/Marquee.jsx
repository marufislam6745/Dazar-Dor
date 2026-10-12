import React from 'react';
import MarqueeText from 'react-marquee-text';
import "react-marquee-text/dist/styles.css"

const Marquee =async () => {

    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, { cache: 'force-cache' })
    const data=await res.json()

    return (
        <div className='flex items-center justify-center w-full border-t border-b border-gray-200 py-2'>
            <MarqueeText className='text-sm'  direction='right' duration={10}>
                {
                   data.map((value,i)=><div key={i} className='mx-5'>
                    <span>{value.image} {value.nameBn} {value.today} টাকা/কেজি </span>
                    <span className={`${value.change.dir==="up"?"text-red-700" :"text-green-700"}`}>{`${value.change.dir==="up"?"▲" :" ▼"}`} {value.change.pct}%</span>
                   </div>) 
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;