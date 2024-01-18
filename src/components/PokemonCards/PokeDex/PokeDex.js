import React, { useState, useEffect } from "react";
import PokemonSelect from "../PokemonSelect";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokeDex.css";
import useAxios from "../../../hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const { dataArray, loading, error, fetchDataAndUpdateState } = useAxios();

  const handleClick = async (name) => {
    await fetchDataAndUpdateState(url, name);
  };

  useEffect(() => {
    setPokemon(dataArray);
  }, [dataArray]);

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={handleClick} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
