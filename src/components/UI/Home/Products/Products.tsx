import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import SkeletonCard from '@/components/Shared/Skelton/Skelton';
import { useFindAllProductQuery } from '@/redux/features/products/productsApi';
import { TAddProduct } from '@/types';
import Image from 'next/image';


import React from 'react';

const Products = () => {
    const { data ,isLoading} = useFindAllProductQuery({
        page: 1,
        limit: 3,


    });
    console.log("d", data)


    return (
        <section className='bg-[#e0f1f2] '>
            <div className='lg:max-w-7xl max-w-xl mx-auto py-8'>
           
                    <h2 className='text-4xl font-bold text-black pb-8'>Popular Products</h2>
              
               <div className='flex flex-row items-center gap-x-4 '>
               <div className='flex flex-col justify-evenly items-center w-96 h-[422px] border bg-[#0d938f] rounded-2xl'>
              <div>
              <p className='text-lg font-bold text-[#FFFFFF]'>Insta360 GO 3S Action Camera - White</p>
              <span className='text-white float-right bg-orange-500 px-4 mt-2 rounded-lg'>20% Off</span>
              </div>
               <Image className="w-[250px] h-[250px] object-cover" width={100} height={100} unoptimized src="https://i.ibb.co.com/6Y90GnN/recommended-img.png" alt="image"  />
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4 ">
                {isLoading
            ? Array.from({ length: 10 }).map((_, idx) => <SkeletonCard key={idx} />)
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
