import React from "react";
import backOfCard from "../../../../src/assets/back.png";
import "./PlayingCard.css"
import useFlipToggle from "../../../hooks/useFlipToggle";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlipToggle()

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
