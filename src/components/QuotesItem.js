import React, { startTransition } from "react";
import { useState } from "react";
import Card from "./shared/Card";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const QuotesItem = ({ item, handleRatingPlus }) => {
//   const [rating, setRating] = useState(7);
//   const [text, setText] = useState([
//     {
//       text: "Citat",
//       author: "Robert",
//     },
//   ]);
  //   const handleClickPlus = (id) => {
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //   };
//   const handleClickMinus = (id) => {
//     setRating((prev) => {
//       return prev - 1;
//     });
//   };

  return (
    <Card>
      <div className="num-display">
        <button onClick={()=> handleRatingPlus(item.id)}>
          <FaChevronUp />
        </button>
        {item.rating}
        <button onClick={()=> handleRatingPlus(item.id)}>
          <FaChevronDown />
        </button>
      </div>
      <div className="text-display">
        {item.text}
        <p className="author-display">{item.author}</p>
      </div>
      {/* <button onClick={handleClickPlus}>Click rating</button>
      <button onClick={handleClickMinus}>Click rating</button> */}
    </Card>
  );
};

export default QuotesItem;
