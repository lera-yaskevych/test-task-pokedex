import React from 'react';
import { Table } from '../Table';
import './SelectedCard.css';

interface Props {
  selectedPokemon: SelectedPokemon;
}

export const SelectedCard: React.FC<Props> = (props) => {
  const { selectedPokemon } = props;
  const {
    image,
    name,
    id,
    types,
    stats,
    moves,
    weight,
  } = selectedPokemon;

  return (
    types && stats && (
      <div className="Layout__selected">
        <div className="SelectedCard Layout__selected-card">
          <img
            src={image}
            alt={name}
            className="SelectedCard__image"
          />
          <h2 className="SelectedCard__name">
            {`${name} #${id}`}
          </h2>
          <Table
            types={types}
            stats={stats}
            weight={weight}
            moves={moves}
          />
        </div>
      </div>
    )
  );
};
