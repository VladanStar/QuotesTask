import React from "react";
import Card from "../shared/Card";
import { useState } from "react";

const QuotesForm = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleTextchange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>Add Quotes</h2>
        <div className="input-group">
          <input
            onChange={handleTextchange}
            type="text"
            placeholder="Write a quotes"
            value={text}
          />
          <input onChange={handleTextchange} type="text" placeholder="Author" 
          value={author}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default QuotesForm;
