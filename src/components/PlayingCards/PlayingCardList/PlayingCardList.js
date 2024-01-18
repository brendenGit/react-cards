import React, { useState, useEffect } from "react";
import PlayingCard from "../PlayingCard/PlayingCard";
import "./PlayingCardList.css";
import useAxios from "../../../hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const url = "https://deckofcardsapi.com/api/deck/new/draw/";
  const { dataArray, loading, error, fetchDataAndUpdateState } = useAxios();

  const handleClick = async () => {
    await fetchDataAndUpdateState(url);
  };

  useEffect(() => {
    setCards(dataArray);
  }, [dataArray]);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleClick} disabled={loading}>
          {loading ? 'Loading...' : 'Add a Playing Card!'}
        </button>
      </div>

      {error && <p>Error: {error.message}</p>}

      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
