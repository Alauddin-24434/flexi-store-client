"use client";
import React, { useState, useEffect } from "react";
import { useFindAllProductQuery } from "@/redux/features/products/productsApi";
import ProductCard from "@/components/Shared/ProductCard/ProductCard";
import { TAddProduct } from "@/types";
import Pagination from "@/components/Shared/Pagination/Pagination";
import SkeletonCard from "@/components/Shared/Skelton/Skelton";
import { useSearchParams } from "next/navigation";

const ProductsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [sorting, setSorting] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  // Synchronize category with query parameters on initial load
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category") || "";
    setCategory(categoryFromUrl);
  }, [searchParams]);

  // Query products from the API
  const { data, isLoading, error } = useFindAllProductQuery({
    page: currentPage,
    limit: itemsPerPage,
    filter: "",
    category,
    sorting,
    search,
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) return <p>Something went wrong. Please try again later.</p>;

  return (
    <div className="bg-[#e0f1f2]">
      <div className="flex flex-col md:flex-row lg:flex-row max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 p-4 rounded-lg mr-4 border shadow-lg h-96">
          

          <div>
            <label htmlFor="category" className="block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="mt-1 w-full p-2 border rounded-md shadow-sm"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
          </div>

          <div className="mt-4">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearchChange}
              className="w-full p-2 border rounded-md shadow-sm"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="sorting" className="block text-sm font-medium">
              Sort By
            </label>
            <select
              id="sorting"
              value={sorting}
              onChange={handleSortingChange}
              className="mt-1 w-full p-2 border rounded-md shadow-sm"
            >
              <option value="">Select Sorting</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name_asc">Name: A to Z</option>
              <option value="name_desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        {/* Product List */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4 p-4">
            {isLoading
              ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
              : data?.data?.map((product: TAddProduct) => (
                  <ProductCard key={product?.id} product={product} />
                ))}
          </div>

          {!isLoading && (
            <Pagination
              currentPage={currentPage}
              totalPages={data?.totalPages || 1}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
