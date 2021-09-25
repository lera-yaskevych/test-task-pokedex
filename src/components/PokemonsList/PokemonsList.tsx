import React from 'react';
import { Card } from '../Card';
import './PokemonsList.css';

interface Props {
  pokemons: Pokemon[];
  selectPokemon: (pokemon: Pokemon) => void;
  visibleCount: number;
}

export const PokemonsList: React.FC<Props> = (props) => {
  const {
    pokemons,
    selectPokemon,
    visibleCount,
  } = props;

  return (
    <ul className="Layout__list">
      {pokemons.slice(0, visibleCount).map(pokemon => (
        <li
          key={pokemon.id}
          className="Layout__card Card"
        >
          <Card
            pokemon={pokemon}
            selectPokemon={selectPokemon}
          />
        </li>
      ))}
    </ul>
  );
};
