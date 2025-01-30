"use client";

import OrderHistory from '@/components/DashboardRelated/Vendor/OrderHistory/OrderHistory';
import ProductsManagements from '@/components/DashboardRelated/Vendor/ProductsManagement/ProductsManagements';
import ShopManagement from '@/components/DashboardRelated/Vendor/ShopManagement/ShopManagement';
import { useParams } from 'next/navigation';
import React from 'react';

const VendorPage = () => {
    const params = useParams();
    const slug = params?.slug;

    // Conditionally render the appropriate section based on the slug value
    return (
        <div>
           
            
    
            {slug === 'products-management' && <ProductsManagements />}
            {slug === 'shop-info' && <ShopManagement/>}
            {slug === 'order-history' && <OrderHistory/>}
            
            {/* Fallback message when the slug doesn't match any of the defined sections */}
            {slug !== 'add-product' && slug !== 'products-management' && slug !== 'shop-info' && slug !== 'order-history' && (
                <p>Please select a valid section: Add Product, Products Management, Shop Info, or Reviews.</p>
            )}
        </div>
    );
};

export default VendorPage;
