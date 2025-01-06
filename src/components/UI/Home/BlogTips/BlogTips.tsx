// BlogTips.tsx
import React from "react";

const BlogTips = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Blog & Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Add your blog or tips data here */}
          <div className="blog-card">
            <img src="/images/blog1.jpg" alt="Blog 1" className="w-full h-auto" />
            <h3 className="text-xl mt-4">How to Take Care of Your Products</h3>
            <p className="text-sm text-gray-600">Learn how to maintain and extend the life of your products with these tips...</p>
          </div>
          <div className="blog-card">
            <img src="/images/blog2.jpg" alt="Blog 2" className="w-full h-auto" />
            <h3 className="text-xl mt-4">Top 10 Must-Have Items for Winter</h3>
            <p className="text-sm text-gray-600">Stay warm and stylish this season with these top product recommendations...</p>
          </div>
          {/* Add more blog posts here */}
        </div>
      </div>
    </section>
  );
};

export default BlogTips;
