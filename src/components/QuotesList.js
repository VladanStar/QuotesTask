import React from "react";
import QuotesItem from "./QuotesItem";
import { useState } from "react";
import Pagination from "./Pagination";

const QuotesList = ({ quotes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!quotes || quotes.length === 0) {
    return <p>No Quotes Yet</p>;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = quotes.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="feedback-list">
      {quotes.map((item) => (
        <QuotesItem key={item.id} item={item} />
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={quotes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default QuotesList;
