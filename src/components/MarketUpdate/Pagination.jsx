import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const scrollToTop = () => {
    const container = document.querySelector(".market-content-scrollbar");
    if (container) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="pagination-container">
      {pages.map((page, index) => (
        <button
          key={index}
          className={page == currentPage ? "pagination-active" : ""}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
