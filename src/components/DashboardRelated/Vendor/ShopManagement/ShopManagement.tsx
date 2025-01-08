
import { useCreateShopMutation, useFindAllShopsQuery, useUpdateShopMutation } from "@/redux/features/shop/shopApi";
import { useAppSelector } from "@/redux/hooks/hooks";
import { Shop } from "@/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ShopManagement = () => {
  const { data: shops, isLoading, error } = useFindAllShopsQuery(undefined);

  const [createShop] = useCreateShopMutation();
  const [updateShop] = useUpdateShopMutation();
  const [editingShop, setEditingShop] = useState<Shop | null>(null);

  const user = useAppSelector(state => state.auth.user);
  console.log(user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Shop>();

  const onSubmit = async (formData: Shop) => {
    const payload = {
      ...formData,
      vendorId: user?.id,
    };
console.log("check",payload)
    try {
      if (editingShop) {
        // Update shop
        await updateShop({ ...editingShop, ...payload }).unwrap();
        setEditingShop(null);
      } else {
        // Create shop
        await createShop(payload).unwrap();
      }
      reset();
    } catch (err) {
      console.error("Error submitting shop:", err);
    }
  };

  const handleEdit = (shop: Shop) => {
    setEditingShop(shop);
    reset(shop); // Populate form with existing shop data
  };

  const handleCancelEdit = () => {
    setEditingShop(null);
    reset();
  };

  if (isLoading) return <p>Loading shops...</p>;
   // TypeScript type guard for error object
   if (error) {
    const errorMessage = (error as { message: string }).message || 'An unexpected error occurred';
    return <p>Error fetching shops: {errorMessage}</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Shop Management</h2>

      {/* Shop List */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold">All Shops</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Vendor</th>
                <th className="px-4 py-2">Products</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {shops?.data?.map((shop:Shop) => (
                <tr key={shop.id}>
                  <td className="px-4 py-2">{shop.name}</td>
                  <td className="px-4 py-2">{shop.description}</td>
                  <td className="px-4 py-2">{shop.vendor?.name}</td>
                  <td className="px-4 py-2">{shop.products?.length || 0}</td>
                  <td className="px-4 py-2">
                    <button
                      className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
                      onClick={() => handleEdit(shop)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Shop Form */}
      <div>
        <h3 className="text-lg font-semibold">
          {editingShop ? "Edit Shop" : "Add New Shop"}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm">Shop Name</label>
            <input
              type="text"
              {...register("name", { required: "Shop name is required" })}
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className={`w-full p-2 border rounded ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm">Logo URL</label>
            <input
              type="text"
              {...register("logo")}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              {editingShop ? "Update Shop" : "Add Shop"}
            </button>
            {editingShop && (
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopManagement;
