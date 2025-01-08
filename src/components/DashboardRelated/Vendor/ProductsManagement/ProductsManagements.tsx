import { Shop, TAddProduct } from "@/types";

import { useForm } from "react-hook-form";
import { useState } from "react";

import Image from "next/image";
import { useFindShopsVendorIdQuery } from "@/redux/features/shop/shopApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import uploadImageToCloudnary from "@/utils/imageUploadCloudinary";
import { useCreateProdutMutation } from "@/redux/features/products/productsApi";

const ProductsManagements = () => {
  const user = useAppSelector(useCurrentUser);
  const { data: shops } = useFindShopsVendorIdQuery(user?.id);
  const [flashSaleActive, setFlashSaleActive] = useState(false);
  const [thumbnailImage, setThumbnailImage] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<string[]>([]);
  const [createProdut, { data, isLoading }] = useCreateProdutMutation();
console.log(data)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<TAddProduct>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      stock: 1,
     
      thumbnailImage: "",
      additionalImages: [],
      discount: 0,
      shopId: '',
      orders: [],
      flashSaleIsActive: false,
      flashSaleDiscount: 0,
    }
  });

  const handleFlashSaleToggle = () => {
    setFlashSaleActive((prev) => !prev);
    setValue("flashSaleIsActive", !flashSaleActive);
  };

  const handleThumbnailImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const url = await uploadImageToCloudnary(file);
        setThumbnailImage(url);
        setValue("thumbnailImage", url);
      } catch (err) {
        console.error("Error uploading thumbnail image:", err);
      }
    }
  };

  const handleAdditionalImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
          const url = await uploadImageToCloudnary(file);
          imageUrls.push(url);
        } catch (err) {
          console.error("Error uploading additional image:", err);
        }
      }
      setAdditionalImages(imageUrls);
      setValue("additionalImages", imageUrls);
    }
  };

  const onSubmit = async (data: TAddProduct) => {
    
    try {
      const res = await createProdut(data).unwrap();
      console.log("Product created:", res);
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm">Product Name</label>
          <input
            type="text"
            {...register("name", { required: "Product Name is required" })}
            className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className={`w-full p-2 border rounded ${errors.description ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className={`w-full p-2 border rounded ${errors.category ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
          </select>
          {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm">Price</label>
          <input
            type="number"
            {...register("price", { required: "Price is required", valueAsNumber: true })}
            step="0.01"
            className={`w-full p-2 border rounded ${errors.price ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
        </div>
       

        {/* Discount */}
        <div>
          <label className="block text-sm">Discount (%)</label>
          <input
            type="number"
            {...register("discount", { valueAsNumber: true })}
            step="0.01"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* ShopId (Dropdown) */}
        <div>
          <label className="block text-sm">Shop</label>
          <select
            {...register("shopId", { required: "Shop is required" })}
            className={`w-full p-2 border rounded ${errors.shopId ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">Select a shop</option>
            {shops?.data?.map((shop: Shop) => (
              <option key={shop.id} value={shop.id}>
                {shop.name}
              </option>
            ))}
          </select>
          {errors.shopId && <p className="text-sm text-red-500">{errors.shopId.message}</p>}
        </div>

        {/* Thumbnail Image */}
        <div>
          <label className="block text-sm">Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailImageUpload}
            className={`w-full p-2 border rounded ${errors.thumbnailImage ? "border-red-500" : "border-gray-300"}`}
          />
          {thumbnailImage && <Image width={100} height={100} src={thumbnailImage} alt="Thumbnail" className="w-32 h-32 object-cover mt-2" />}
          {errors.thumbnailImage && <p className="text-sm text-red-500">{errors.thumbnailImage.message}</p>}
        </div>

        {/* Additional Images */}
        <div>
          <label className="block text-sm">Additional Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleAdditionalImagesUpload}
            className={`w-full p-2 border rounded ${errors.additionalImages ? "border-red-500" : "border-gray-300"}`}
          />
          {additionalImages.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {additionalImages.map((url, index) => (
                <Image key={index} width={100} height={100} src={url} alt={`Additional ${index + 1}`} className="w-32 h-32 object-cover" />
              ))}
            </div>
          )}
        </div>

        {/* Flash Sale */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              onChange={handleFlashSaleToggle}
              checked={flashSaleActive}
              className="mr-2"
            />
            Flash Sale Active
          </label>
          {flashSaleActive && (
           <div>
             <div>
              <label className="block text-sm">Flash Sale Discount (%)</label>
              <input
                type="number"
                {...register("flashSaleDiscount", { required: "Flash Sale Discount is required", valueAsNumber: true })}
                className={`w-full p-2 border rounded ${errors.flashSaleDiscount ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.flashSaleDiscount && <p className="text-sm text-red-500">{errors.flashSaleDiscount.message}</p>}
            </div>
           
            <div>
              <label className="block text-sm">Flash Sale Start Time</label>
              <input
                type="datetime-local"
                {...register("flashSaleStartTime")}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Flash Sale End Time</label>
              <input
                type="datetime-local"
                {...register("flashSaleEndTime")}
                className="w-full p-2 border rounded"
              />
            </div>
         
           </div>
          )}
        </div>

        <button type="submit" className="w-full py-2 bg-green-500 text-white rounded mt-4">
          {isLoading ? "Please Wait..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ProductsManagements;
