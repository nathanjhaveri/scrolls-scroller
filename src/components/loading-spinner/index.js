import React from "react";
import { bool } from "prop-types";
import Loader from "react-loader-spinner";
import "./style.css";

const SAMPLED_CARD_COLOR = "#821d0c";

export default function LoadingSpinner({ isLoading }) {
  return (
    <div className="loading-spinner">
      <Loader
        type="Oval"
        color={SAMPLED_CARD_COLOR}
        height={100}
        width={100}
        visible={isLoading}
      />
    </div>
  );
}

LoadingSpinner.propTypes = {
  isLoading: bool.isRequired,
};
