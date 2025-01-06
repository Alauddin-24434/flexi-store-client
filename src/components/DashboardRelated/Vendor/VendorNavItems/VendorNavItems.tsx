"use client";
import { FaStore, FaBoxOpen, FaEdit, FaTrashAlt, FaComments, FaHistory } from 'react-icons/fa';
import Link from 'next/link';


const VendorNavItems = () => {
  
  const navItems = [
    {
      name: 'Shop Information',
      path: '/vendor/shop-info',
      icon: <FaStore />,
    },
    {
      name: 'Add Product',
      path: '/vendor/add-product',
      icon: <FaBoxOpen />,
    },
    {
      name: 'Edit Product',
      path: '/vendor/edit-product',
      icon: <FaEdit />,
    },
    {
      name: 'Duplicate Product',
      path: '/vendor/duplicate-product',
      icon: <FaBoxOpen />,
    },
    {
      name: 'Delete Product',
      path: '/vendor/delete-product',
      icon: <FaTrashAlt />,
    },
    {
      name: 'Customer Reviews',
      path: '/vendor/reviews',
      icon: <FaComments />,
    },
    {
      name: 'Order History',
      path: '/vendor/order-history',
      icon: <FaHistory />,
    },
  ];

  return (
    <div className="flex flex-col flex-grow p-4 overflow-auto">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
           <div className="flex gap-2 items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300">
           {item.icon}
           <span >{item.name}</span>
           </div>
            
            
            </Link>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default VendorNavItems;
