"use client";
import { useFindShopByIdQuery, useFlowShopMutation } from '@/redux/features/shop/shopApi';
import React, { use, useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Follower {
  id: string;
  name: string;
  email: string;
}

interface Shop {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  followers: Follower[];
  products: Product[];
  followerCount: number;
  isFollowing: boolean;
}

interface IProps {
  params: Promise<{
    id: number;
  }>;
}

const ShopPage = ({ params }: IProps) => {
  const resolvedParams = use(params);
  const id = Number(resolvedParams.id);
  const { data, error, isLoading } = useFindShopByIdQuery(id);
  const [followShop, { isLoading: isMutating }] = useFlowShopMutation(); // Follow mutation
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const userId = 1; // Replace this with actual user ID
  const email = "t@example2.com"; // Replace this with the actual email

  useEffect(() => {
    if (data) {
      setIsFollowing(data?.data?.isFollowing); // Assuming the shop object has isFollowing
    }
  }, [data]);

  const shop = data?.data as Shop | undefined;

  // Filter followers based on email
  const filteredFollowers = shop?.followers.some(follower => follower.email === email);

  const handleFollowToggle = async () => {
    if (!shop) return;

    try {
      const action = isFollowing ? 'unfollow' : 'follow'; // Toggle action between follow/unfollow
      await followShop({ userId, shopId: id, action }).unwrap();
      setIsFollowing(!isFollowing); // Toggle the state after successful mutation
    } catch (err) {
      console.error("Error following/unfollowing shop:", err);
    }
  };

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error loading shop</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Shop Header Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 mb-8">
        <div className="flex items-center space-x-4">
          {/* Shop Logo */}
          {shop?.logo ? (
            <img
              src={shop.logo}
              alt={`${shop.name} logo`}
              className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
              No Logo
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{shop?.name}</h1>
            <p className="text-gray-500">Vendor: {shop?.vendor?.name}</p>
          </div>
        </div>
        <p className="text-gray-700 mt-2">{shop?.description}</p>
        <div className="flex items-center space-x-2 mt-4">
          <button
            className={`px-4 py-2 rounded-full ${isFollowing ? 'bg-gray-500' : 'bg-green-500'} text-white`}
            onClick={handleFollowToggle}
            disabled={isMutating} // Disable the button during mutation
          >
            {filteredFollowers ? 'Unfollow' : 'Follow'} Shop
          </button>
          <span className="text-gray-600">{shop?.followerCount} Followers</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shop?.products?.map((product: Product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button className="w-full py-2 bg-green-500 text-white rounded-lg mt-2">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
