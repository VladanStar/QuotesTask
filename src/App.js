import Header from "./components/Header";
import QuotesList from "./components/QuotesList";
import QuotesData from "./components/data/QuotesData";
import { useState } from "react";
import {v4 as uuidv4} from "uuid"
// import Card from "./components/shared/Card";
import QuotesStats from "./components/QuotesStats";
import QuotesForm from "./components/QuotesForm";
import AboutUs from "./components/AboutUs";
import {BrowserRouter as Router, Route, } from "react-router-dom"
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState(QuotesData);
  const [rating, setRating] = useState("");
  const addQuote= (newQuote)=>{
    newQuote.id = uuidv4()
    console.log(newQuote)
    setQuotes([newQuote,...quotes])

  }

  return (
    <>
    <Router>
      <Header text="QUOTES" />

      <div className="container">
      <QuotesForm  handleAdd ={addQuote}/>
        <QuotesStats  quotes={quotes}/>
        <QuotesList quotes={quotes} />
        <Route path='/about'>This is about route</Route>
      </div>
      </Router>
    </>
  );
}

export default App;
