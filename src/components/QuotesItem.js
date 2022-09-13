import React, { startTransition } from "react";
import { useState } from "react";
import Card from "./shared/Card";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const QuotesItem = ({ item, handleRatingPlus }) => {
  //   const [rating, setRating] = useState(7);
  const [counterUp, setCounterUp] = useState(0);
  const [counterDown, setCounterDown] = useState(0);

  var average = Math.round(
    (counterUp / (counterDown + counterUp)) * 100
  ).toFixed(2);
  const colorFont = "";

  switch (average / 100) {
    case 10:
    case 9:
      colorFont = "green";
      break;
    case 8:
    case 7:
    case 6:
      colorFont = "blue";
      break;

    case 5:
      colorFont = "darkred";
      break;

    default:
      break;
  }

  return (
    <Card>
      <div className="display">
        <div className="num-display">
          <button
            onClick={() => {
              setCounterUp(counterUp + 1);
            }}
          >
            <FaChevronUp />
          </button>
          <div style={{ color: colorFont, width: "12px" }}>
            {isNaN(average) ? "0%" : average + "%"}
          </div>
          <div>
            {counterUp} / {counterDown}
          </div>
          <button
            onClick={() => {
              setCounterDown(counterDown + 1);
            }}
          >
            <FaChevronDown />
          </button>
        </div>
        <div className="text-display">
          {item.text}
          <p className="author-display">{item.author}</p>
        </div>
      </div>
    </Card>
  );
};

export default QuotesItem;
