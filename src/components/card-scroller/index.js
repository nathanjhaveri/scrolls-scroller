import React from "react";
import { arrayOf, shape, string } from "prop-types";
import Card from "../card";
import "./style.css";

export default function CardScroller({ cards }) {
  return (
    <ul className="card-scroller">
      {cards.map((card) => (
        <li>
          <Card {...card} />
        </li>
      ))}
    </ul>
  );
}

CardScroller.propTypes = {
  cards: arrayOf(
    shape({
      imageUrl: string.isRequired,
      name: string.isRequired,
      type: string.isRequired,
      text: string.isRequired,
      setName: string.isRequired,
    })
  ),
};