"use client";
import React, { useState } from "react";
import { useFindAllProductQuery } from "@/redux/features/products/productsApi";
import ProductCard from "@/components/Shared/ProductCard/ProductCard";
import { TAddProduct } from "@/types";
import Pagination from "@/components/Shared/Pagination/Pagination";

const ProductsPage: React.FC = () => {
  // States for query parameters
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [sorting, setSorting] = useState<string>(""); // Example: "price_asc", "price_desc"
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Fetch data using your query
  const { data, isLoading, error } = useFindAllProductQuery({
    page: currentPage,
    limit: itemsPerPage,
    filter: "",
    category,
    sorting,
    search,
  });

  // Handlers
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setCurrentPage(1); // Reset to page 1 when filtering
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to page 1 when searching
  };

  const handleSortingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Render
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Please try again later.</p>;

  return (
    <div>
      <h1>Products</h1>

      {/* Filter and Search */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          {/* Add more categories as needed */}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
        />

        <select value={sorting} onChange={handleSortingChange}>
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Name: A to Z</option>
          <option value="name_desc">Name: Z to A</option>
        </select>
      </div>

      {/* Product List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-slate- py-10'>
        {data?.products?.map((product:TAddProduct) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={data?.totalPages || 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsPage;
