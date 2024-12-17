"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useFindAllProductQuery } from "@/redux/features/products/productsApi";
import Link from "next/link";

// Interface for a single product
interface IProduct {
  _id: string;
  id: string;
  name: string;
  thumbnailImage: string;
  price: number;
}

// Interface for API Response


const AllProducts = () => {
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>(search);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  // Fetching product data
  const { data, isError, isLoading } = useFindAllProductQuery({
    page: currentPage,
    limit: itemsPerPage,
    filter: debouncedSearch,
    category: selectedCategory,
  });

  const products: IProduct[] = data?.data || [];
  const totalItems = data?.total || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClearFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setCurrentPage(1);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold text-red-600">
          Error loading products. Please try again later.
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Filters */}
      <div className="mb-4 p-4 border rounded-lg bg-gray-100 mt-16">
        <h3 className="font-bold text-lg mb-2">Filters</h3>
        <div className="flex flex-wrap">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-2 py-1 mb-2 mr-2 w-full sm:w-auto"
          />
          <button
            onClick={handleClearFilters}
            className="bg-red-500 text-white px-3 py-1 rounded mb-2 mr-2"
          >
            Refresh
          </button>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded px-2 py-1 mb-2 mr-2 w-full sm:w-auto"
          >
            <option value="">All Categories</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <Link key={item._id} href={`/details/${item.id}`}>
            <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="cursor-pointer">
                <Image
                  src={item.thumbnailImage}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="h-36 w-full object-cover rounded-t-lg"
                />
              </div>
              <div className="mt-4 px-5 pb-5">
                <h5 className="cursor-pointer text-xl font-semibold tracking-tight text-slate-900">
                  {item.name}
                </h5>
                <div className="mt-2.5 mb-5 flex items-center">
                  <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${item.price}
                    </span>
                  </p>
                  <p>Add To Cart</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
