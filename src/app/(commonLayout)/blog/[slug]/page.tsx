"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

const BlogDetailsPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  if (slug !== "tips-for-choosing-products") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-lg text-gray-600 mb-6">
            The blog post you are looking for does not exist. Please try again.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
        {/* Blog Image */}
        <img
          src="/images/blog1.jpg"
          alt="Choosing Products"
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          {/* Blog Title */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Tips for Choosing the Right Product Online
          </h1>

          {/* Blog Description */}
          <p className="text-lg text-gray-700 mb-6 leading-8">
            Shopping online can be tricky if you're unsure of how to select the
            right product. Here are some tips to help you make better choices when
            buying online:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
            <li>
              <strong>Read reviews:</strong> Always check customer reviews before purchasing a product.
            </li>
            <li>
              <strong>Compare prices:</strong> Use price comparison tools to ensure you’re getting the best deal.
            </li>
            <li>
              <strong>Check seller ratings:</strong> Make sure to buy from reputable sellers or platforms.
            </li>
            <li>
              <strong>Inspect product details:</strong> Carefully go through the product specifications to match your needs.
            </li>
            <li>
              <strong>Return policies:</strong> Ensure the seller offers a return or refund option in case the product doesn't meet your expectations.
            </li>
          </ul>

          {/* Navigation Button */}
          <div className="flex justify-end">
            <button
              onClick={() => router.push("/")}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
