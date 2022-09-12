import React from "react";
import Card from "../shared/Card";
import { useState } from "react";
import Button from "../shared/Button";

const QuotesForm = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("Hello");

  const handleTextchange = ({ target: { value } }) => {
    if(text ==="" || author===""){
        setBtnDisabled(true);
        setMessage(null)
    }
    else if(text !=="" && author !=="" && text.trim().length <= 10 && author.trim().length <=10) {
        setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    }
    else {
        setMessage(null)
        setBtnDisabled(false)
      }
      setText(value);
      setAuthor(value)
    
    // console.log(e.target.value);
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
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message"></div>}
      </form>
    </Card>
  );
};

export default QuotesForm;
