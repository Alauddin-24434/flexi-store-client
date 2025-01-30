import React from 'react';

const OrderHistory = () => {
    return (
        <div className=" flex flex-col p-6 gap-y-6">

  
        {/* <div className="flex justify-between p-6 border rounded-lg">
          <h2 className="text-3xl">Shop Management</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="py-2 px-4 bg-green-500 text-white rounded"
          >
            Add Shop
          </button>
        </div>
        {isModalOpen && (
  
  
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm">Shop Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Shop name is required" })}
                    className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"
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
                    className={`w-full p-2 border rounded ${errors.description ? "border-red-500" : "border-gray-300"
                      }`}
                  ></textarea>
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>
  
                <div>
                  <label className="block text-sm">Logo Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoImageUpload}
                    className={`w-full p-2 border rounded ${errors.logo ? "border-red-500" : "border-gray-300"
                      }`}
                  />
  
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
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-2 px-4 bg-gray-400 text-white rounded"
                  >
                    Cancel
                  </button>
  
                  <button
                    type="submit"
                    className="py-2 px-4 bg-green-500 text-white rounded"
                  >
                    {isLoading ? "Please Wait..." : "Submit"}
                  </button>
                </div>
  
  
              </form>
            </div>
          </div>
  
        )}
  
  
        <div className="flex flex-col p-6 border rounded-lg">
          {isLoading && <p>Loading Shop...</p>}
          {error && <p>Failed to load Shop.</p>}
  
          {!isLoading && (
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">No</th>
                  <th className="border p-2">Shop Name</th>
                  <th className="border p-2">Vendor Name</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {shops?.data?.map((shop, index) => (
                  <tr key={shop.id} className="text-center">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{shop?.name}</td>
                    <td className="border p-2">{shop?.vendor?.name}</td>
                    <td className="border p-2">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
                      <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
          )}
        </div>
   */}
      </div>
    );
};

export default OrderHistory;