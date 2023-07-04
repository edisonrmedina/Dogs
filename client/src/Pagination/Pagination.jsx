import React from 'react';
import '../Pagination/Pagination.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    if (pageNumber === currentPage) return;
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <button
        className="pagination-button"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
