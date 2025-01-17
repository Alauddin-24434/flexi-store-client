import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedProducts = () => {
    const products = [
        { _id: "1", name: "Product 1", category: "phones", image: "https://via.placeholder.com/150x100?text=Product+1", price: "$100", rating: 4.5 },
        { _id: "2", name: "Product 2", category: "watches", image: "https://via.placeholder.com/150x100?text=Product+2", price: "$150", rating: 4.2 },
        { _id: "3", name: "Product 3", category: "laptops", image: "https://via.placeholder.com/150x100?text=Product+3", price: "$1200", rating: 4.8 },
        { _id: "4", name: "Product 4", category: "tablets", image: "https://via.placeholder.com/150x100?text=Product+4", price: "$300", rating: 4.0 },
        { _id: "5", name: "Product 5", category: "cameras", image: "https://via.placeholder.com/150x100?text=Product+5", price: "$500", rating: 4.7 },
        { _id: "6", name: "Product 6", category: "headphones", image: "https://via.placeholder.com/150x100?text=Product+6", price: "$80", rating: 4.3 },
        { _id: "7", name: "Product 7", category: "dresses", image: "https://via.placeholder.com/150x100?text=Product+7", price: "$40", rating: 3.9 },
        { _id: "8", name: "Product 8", category: "shoes", image: "https://via.placeholder.com/150x100?text=Product+8", price: "$60", rating: 4.1 },
        { _id: "9", name: "Product 9", category: "bags", image: "https://via.placeholder.com/150x100?text=Product+9", price: "$80", rating: 4.4 },
        { _id: "10", name: "Product 10", category: "jewelry", image: "https://via.placeholder.com/150x100?text=Product+10", price: "$150", rating: 4.6 },
        { _id: "11", name: "Product 11", category: "beauty", image: "https://via.placeholder.com/150x100?text=Product+11", price: "$20", rating: 4.3 },
        { _id: "12", name: "Product 12", category: "sports", image: "https://via.placeholder.com/150x100?text=Product+12", price: "$100", rating: 4.2 },
        { _id: "13", name: "Product 13", category: "toys", image: "https://via.placeholder.com/150x100?text=Product+13", price: "$30", rating: 3.8 },
        { _id: "14", name: "Product 14", category: "furniture", image: "https://via.placeholder.com/150x100?text=Product+14", price: "$200", rating: 4.5 },
        { _id: "15", name: "Product 15", category: "appliances", image: "https://via.placeholder.com/150x100?text=Product+15", price: "$400", rating: 4.0 },
        { _id: "16", name: "Product 16", category: "books", image: "https://via.placeholder.com/150x100?text=Product+16", price: "$15", rating: 4.8 },
    ];

 

    return (
        <section className='py-10'>
            <div className='container mx-auto'>
                <div className=''>
                    <p className='text-xl font-semibold'>Related Products</p>
                    
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-slate- py-10'>
                    {products?.slice(0,  5)?.map((product) => (
                        <Link href={`/products/${product._id}`} key={product._id}>
                            <div className="relative mx-auto flex w-[270px] h-[322px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <div className="relative mx-auto w-full mt-3 flex  p-2 overflow-hidden" >
                                 <Image width={100} height={100} className="object-cover w-full  rounded-lg" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                                    <span className="absolute top-0 left-0 m-2  bg-[#008ECC] px-2 text-center text-sm font-medium text-white">39% OFF</span>
                                </div>
                                <div className="mt-4 px-5 pb-5">
                                    <div>
                                        <h5 className="text-sm font-medium text-slate-900">Nike Air MX Super 2500 - Red</h5>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center justify-between">
                                        <p>
                                            <span className="text-xl font-bold text-slate-900">$449</span>
                                          
                                        </p>
                                        <div className="flex items-center">
                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Add to cart</div>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedProducts;
