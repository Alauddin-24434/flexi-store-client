"use client"
import Products from "@/components/UI/Products/Products";
import React, { useState } from "react";

const ProductDetails = () => {
  // Mock data for dynamic sizes
  const sizes = ["XS", "S", "M", "L", "XL"]; // Replace this with actual data or props
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // Track selected size

  return (
    <div className="container mx-auto">
      {/* Main container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Section - Images */}
        <div className="lg:col-span-6">
          <div className="flex gap-x-4">
            {/* Additional images */}
            <div className="flex flex-col gap-4 w-[170px]">
              <img
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Additional Image 1"
                className="w-[170px] h-[138px] border rounded-md cursor-pointer hover:border-indigo-500"
              />
              <img
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Additional Image 2"
                className="w-[170px] h-[138px] border rounded-md cursor-pointer hover:border-indigo-500"
              />
              <img
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Additional Image 3"
                className="w-[170px] h-[138px] border rounded-md cursor-pointer hover:border-indigo-500"
              />
              <img
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Additional Image 4"
                className="w-[170px] h-[138px] border rounded-md cursor-pointer hover:border-indigo-500"
              />
            </div>

            {/* Thumbnail image */}
            <div className="w-[500px] h-[600px]">
              <img
                src="https://www.mobiledokan.com/media/oppo-f25-pro-lava-red-official-image.webp"
                alt="Thumbnail Image"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="lg:col-span-6 p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Havic HV G-92 Gamepad
          </h2>
          <span className="block mt-2 text-xl font-bold text-green-500">
            $192.00
          </span>
          <p className="mt-4 text-gray-600">
            PlayStation 5 Controller Skin. High-quality vinyl with air channel
            adhesive for easy bubble-free installation and mess-free removal.
            Pressure sensitive.
          </p>
          <hr className="my-6" />

          {/* Color and Size Options */}
          <div>
            <div className="flex gap-4 items-center">
            <p className="font-semibold text-gray-800">Colors:</p>
            <div className="flex gap-4 ">
              <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer border border-gray-300"></span>
              <span className="w-6 h-6 bg-green-500 rounded-full cursor-pointer border border-gray-300"></span>
              <span className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer border border-gray-300"></span>
            </div>
            </div>

            <div className="mt-6 flex gap-4 items-center">
              <p className="font-semibold text-gray-800">Size:</p>
              <div className="flex gap-4">
                {sizes && sizes.length > 0 ? (
                  sizes.map((size) => (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)} // Update selected size
                      className={`flex items-center justify-center w-7 h-7 border rounded-md cursor-pointer ${
                        selectedSize === size
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "border-gray-300 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Size not available</p>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Add to Cart
            </button>
            <button className="px-6 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white">
              Buy Now
            </button>
          </div>
          {/* featured */}
          <div className="border">

          </div>
        </div>
      </div>

      {/* Related Items */}
      <Products />
    </div>
  );
};

export default ProductDetails;
