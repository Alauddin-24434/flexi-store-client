import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import SkeletonCard from '@/components/Shared/Skelton/Skelton';
import { useFindAllProductQuery } from '@/redux/features/products/productsApi';
import { TAddProduct } from '@/types';

import React from 'react';

const RelatedProducts = ({category}:{category:string}) => {

      const { data:products, isLoading,  } = useFindAllProductQuery({
      
      
        category,
      
      });



    return (
        <section className='py-10'>
            <div className='container mx-auto'>
                <div className='py-6'>
                    <p className='text-xl font-semibold'>Related Products</p>
                    
                </div>
                 {/* Product List */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {products?.data?.map((product: TAddProduct) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {isLoading &&
                Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)}
            </div>

          </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
