import Header from "./components/Header";
import QuotesItem from "./components/QuotesItem";
import QuotesData from "./components/data/QuotesData";
import { useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState(QuotesData);
  return (
    <>
      <Header text="QUOTES" />
      <div className="container">
        <QuotesItem />
      </div>
    </>
  );
}

export default App;
