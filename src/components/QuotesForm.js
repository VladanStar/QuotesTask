import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import { Button } from "react-bootstrap";

const QuotesForm = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("Hello");

  const handleChange = (e) => {
    if (text === "" || author === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (
      text !== "" &&
      author !== "" &&
      text.trim().length <= 10 &&
      author.trim().length <= 10
    ) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
    setAuthor(e.target.value1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newQuote = {
        text: text,
        author: author,
      };
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add Quotes</h2>
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            name="text"
            placeholder="Write a quotes"
            value={text}
          />
          <br />
          <input
            style={{ width: "30px" }}
            onChange={handleChange}
            type="text"
            name="author"
            placeholder="Author"
            value1={author}
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
