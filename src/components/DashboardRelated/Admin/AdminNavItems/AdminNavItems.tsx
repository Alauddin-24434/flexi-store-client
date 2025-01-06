"use client";
import { FaStore, FaUsers } from 'react-icons/fa';
import Link from 'next/link';

const AdminNavItems = () => {

  const navItems = [
    // Admin related
    {
      name: 'Manage Vendors',
      path: '/admin/vendors',
      icon: <FaStore />,
    },
    {
      name: 'Manage Customers',
      path: '/admin/customers',
      icon: <FaUsers />,
    },
  ];

  return (
    <nav className="vendor-nav">
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
    </nav>
  );
};

export default AdminNavItems;
