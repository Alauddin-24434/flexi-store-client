/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi } from "@reduxjs/toolkit/query";

// JWT Payload interface (e.g., decoded JWT)
export interface JwtPayload {
  id: string;
  name: string;
  email: string;
  role: string;
  // Add any other properties that should be in the decoded JWT
}

// Error type (for API error handling)
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

// Response type (for generic API responses)
export type TResponse<T> = {
  data?: T;
  error?: TError;
  success: boolean;
  message: string;
};

// Extended response type for Redux Toolkit query
export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

// User type (for user management and authentication)
export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

// Define the `Shop` interface based on your Prisma model
export interface Shop {
  id:string;
  name: string;
  logo?: string;
  description: string;
  vendorId: string; // Vendor who owns the shop
  vendor: TUser; // User representing the vendor
 
  followers: TUser[]; // List of users following this shop
}

// Define the `OrderProduct` interface based on your Prisma model
export interface OrderProduct {
  id: string;
  orderId: string; // Reference to the order
  order: Order; // The related order object
  productId: string; // Reference to the product
 
  quantity: number; // Quantity of the product in the order
  price: number; // Price of the product in the order
}

// Define the `Product` interface for adding a product
export interface TAddProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string; // E.g., 'Headphones'
  tags?: string[]; // E.g., ['audio', 'wireless', 'bluetooth']
  stock: number;
  productThumbnail: string;
  productImages: string[];
  discount: number; // Regular discount, default is 0.0 if not provided
  shopId: string; // Foreign key to the Shop
  shop: Shop; // Reference to the Shop object
  orders: OrderProduct[]; // Array of OrderProduct objects related to this product

  // Flash Sale Fields
  flashSaleIsActive: boolean; // Whether the flash sale is active
  flashSaleDiscount: number; // Discount percentage during flash sale
  flashSaleStartTime: Date | null; // Start time of the flash sale
  flashSaleEndTime: Date | null; // End time of the flash sale
}
export interface Shop {
    id: string;
    name: string;
    logo?: string;  // Optional logo URL
    description: string;
    vendorId: string;  // ID of the vendor (user)
    vendor: TUser;  // Reference to the vendor (user) object
    products: TAddProduct[];  // Array of products associated with this shop
  }

// Define the `Order` interface based on your backend's order structure (assuming it exists)
export interface Order {
  id: string;
  userId: string; // User who placed the order
  orderDate: Date;
  totalAmount: number;
  status: string; // e.g., "Pending", "Completed"
  products: OrderProduct[]; // List of products in the order
}

