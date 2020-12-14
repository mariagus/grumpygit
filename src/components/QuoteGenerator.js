import React, { useState, useEffect } from "react";
import speechbubble from "../assets/square.png";
import grumpy from "../assets/grump.png";
import "./QuoteGenerator.css";

function QuoteGenerator() {
  const [initPhrase, setInitPhrase] = useState(true);
  const [rotate, setRotate] = useState(0);
  const [displayedQuote, setDisplayedQuote] = useState("");
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (count > randomArr.length) {
      setReset(true);
    }
  }, [count]);

  function handleClick() {
    setInitPhrase(false);
    setRotate(1);
    setCount(count + 1);
    setDisplayedQuote(randomArr[count]);
  }

  function resetGame() {
    window.location.reload(false);
  }

  return (
    <div className="main">
      <div className="speechBubbleWrapper">
        <img id="bubble" src={speechbubble} alt="quotebubble" />
        <h2>
          {initPhrase ? "click my face to ruin your day" : ""}
          {displayedQuote}
          {reset ? (
            <button className="button" onClick={resetGame}>
              "RESET"
            </button>
          ) : null}
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
  "Just keep telling yourself you're special, like the other seven billion.",
  "Keep chasing your dreams, even if it means making yourself and everyone around you miserable.",
  "Nobody cares, so stop worrying! Geez, so self-absorbed!",
  "There, there! You're not a loser. You're just not much of a winner either.",
  "That's right, waste more time looking at this stupid page. Your time is worthless anyway.",
  "I once had a dream, and then I got sober.",
  "Leave me alone! I need my nap.",
  "Working is for fools. I just found myself a rich lady friend.",
];
let randomArr = quoteArr.sort(() => Math.random() - 0.5);

export default QuoteGenerator;
