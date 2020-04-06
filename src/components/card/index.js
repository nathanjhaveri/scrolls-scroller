import React from "react";
import { string } from "prop-types";
import "./style.css";

export default function Card({ imageUrl, name, type, text, setName }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="card" />
      <dl className="card-attributes">
        <dt>Name</dt>
        <dd>{name}</dd>
        {text && (
          <>
            <dt>Text</dt>
            <dd>{text}</dd>
          </>
        )}
        <dt>Set Name</dt>
        <dd>{setName}</dd>
        <dt>Type</dt>
        <dd>{type}</dd>
      </dl>
    </div>
  );
}

Card.propTypes = {
  imageUrl: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  text: string,
  setName: string.isRequired,
};
