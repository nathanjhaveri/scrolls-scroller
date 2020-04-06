import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import CardScroller from "./components/card-scroller";

import "./App.css";

function ErrorLoading(error) {
  return <div>Error {error.message}</div>;
}

function Loading() {
  return <div>Loading...</div>;
}

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("https://api.elderscrollslegends.io/v1/cards");
        const data = await res.json();
        setCards(data.cards);
      } catch (e) {
        setError(e);
      }

      setIsLoaded(true);
    };

    fetchCards();
  }, []);

  if (error) {
    return <ErrorLoading error={error} />;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return <CardScroller cards={cards} />;
  }
}

export default App;
