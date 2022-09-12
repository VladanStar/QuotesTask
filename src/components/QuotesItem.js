import React from "react";
import { useState } from "react";

const QuotesItem = () => {

    const [rating, setRating] = useState(7)
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">
        This is an example of a feedback
        <div className="author-display">Author</div>
      </div>
  
    </div>
  );
};

export default QuotesItem;
