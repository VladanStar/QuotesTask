import React from "react";
import Card from "../shared/Card";
import { useState } from "react";
import Button from "../shared/Button";

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
          /><br/>
          <input style={{width:"30px"}}onChange={handleTextchange} type="text" placeholder="Author" 
          value={author}
          />
          <Button type="submit" version="secondary">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default QuotesForm;
