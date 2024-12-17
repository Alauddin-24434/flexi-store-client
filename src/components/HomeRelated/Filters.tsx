import Link from "next/link";

const Filters = () => {
  return (
    <div className="filters">
      <Link href={{ pathname: "/", query: { price: "0-100" } }}>
        <button>Price: $0 - $100</button>
      </Link>
      <Link href={{ pathname: "/", query: { category: "Clothing" } }}>
        <button>Clothing</button>
      </Link>
      <input
        type="text"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const searchKeyword = (e.target as HTMLInputElement).value;
            window.location.href = `/?keyword=${searchKeyword}`; // Simple fallback
          }
        }}
      />
    </div>
  );
};

export default Filters;
