
import Image from 'next/image';
import { useFindFlasSaleProductsQuery } from '@/redux/features/products/productsApi';
import { TAddProduct } from '@/types';
import ProductCard from '@/components/Shared/ProductCard/ProductCard';
import SkeletonCard from '@/components/Shared/Skelton/Skelton';

const FlashSale = () => {
    const { data, isLoading } = useFindFlasSaleProductsQuery(undefined)



    return (
        <section className='bg-[#e0f1f2]'>
            <div className='lg:max-w-7xl max-w-xl mx-auto'>
                <div className='py-8'>
                    <h2 className='text-4xl font-bold text-gray-800 '>Flash Sales Today</h2>
                </div>
                <div className="m-2  overflow-hidden rounded-xl border shadow-lg">
                    <div className="flex flex-col justify-between items-center overflow-hidden bg-[#0d938f] sm:flex-row md:h-60">

                        <Image width={100} height={100} unoptimized className="h-52 w-52   object-cover" src="https://i.ibb.co.com/jWpMs3b/61-I6f9-F3-TNL-AC-UF1000-1000-QL80-prev-ui.png" alt="image" />
                        {/* Flash Sale Related Text and Countdown */}
                        <div style={{

                            padding: "1rem",
                            borderRadius: "8px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "1rem"
                        }}>
                            {/* Flash Sale Text */}
                            <div
                            >

                                <p className='text-4xl font-bold text-[#FFFFFF]'>
                                    Hurry, limited time offer!
                                </p>
                            </div>

                            {/* Countdown Timer */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#1CD15D"
                            }}>
                                <div>
                                    <span style={{ display: "block", color: "#FFFFFF", fontSize: "24px" }}>02</span>
                                    <span style={{ fontSize: "12px", color: "#FFFFFF" }}>Hours</span>
                                </div>
                                <span className='text-[#FFFFFF]'> :</span>
                                <div>
                                    <span style={{ display: "block", color: "#FFFFFF", fontSize: "24px" }}>34</span>
                                    <span style={{ fontSize: "12px", color: "#FFFFFF" }}>Minutes</span>
                                </div>
                                <span className='text-[#FFFFFF]'> :</span>
                                <div>
                                    <span style={{ display: "block", color: "#FFFFFF", fontSize: "24px" }}>56</span>
                                    <span style={{ fontSize: "12px", color: "#FFFFFF" }}>Seconds</span>
                                </div>
                            </div>
                        </div>

                        <Image width={100} height={100} unoptimized className="h-52 w-52     object-cover" src="https://i.ibb.co.com/6Ythmvd/251641-P4-PME7-208-removebg-preview.png" alt="image" />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6  py-10'>
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)
                        : data?.data?.map((product: TAddProduct) => (
                            <ProductCard key={product?.id} product={product} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default FlashSale;
