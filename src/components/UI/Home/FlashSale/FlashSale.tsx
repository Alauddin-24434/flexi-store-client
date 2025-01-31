import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useFindFlasSaleProductsQuery } from '@/redux/features/products/productsApi';
import { TAddProduct } from '@/types';
import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import SkeletonCard from '@/components/Shared/Skelton/Skelton';

const FlashSale = () => {
    const { data, isLoading } = useFindFlasSaleProductsQuery(undefined);

    // Set the flash sale end time (Replace with dynamic value if needed)
    const flashSaleEndTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours from now

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = flashSaleEndTime - now;

        if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

        return {
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <section className='bg-[#e0f1f2]'>
            <div className='lg:max-w-7xl max-w-xl mx-auto'>
                <div className='py-8'>
                    <h2 className='text-4xl font-bold text-gray-800'>Flash Sales Today</h2>
                </div>
                <div className="m-2 overflow-hidden rounded-xl border shadow-lg">
                    <div className="flex flex-col justify-between items-center overflow-hidden bg-[#b2dede] sm:flex-row md:h-60">
                        <Image width={100} height={100} unoptimized className="h-52 w-52 object-cover" src="https://i.ibb.co.com/jWpMs3b/61-I6f9-F3-TNL-AC-UF1000-1000-QL80-prev-ui.png" alt="image" />
                        
                        {/* Flash Sale Text & Countdown */}
                        <div className="flex flex-col items-center justify-center p-4">
                            <p className='font-bebas-neue uppercase text-xl md:text-3xl lg:text-5xl font-black text-gray-800 text-center'>
                                Hurry, limited time offer!
                            </p>

                            {/* Countdown Timer */}
                            <div className="flex items-center justify-center gap-4font-bebas-neue uppercase text-xl md:text-3xl lg:text-5xl  text-gray-800 font-bold">
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl">{timeLeft.hours.toString().padStart(2, '0')}</span>
                                    <span className="text-sm">Hours</span>
                                </div>
                                <span>:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                                    <span className="text-sm">Minutes</span>
                                </div>
                                <span>:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-4xl">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                                    <span className="text-sm">Seconds</span>
                                </div>
                            </div>
                        </div>

                        <Image width={100} height={100} unoptimized className="h-52 w-52 object-cover" src="https://i.ibb.co.com/6Ythmvd/251641-P4-PME7-208-removebg-preview.png" alt="image" />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 py-10'>
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)
                        : data?.data?.slice(0, 4).map((product: TAddProduct) => (
                            <ProductCard key={product?.id} product={product} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default FlashSale;
