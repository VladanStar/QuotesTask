import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

const QuotesForm = ({handleAdd}) => {
  // const [quote, setQuote] = useState({
  //   text: "",
  //   author: "",
  // });
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  //   const [btnDisabled, setBtnDisabled] = useState(true);
   const [message, setMessage] = useState("Hello");

  const handleChange = (e) => {
    // if (text === "" || author === "") {
    //   setBtnDisabled(true);
    //   setMessage(null);
    // } else if (
    //   text !== "" &&
    //   author !== "" &&
    //   text.trim().length <= 10 &&
    //   author.trim().length <= 10
    // ) {
    //   setMessage("Text must be at least 10 characters");
    //   setBtnDisabled(true);
    // } else {
    //   setMessage(null);
    //   setBtnDisabled(false);
    // }
    // setText(e.target.value);
    //setAuthor(e.target.value)
    // console.log(e.target.value);
  };
   const handleSubmit = (e) => {
    if (text === "" || author === "") {
    setMessage(null);
    }else if (
       text !== "" &&
        author !== "" &&
         text.trim().length <= 10 &&
        author.trim().length <= 10
      ) {
       setMessage("Text must be at least 10 characters");
      
     } else {
        setMessage(null);
     
     }
    e.preventDefault();
   console.log("");
   const newQuote = {
    text:text,
    author:author
   }
   handleAdd(newQuote)
   setText("");
   setAuthor("");
  
   };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add Quotes</h2>
        <div className="input-group">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="text"
            placeholder="Write a quotes"
            value={text}
          />
          <br />
          <input
            style={{ width: "30px" }}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            name="author"
            placeholder="Author"
            value={author}
          />
          <Button type="submit" version="secondary">
            Send
          </Button>
        </div>
         {message && <div className="message"></div>} 
      </form>
    </Card>
  );
};

export default QuotesForm;
