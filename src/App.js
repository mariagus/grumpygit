import React from "react";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator.js";

function App() {
  return (
    <div className="App">
      <h1>
        Grumpy Git's <br />
        Demotivational Quotes
      </h1>
      <QuoteGenerator />
    </div>
  );
}

export default App;
