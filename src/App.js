import Header from "./components/Header";
import QuotesList from "./components/QuotesList";
import QuotesData from "./components/data/QuotesData";
import { useState } from "react";
// import Card from "./components/shared/Card";
import QuotesStats from "./components/QuotesStats";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState(QuotesData);
  const [rating, setRating] = useState("");

  const handlePlusRating = (id) => {
    if (window.confirm("Are you sure you want change rating")) {
      {
        QuotesData.map((item) => item[id].rating + 1);
      }
    }
    console.log("App", id);
  };

  return (
    <>
      <Header text="QUOTES" />
      <div className="container">
        <QuotesList quotes={quotes} handleRatingPlus={handlePlusRating} />
      </div>
    </>
  );
}

export default App;
