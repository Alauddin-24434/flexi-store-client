"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  // Array of mega menu items
  const megaMenuItems = [
    { label: 'All Categories', path: '/categories', subcategories: ['Phone', 'Watch', 'TV'] },
    { label: 'All Products', path: '/products' },
    { label: 'Shops', path: '/shops' },
    { label: 'Cart', path: '/cart' },
  ];

  return (
    <div className="border py-3">
      <div className="flex container mx-auto justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#008ECC]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <span className="ml-2 font-semibold text-[#008ECC]">MegaMart</span>
        </div>

        <div className="ml-6 flex flex-1 gap-x-3">
          <input
            type="text"
            className="w-full rounded-md border border-[#008ECC] px-3 py-2 text-sm"
            defaultValue="Search"
          />
        </div>

        <div className="ml-2 flex">
          <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#008ECC]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path
                fillRule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Orders</span>
          </div>

          <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#008ECC]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Favorites</span>
          </div>

          <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#008ECC]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                3
              </span>
            </div>
            <span className="text-sm font-medium">Cart</span>
          </div>

          <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border border-[#008ECC] py-2 px-4 hover:bg-[#008ECC] hover:text-white">
            <span className="text-sm font-medium">Sign in</span>
          </div>
        </div>
      </div>

      {/* Mega Menu Navigation */}
      <div className="flex items-center justify-center gap-6 mt-4">
        {megaMenuItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <span
              className={`cursor-pointer rounded-sm py-1 px-2 text-sm font-medium ${
                router.pathname === item.path
                  ? 'border-[#008ECC] text-[#008ECC]'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </span>

            {item.subcategories && showMegaMenu && item.label === 'All Categories' && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md p-3">
                {item.subcategories.map((subcategory) => (
                  <div
                    key={subcategory}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => router.push(`/categories/${subcategory.toLowerCase()}`)}
                  >
                    {subcategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
