import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", alignItems: "center", gap: "0.5rem" }}>
      
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: currentPage === 1 ? "#ccc" : "#1CD15D",
          color: "#fff",
          border: "none",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
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

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: currentPage === totalPages ? "#ccc" : "#1CD15D",
          color: "#fff",
          border: "none",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
      
    </div>
  );
};

export default Pagination;
