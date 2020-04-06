import React from "react";
import { string } from "prop-types";

export default function Card({ imageUrl, name, type, text, set }) {
  return <>{name}</>;
}

Card.propTypes = {
  imageUrl: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  text: string.isRequired,
  set: string.isRequired,
};
