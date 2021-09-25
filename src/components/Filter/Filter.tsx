import React, { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import './Filter.css';

interface Props {
  pokemons: Pokemon[];
  setSelectedType: Dispatch<SetStateAction<string>>;
  selectedType: string;
}

export const Filter: React.FC<Props> = (props) => {
  const {
    pokemons,
    setSelectedType,
    selectedType,
  } = props;

  const getTypes = () => {
    const types: string[] = [];

    pokemons.forEach(pokemon => pokemon.types
      .forEach(typeInstance => types.push(typeInstance.type.name)));

    return [...new Set(types)];
  };

  const pokemonTypes = getTypes();

  return (
    <form className="Layout__filter Filter">
      <select
        onChange={(event) => {
          setSelectedType(event.target.value);
        }}
        defaultValue=""
        className={classNames('Filter__select', {
          'Filter__select--default': !selectedType,
        })}
      >
        <option
          value=""
          disabled
          className="Filter__option--default"
        >
          Choose pokémon type
        </option>
        <option
          value="all"
          className="Filter__option"
        >
          all
        </option>
        {pokemonTypes.map(type => (
          <option
            key={type}
            value={type}
            className="Filter__option"
          >
            {type}
          </option>
        ))}
      </select>
    </form>
  );
};
