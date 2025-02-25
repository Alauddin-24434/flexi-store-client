import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import SkeletonCard from '@/components/Shared/Skelton/Skelton';
import { useFindAllProductQuery } from '@/redux/features/products/productsApi';
import { TAddProduct } from '@/types';


const Products = () => {
    const { data, isLoading } = useFindAllProductQuery({
        page: 1,
        limit: 4,
    });

  
    return (
        <section className='bg-[#e0f1f2] '>
            <div className='lg:max-w-7xl max-w-xl mx-auto py-8'>
                <h2 className='text-4xl font-bold text-gray-800 text-center pb-8'>Popular Products</h2>
                {/* div problem skeliton */}
                {/* <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 items-center"> */}
                {/* <div className='flex col-span-4 flex-col justify-evenly items-center w-96 h-[350px] border rounded-2xl overflow-hidden'>
    <Image
        className='w-full h-full object-cover rounded-2xl'
        width={384} // Tailwind w-96 is 384px
        height={350}
        unoptimized
        src={bestDealImage}
        alt='image'
    />
</div> */}


                    {/* Product Grid */}
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  py-10'>
                        {isLoading
                            ? Array.from({ length: 4 }).map((_, idx) => (
                                <div key={idx} className='w-full'>
                                    <SkeletonCard />
                                </div>
                            ))
                            : data?.data?.products?.map((product: TAddProduct) => (
                                <ProductCard key={product?.id} product={product} />
                            ))}
                    </div>
                </div>
            {/* </div> */}
        </section>
    );
};

export default Products;
