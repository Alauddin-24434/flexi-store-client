// components/Categories.tsx
import Link from "next/link";

const Categories = () => {
  const categories = ["Electronics", "Clothing", "Home Appliances"];

  return (
    <div className="categories">
      {categories.map((category) => (
        <Link 
          key={category} 
          href={{ pathname: "/all-products", query: { category } }} 
          passHref
        >
          <button>{category}</button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
