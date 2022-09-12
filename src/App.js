import Header from "./components/Header";
import QuotesList from "./components/QuotesList";
import QuotesData from "./components/data/QuotesData";
import { useState } from "react";
// import Card from "./components/shared/Card";
import QuotesStats from "./components/QuotesStats";
import QuotesForm from "./components/data/QuotesForm";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState(QuotesData);
  const [rating, setRating] = useState("");

  return (
    <>
      <Header text="QUOTES" />

      <div className="container">
        <QuotesForm />
        <QuotesStats  quotes={quotes}/>
        <QuotesList quotes={quotes} />
      </div>
    </>
  );
}

export default App;
