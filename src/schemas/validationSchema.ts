import { z } from "zod";

// Define the Zod validation schema for Signup
export const SignupValidationSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),

  email: z
    .string()
    .email("Enter a valid email address")
    .min(1, "Email is required"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters"),

  role: z.enum(["USER", "VENDOR", "ADMIN"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
});

// Define the Zod validation schema for Login
export const LoginValidationSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email address")
    .min(1, "Email is required"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password cannot exceed 20 characters"),
});

// Define the Zod validation schema for Product

export const ProductValidationSchema = z.object({
  id: z.string().refine((val) => val.trim() !== "", { message: "Product ID is required" }), // Required string
  name: z.string().refine((val) => val.trim() !== "", { message: "Product name is required" }), // Required string
  description: z.string().optional(), // Optional field
  price: z.number().refine((val) => val > 0, { message: "Price must be a positive number" }), // Positive number
  stock: z.number().refine((val) => Number.isInteger(val) && val >= 0, { message: "Stock must be a non-negative integer" }), // Non-negative integer
  thumbnailImage: z.string().optional(), // Optional field
  additionalImages: z.array(z.string()).optional(), // Optional array of strings
  category: z.string().refine((val) => val.trim() !== "", { message: "Category is required" }), // Required string
  discount: z.number().refine((val) => val >= 0, { message: "Discount must be a non-negative number" }), // Non-negative number
  shopId: z.string().refine((val) => val.trim() !== "", { message: "Shop is required" }), // Required string
});


// Define the Zod validation schema for Shop
export const ShopValidationSchema = z.object({
  id: z.string().min(1, "Shop ID is required"), // ID as string
  name: z.string().min(1, "Shop name is required"),
  logo: z.string().url("Invalid logo URL").optional(),
  description: z.string().min(1, "Description is required"),
  vendorId: z.string().min(1, "Vendor ID is required"), // Vendor ID as string
  products: z.array(ProductValidationSchema).optional(),
});
