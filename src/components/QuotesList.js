import React from "react";
import QuotesItem from "./QuotesItem";

const QuotesList = ({ quotes, handleRatingPlus }) => {
  if (!quotes || quotes.length === 0) {
    return <p>No Quotes Yet</p>;
  }
  return (
    <div className="feedback-list">
      {quotes.map((item) => (
        <QuotesItem
          key={item.id}
          item={item}
          handleRatingPlus={handleRatingPlus}
        />
      ))}
    </div>
  );
};

export default QuotesList;
