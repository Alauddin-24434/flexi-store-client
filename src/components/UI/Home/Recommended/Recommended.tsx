
import Image from 'next/image';
import { useFindFlasSaleProductsQuery } from '@/redux/features/products/productsApi';
import { TAddProduct } from '@/types';

import SkeletonCard from '@/components/Shared/Skelton/Skelton';

const RecommendeProducts = () => {
    const { data, isLoading } = useFindFlasSaleProductsQuery(undefined)



    return (
        <section className='bg-[#b2dede]'>
            <div className='lg:max-w-7xl max-w-xl mx-auto'>
                <div className='py-8'>
                    <h2 className='text-4xl font-bold text-black'>Recommended For You</h2>
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
                                    <span style={{ display: "block", color:"black" ,fontSize: "24px" }}>02</span>
                                    <span style={{ fontSize: "12px",  color:"black" }}>Hours</span>
                                </div>
                                :
                                <div>
                                    <span style={{ display: "block", color:"black", fontSize: "24px" }}>34</span>
                                    <span style={{ fontSize: "12px",  color:"black" }}>Minutes</span>
                                </div>
                                :
                                <div>
                                    <span style={{ display: "block", color:"black", fontSize: "24px" }}>56</span>
                                    <span style={{ fontSize: "12px",  color:"black" }}>Seconds</span>
                                </div>
                            </div>
                        </div>

                        <Image width={100} height={100} unoptimized className="h-52 w-52     object-cover" src="https://i.ibb.co.com/6Ythmvd/251641-P4-PME7-208-removebg-preview.png" alt="image" />
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6  py-10'>
                    {isLoading
                        ? Array.from({ length: 10 }).map((_, idx) => <SkeletonCard key={idx} />)
                        : data?.data?.map((product: TAddProduct) => (
                            
        
       
        <div key={product?.id} className="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525]">
            {/* <!-- Card Image --> */}
            <Image width={100} height={100} unoptimized className="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src={product?.thumbnailImage} alt="Card Image" />

            <div className="flex flex-col">
                {/* <!--  --> */}
                <div className="flex items-center justify-between my-4">
                    {/* <!-- Rater --> */}
                    <div
                        className="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img className="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img className="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img className="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    {/* <!-- Rate --/> */}
                    <div className="flex gap-1 items-center justify-end text-2xl">
                        {/* <ion-icon className="text-yellow-500" name="star"></ion-icon> */}
                        <p className="dark:text-white font-bold pr-4">5.0</p>
                    </div>
                </div>

                {/* <!-- Description --> */}

                <h2 className="pl-4 text-2xl font-semibold hover:text-rose-600 dark:hover:text-rose-600 cursor-pointer dark:text-white">Pizza Slice</h2>
                <p className="pl-4 text-gray-800 dark:text-gray-300  mb-4">${product?.price}</p>
                <button className="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>

       

                        ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendeProducts;
