import React, { useEffect, useState } from "react";
import CardScroller from "./components/card-scroller";
import { fetchCards } from "./api";

import "./App.css";

function ErrorLoading(error) {
  return <div>Error {JSON.stringify(error)}</div>;
}

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCards, setTotalCards] = useState(1);

  useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);

      try {
        const { _totalCount, cards: newCards } = await fetchCards(page, "");
        const cards = newCards.map((card) => ({
          imageUrl: card.imageUrl,
          name: card.name,
          type: card.type,
          text: card.text,
          setName: card.set.name,
        }));

        setTotalCards(_totalCount);
        setCards((oldCards) => [...oldCards, ...cards]);
      } catch (e) {
        setError("Error fetching cards");
        throw e;
      }

      setIsLoading(false);
    };

    loadCards();
  }, [page]);

  const onScrollEnd = () => {
    if (cards.length < totalCards && !isLoading) {
      setPage((oldPage) => oldPage + 1);
    }
  };

  if (error) {
    return <ErrorLoading error={error} />;
  } else {
    return (
      <CardScroller
        cards={cards}
        onScrollEnd={onScrollEnd}
        isLoading={isLoading}
      />
    );
  }
}

export default App;
