import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";

const Header = ({ text }) => {
  return (
   
      <header>
       
        <div className="container">
          <h2>{text}</h2>
        </div>
      
      </header>
    
  );
};

export default Header;
