import React from "react";
import Card from "../shared/Card";
import { useState } from "react";
import Button from "../shared/Button";

const QuotesForm = () => {
  // const [quote, setQuote] = useState({
  //   text: "",
  //   author: "",
  // });
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
//   const [btnDisabled, setBtnDisabled] = useState(true);
//   const [message, setMessage] = useState("Hello");

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
    // setQuote((prev) => {
    //   const { name, value } = e.target;
    //   return { ...prev, [name]: value };
    // });

    // console.log(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(quote);
  //   setQuote()
  // };

  return (
    <Card>
      <form>
        <h2>Add Quotes</h2>
        <div className="input-group">
          <input
            onChange={(e)=>setText(e.target.value)}
            type="text"
            name="text"
            placeholder="Write a quotes"
            // value={text}
          />
          <br />
          <input
            style={{ width: "30px" }}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            name="author"
            placeholder="Author"
            // value={author}
          />
          <Button type="submit" version="secondary" >
            Send
          </Button>
        </div>
        {/* {message && <div className="message"></div>} */}
      </form>
    </Card>
  );
};

export default QuotesForm;
