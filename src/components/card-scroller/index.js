import React from "react";
import { arrayOf, shape, string, func, bool } from "prop-types";
import Card from "../card";
import "./style.css";
import useScrollBottom from "../../hooks/use-scroll-bottom";
import LoadingSpinner from "../loading-spinner";

export default function CardScroller({ cards, onScrollEnd, isLoading }) {
  useScrollBottom(onScrollEnd);

  return (
    <ul className="card-scroller">
      {cards.length === 0 && !isLoading ? (
        <div>No cards found</div>
      ) : (
        cards.map((card, i) => (
          <li key={`card-${i}`}>
            <Card {...card} />
          </li>
        ))
      )}
      <li>
        <LoadingSpinner isLoading={isLoading} />
      </li>
    </ul>
  );
}

CardScroller.propTypes = {
  cards: arrayOf(
    shape({
      imageUrl: string.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      text: string,
      setName: string.isRequired,
    })
  ),
  onScrollEnd: func.isRequired,
  isLoading: bool.isRequired,
};
