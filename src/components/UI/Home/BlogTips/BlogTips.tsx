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
      title: "Tips for Choosing the Right Product Online",
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
      title: "Things to Know Before Buying a Mobile",
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
  <section className="blog-tips-section py-1">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Tips and Advice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
             <Image width={100} height={100}
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">{tip.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{tip.description}</p>
                <a
                  href={tip.link}
                  className="text-blue-500 text-sm mt-4 inline-block hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTips;
