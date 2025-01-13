import Image from 'next/image';
import React from 'react';

interface BlogTip {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  content:string;
}

const BlogTips: React.FC = () => {
   const blogTips:BlogTip[] = [
    {
      id: 1,
      title: "Choosing the Right Product Online",
      description: "Learn how to select the right products while shopping online.",
      image: "/images/blog1.jpg",
      link: "/blog/tips-for-choosing-products",
      content: `
        Shopping online can be tricky if you're unsure of how to select the right product. 
        Here are some tips to help you make better choices when buying online:
        
        1. Read reviews: Always check customer reviews before purchasing a product.
        2. Compare prices: Use price comparison tools to ensure you’re getting the best deal.
        3. Check seller ratings: Make sure to buy from reputable sellers or platforms.
        4. Inspect product details: Carefully go through the product specifications to match your needs.
        5. Return policies: Ensure the seller offers a return or refund option in case the product doesn't meet your expectations.
      `,
    },
    {
      id: 2,
      title: "Winter Fashion Tips",
      description: "Get the best advice to stay fashionable this winter.",
      image: "/images/blog2.jpg",
      link: "/blog/winter-fashion-tips",
      content: `
        Winter fashion is all about layering smartly while staying stylish. Here are some tips:
        - Invest in thermal wear to keep yourself warm.
        - Choose bold and vibrant colors to stand out in winter's dull hues.
        - Accessorize with hats, scarves, and gloves for a chic look.
      `,
    },
    {
      id: 3,
      title: "Before Buying a Product",
      description: "Read this guide before purchasing a new mobile phone.",
      image: "/images/blog3.jpg",
      link: "/blog/mobile-buying-guide",
      content: `
        Buying a mobile phone requires careful research. Here's what to consider:
        - Processor: Choose a phone with a good processor for smooth performance.
        - Battery: Look for phones with long battery life.
        - Camera: Check camera specifications if photography is important.
        - OS: Decide between Android and iOS based on your preference.
      `,
    },
  ];
  

  return (
  <section className="blog-tips-section py-8 bg-[#e0f1f2]">
      <div className="lg:max-w-7xl max-w-xl mx-auto">
     
        <h2 className='text-4xl font-bold text-black pb-8'>Tips and Advice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogTips.map((tip) => (
           
         
                <div key={tip?.id} className="group block rounded-xl overflow-hidden focus:outline-none" >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                      <img className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Blog Image"/>
                    </div>
            
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                        {tip?.title}
                      </h3>
                      <p className="mt-3 text-gray-600 dark:text-neutral-400">
                       {tip?.description}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                        Read more
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      </p>
                    </div>
                  </div>
                </div>
        
   
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTips;
