import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import SkeletonCard from '@/components/Shared/Skelton/Skelton';
import { useFindAllProductQuery } from '@/redux/features/products/productsApi';
import { TAddProduct } from '@/types';
import Image from 'next/image';
import React from 'react';

const Products = () => {
    const { data, isLoading } = useFindAllProductQuery({
        page: 1,
        limit: 3,
    });

    console.log('data', data);

    return (
        <section className='bg-[#e0f1f2] '>
            <div className='lg:max-w-7xl max-w-xl mx-auto py-8'>
                <h2 className='text-4xl font-bold text-gray-800 pb-8'>Popular Products</h2>
                {/* div problem skeliton */}
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 items-center">
                    <div className='flex col-span-4 flex-col justify-evenly items-center w-[270px] md:w-96 lg:w-96 h-[300px] md:h-[422px] lg:h-[422px] border bg-[#0d938f] rounded-2xl'>
                        <div className='flex flex-col items-center justify-center p-4'>
                            <p className='text-sm md:text-md lg:text-lg font-bold text-[#FFFFFF]'>
                                Insta360 GO 3S Action Camera - White
                            </p>
                            <span className='text-white bg-orange-500 px-4 mt-2 rounded-lg'>20% Off</span>
                        </div>
                        <Image
                            className='w-[180px] md:w-[250px] lg:w-[250px] h-[180px] md:h-[250px] lg:h-[250px] object-cover'
                            width={100}
                            height={100}
                            unoptimized
                            src='https://i.ibb.co.com/6Y90GnN/recommended-img.png'
                            alt='image'
                        />
                    </div>

                    {/* Product Grid */}
                    <div className='col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-10'>
                        {isLoading
                            ? Array.from({ length: 3 }).map((_, idx) => (
                                <div key={idx} className='w-full'>
                                    <SkeletonCard />
                                </div>
                            ))
                            : data?.data?.map((product: TAddProduct) => (
                                <ProductCard key={product?.id} product={product} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
