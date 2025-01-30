

import { useFindAllProductQuery, } from '@/redux/features/products/productsApi';
import { TAddProduct } from '@/types';

import SkeletonCard from '@/components/Shared/Skelton/Skelton';
import ProductCard from '@/components/Shared/ProductCard/ProductCard';

const RecommendeProducts = () => {
      const { data ,isLoading} = useFindAllProductQuery({
            page: 1,
            limit: 8,
    
    
        });


    return (
        <section className=''>
            <div className='lg:max-w-7xl max-w-xl mx-auto'>
                <div className='py-8'>
                    <h2 className='text-4xl font-bold text-center text-gray-800 '>Recommended For You</h2>
                </div>
                
                 
                

        
       
                            <div  className='col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
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
           
        </section>
    );
};

export default RecommendeProducts;
