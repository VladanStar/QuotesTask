import Header from "./components/Header";
import QuotesList from "./components/QuotesList";
import QuotesData from "./components/data/QuotesData";
import { useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState(QuotesData);
  return (
    <>
      <Header text="QUOTES" />
      <div className="container">
        <QuotesList  quotes= {quotes}/>
     
      </div>
    </>
  );
}

export default App;
