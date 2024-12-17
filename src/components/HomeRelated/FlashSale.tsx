// components/FlashSale.tsx
import Link from "next/link";

const FlashSale = () => {
  const flashSaleProducts = [
    { id: 1, name: "Flash Item 1", price: 50, image: "/flash1.jpg" },
    { id: 2, name: "Flash Item 2", price: 75, image: "/flash2.jpg" },
  ];

  return (
    <div className="flash-sale">
      <h2>Flash Sale</h2>
      <div className="flash-products">
        {flashSaleProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <Link href="/flash-sale">
        <button>View All Flash Sale Products</button>
      </Link>
    </div>
  );
};

export default FlashSale;
