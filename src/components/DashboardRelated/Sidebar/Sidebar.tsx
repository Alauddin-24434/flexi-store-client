import React from 'react';
import VendorNavItems from '../Vendor/VendorNavItems/VendorNavItems';
import AdminNavItems from '../Admin/AdminNavItems/AdminNavItems';

const Sidebar = () => {
    return (
        <div>
             
             <VendorNavItems/>
                    <AdminNavItems/>
        </div>
    );
};

export default Sidebar;