import React, { useState } from "react";
import grumpy from "./assets/grump.png";
import speechbubble from "./assets/square.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Grumpy Git's <br />
        Demotivational Quotes
      </h1>
      <GrumpyMan />
    </div>
  );
}

function GrumpyMan() {
  const [initPhrase, setInitPhrase] = useState(true);
  const [rotate, setRotate] = useState(0);
  const [quote, setQuote] = useState("");

  function handleClick() {
    setInitPhrase(false);
    setRotate(1);
    setQuote(quoteArr[Math.floor(Math.random() * quoteArr.length)]);
  }

  return (
    <div className="main">
      <div className="speechBubbleWrapper">
        <img id="bubble" src={speechbubble} alt="quotebubble" />
        <h2>
          {initPhrase ? "click my face to ruin your day" : ""}
          {quote}
        </h2>
        <img
          src={grumpy}
          onClick={handleClick}
          onAnimationEnd={() => setRotate(0)}
          rotate={rotate}
          className="grumpy"
          alt="grumpyMan"
        />
      </div>
    </div>
  );
}
const quoteArr = [
  "Just keep telling yourself you're special, like the other seven billion",
  "Keep chasing your dreams, even if it means making yourself and everyone around you miserable",
  "Nobody cares, so stop worrying! Geez, so self-absorbed!",
  "There, there! You're not a loser. You're just not much of a winner.",
  "Sorry, I wasn't listening. You told that story already",
];

export default App;
