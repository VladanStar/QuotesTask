import React from "react";
import QuotesItem from "./QuotesItem";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const QuotesList = ({ quotes }) => {
  const [pageNumber, setPageNumber] = useState(0);
  
  const quotesPerPage = 5;
  const pagesVisited = pageNumber * quotesPerPage;

  if (!quotes || quotes.length === 0) {
    return <p>No Quotes Yet</p>;
  }

  const pageCount = Math.ceil(quotes.length / quotesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="feedback-list">

      {quotes.map((item) => (
        <QuotesItem key={item.id} item={item} />
        
    
      ))}
      
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
   
  );
};

export default QuotesList;
