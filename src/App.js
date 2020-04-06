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
        const cards = data.cards.map((card) => ({
          imageUrl: card.imageUrl,
          name: card.name,
          type: card.type,
          text: card.text,
          setName: card.set.name,
        }));

        setCards(cards);
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
