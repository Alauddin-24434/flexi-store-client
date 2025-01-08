import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Categories = () => {
    const categoryCard = [
        { _id: "1", name: "Phones", category: "phones", image: "https://via.placeholder.com/150x100?text=Phones" },
        { _id: "2", name: "Watches", category: "watches", image: "https://via.placeholder.com/150x100?text=Watches" },
        { _id: "3", name: "Laptops", category: "laptops", image: "https://via.placeholder.com/150x100?text=Laptops" },
        { _id: "4", name: "Tablets", category: "tablets", image: "https://via.placeholder.com/150x100?text=Tablets" },
        { _id: "5", name: "Cameras", category: "cameras", image: "https://via.placeholder.com/150x100?text=Cameras" },
        { _id: "6", name: "Headphones", category: "headphones", image: "https://via.placeholder.com/150x100?text=Headphones" },
        { _id: "7", name: "Dresses", category: "dresses", image: "https://via.placeholder.com/150x100?text=Dresses" },
        { _id: "8", name: "Shoes", category: "shoes", image: "https://via.placeholder.com/150x100?text=Shoes" },
        { _id: "9", name: "Bags", category: "bags", image: "https://via.placeholder.com/150x100?text=Bags" },
        { _id: "10", name: "Jewelry", category: "jewelry", image: "https://via.placeholder.com/150x100?text=Jewelry" },
        { _id: "11", name: "Beauty", category: "beauty", image: "https://via.placeholder.com/150x100?text=Beauty" },
        { _id: "12", name: "Sports", category: "sports", image: "https://via.placeholder.com/150x100?text=Sports" },
        { _id: "13", name: "Toys", category: "toys", image: "https://via.placeholder.com/150x100?text=Toys" },
        { _id: "14", name: "Furniture", category: "furniture", image: "https://via.placeholder.com/150x100?text=Furniture" },
        { _id: "15", name: "Appliances", category: "appliances", image: "https://via.placeholder.com/150x100?text=Appliances" },
        { _id: "16", name: "Books", category: "books", image: "https://via.placeholder.com/150x100?text=Books" },
    ];
    

    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    

    return (
        <section className='py-10'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center mb-4'>
                    <p className='text-xl font-semibold'>Browse By Category</p>
                    <span className='flex gap-2'>
                        <button
                           className='rounded-md p-2 border border-[#008ECC]  px-4 hover:bg-[#008ECC] hover:text-white'
                            onClick={toggleShowAll}
                        >
                            {showAll ? 'Show Less' : 'View All'}
                        </button>
                    </span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-2'>
                    {categoryCard?.slice(0, showAll ? categoryCard.length : 9)?.map((cat) => (
                        <Link href={`/products?${cat?.category}`} key={cat._id} >
                             <div  className='w-full md:w-[170px] lg:w-[170px] h-[145px] flex flex-col items-center justify-center border rounded-lg p-2 bg-gray-50'>
                            <Image width={100} height={100} src={cat.image} alt={cat.name} className='w-full  object-cover rounded-md' />
                            <span className='text-center mt-2 font-medium text-lg'>{cat.name}</span>
                        </div>
                        </Link>
                       
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
