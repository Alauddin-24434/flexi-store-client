import { useState } from "react";
import ProductForm from "./ProductForm"; // Import the product form

const ProductsManagements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [currentPage, setCurrentPage] = useState<number>(1);
  // const itemsPerPage = 9;

  // const { data: productData, isLoading: productLoading, error: productError } = useFindAllProductQuery({
  //   page: currentPage,
  //   limit: itemsPerPage,
  //   filter: "",
  // });

  // const handleNextPage = () => {
  //   if (productData?.totalPages && currentPage < productData.totalPages) {
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex flex-col p-6 gap-y-6">
      {/* Add Product Button */}
      <div className="flex justify-between p-6 border rounded-lg">
        <h2 className="text-3xl">Products Management</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="py-2 px-4 bg-green-500 text-white rounded"
        >
          Add Product
        </button>
      </div>

      {/* Modal for Adding Product */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <ProductForm setIsModalOpen={setIsModalOpen} /> 
          </div>
        </div>
      )}

      {/* Product Table */}
      {/* <div className="flex flex-col p-6 border rounded-lg">
        {productLoading && <p>Loading products...</p>}
        {productError && <p>Failed to load products.</p>}

        {!productLoading && productData && (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">No</th>
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productData?.data?.map((product: TAddProduct, index: number) => (
                <tr key={product.id} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{product.name}</td>
                  <td className="border p-2">${product.price}</td>
                  <td className="border p-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
                    <button className="ml-2 px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div> */}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="mx-4">Page {currentPage}</span>
        {/* <button
          onClick={handleNextPage}
          disabled={productData?.totalPages && currentPage >= productData.totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default ProductsManagements;
