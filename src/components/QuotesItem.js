import React from "react";
import { useState } from "react";

const QuotesItem = ({item}) => {
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
      <div className="num-display">{item.rating}</div>
      <div className="text-display">
        {item.text}
        <p className="author-display">{item.author}</p>
      </div>
      {/* <button onClick={handleClickPlus}>Click rating</button>
      <button onClick={handleClickMinus}>Click rating</button> */}
    </div>
  )
};

export default QuotesItem;
