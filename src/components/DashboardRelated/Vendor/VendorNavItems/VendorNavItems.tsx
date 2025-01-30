"use client";
import { FaStore, FaBoxOpen, FaHistory } from 'react-icons/fa';
import Link from 'next/link';


const VendorNavItems = () => {
  
  const navItems = [
    {
      name: 'Shop Information',
      path: '/vendor/shop-info',
      icon: <FaStore />,
    },
    {
      name: 'Products Management',
      path: '/vendor/products-management',
      icon: <FaBoxOpen />,
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
