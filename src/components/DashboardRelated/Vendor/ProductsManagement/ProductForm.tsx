/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCreateProdutMutation } from "@/redux/features/products/productsApi";
import { useState } from "react";

interface ProductFormProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const ProductForm = ({ setIsModalOpen }: ProductFormProps) => {
  const [name, setName] = useState("Phone");
  const [price, setPrice] = useState<number>(20);
  const [description, setDescription] = useState("fff");
  const [categoryId, setCategoryId] = useState("cm78wcqar0002l103s00cj5rb");
  const [stock, setStock] = useState<number>(1);
  const [shopId, setShopId] = useState("cm78w9hze0001l1030y3kelbj");
  const [weight, setWeight] = useState<number>(10);
  const [tags, setTags] = useState<string[]>(["#Smartphones", "#Laptops", "#Tablets"]);
  const [discount, setDiscount] = useState<number>(10);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);

  const [createProduct, { data, error }] = useCreateProdutMutation();
  console.log("data", data);
  console.log("error", error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.toString()); // Ensure it's a string
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    formData.append("stock", stock.toString()); // Ensure it's a string
    formData.append("shopId", shopId);
    formData.append("weight", weight.toString()); // Ensure it's a string
    formData.append("tags", JSON.stringify(tags)); // Convert array to JSON string
    formData.append("discount", discount.toString()); // Ensure it's a string
  
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }
  
    additionalImages.forEach((image, index) => {
      formData.append("additionalImages", image);
    });
  
    // Log FormData values
    console.log("FormData entries:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  
    await createProduct(formData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border p-2 w-full"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium">Discount (%)</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>
      
      <div>
        <label className="block font-medium">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

  

      <div>
        <label className="block font-medium">Tags (comma-separated)</label>
        <input
          type="text"
          value={tags.join(", ")}
          onChange={(e) => setTags(e.target.value.split(",").map((tag) => tag.trim()))}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium">Category ID</label>
        <input
          type="text"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border p-2 w-full"
        />
      </div>


      <div>
        <label className="block font-medium">Shop ID</label>
        <input
          type="text"
          value={shopId}
          onChange={(e) => setShopId(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      

      <div>
        <label className="block font-medium">Thumbnail Image</label>
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files ? e.target.files[0] : null)}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium">Additional Images</label>
        <input
          type="file"
          multiple={true}
          onChange={(e) => setAdditionalImages(e.target.files ? Array.from(e.target.files) : [])}
          className="border p-2 w-full"
        />
      </div>

      <div className="flex justify-end gap-x-4">
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="py-2 px-4 bg-gray-500 text-white rounded"
        >
          Cancel
        </button>
        <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;