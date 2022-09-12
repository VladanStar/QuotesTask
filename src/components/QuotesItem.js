import React from "react";
import { useState } from "react";

const QuotesItem = () => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState([
    {
        text:"Citat",
        author:"Robert"
    }
  ]);

//   const handleClickPlus = () => {
//     setRating((prev) => {
//       return prev + 1;
//     });
//   };
//   const handleClickMinus = () => {
//     setRating((prev) => {
//       return prev - 1;
//     });
//   };
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">
        {text[0].text}
        <p className="author-display">{text[0].author}</p>
      </div>
      {/* <button onClick={handleClickPlus}>Click rating</button>
      <button onClick={handleClickMinus}>Click rating</button> */}
    </div>
  )
};

export default QuotesItem;
