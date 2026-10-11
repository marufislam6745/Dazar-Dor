import Link from "next/link";
import Banner from "./Component/Banner";
import PriceDown from "./Component/PriceDown";
import PriceUp from "./Component/PriceUp";


export default async function Home() {

  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products`, { cache: 'force-cache' })
  const data = await res.json()

  const filterPriceUp = data.filter((value) => value.change.dir === "up")
  const priceUp = filterPriceUp.slice(0, 6)

  const filterPriceDown = data.filter((value) => value.change.dir === "down")
  const priceDown = filterPriceDown.slice(0, 6)

  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <div className="my-10">
        <h3 className="font-bold text-xl my-4"><span className="text-red-700">▲</span>আজ দাম বেড়েছে </h3>
        <PriceUp priceUp={priceUp}></PriceUp>
      </div>
      <div>
        <h3 className="font-bold text-xl my-4"><span className="text-green-700">▼</span>আজ দাম কমেছে </h3>
        <PriceDown priceDown={priceDown}></PriceDown>
      </div>
      <div className="my-10">
        <h3 className="font-bold text-xl">সব পণ্য</h3>
        <p className="text-sm text-gray-500">মোট {data.length}টি পণ্য দেখানো হচ্ছে পণ্য</p>
        <div className='lg:grid grid-cols-3 gap-4 mt-3'>
          {
            data.map((value) => <Link href={`/product/${value.id}`} key={value.id}>
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
    </div>
  );
}
