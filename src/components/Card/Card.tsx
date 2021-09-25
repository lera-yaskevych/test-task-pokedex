import React from 'react';
import './Card.css';

interface Props {
  pokemon: Pokemon;
  selectPokemon: (pokemon: Pokemon) => void;
}

export const Card: React.FC<Props> = (props) => {
  const {
    pokemon,
    selectPokemon,
  } = props;
  const {
    sprites,
    name,
    types,
  } = pokemon;

  return (
    <button
      type="button"
      onClick={() => selectPokemon(pokemon)}
      className="Layout__clickable-card"
    >
      <img
        src={sprites.front_default}
        alt={name}
        className="Card__image"
      />
      <p className="Card__name">
        {name}
      </p>
      <div className="Card__types">
        {types.map(typesInstance => (
          <p
            className={`Card__type Card__type--${typesInstance.type.name}`}
            key={typesInstance.type.url}
          >
            {typesInstance.type.name}
          </p>
        ))}
      </div>
    </button>
  );
};
