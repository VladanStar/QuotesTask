import Header from "./components/Header";
import QuotesItem from "./components/QuotesItem";
import "./App.css";

function App() {
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
