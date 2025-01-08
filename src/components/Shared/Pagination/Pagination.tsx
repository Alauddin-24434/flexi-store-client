import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            margin: "0 0.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: page === currentPage ? "#1CD15D" : "#fff",
            color: page === currentPage ? "#fff" : "#000",
            border: "1px solid #1CD15D",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
