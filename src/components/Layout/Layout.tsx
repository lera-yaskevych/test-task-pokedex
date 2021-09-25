import React, { useState, useEffect } from 'react';
import { Loader } from '../Loader';
import { getPokemons } from '../../api';
import { Filter } from '../Filter';
import { PokemonsList } from '../PokemonsList';
import { SelectedCard } from '../SelectedCard';
import './Layout.css';
import './Error.css';

export const Layout: React.FC = () => {
  const pokemonsCount = 84;
  const initialVisibleCount = 12;
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasLoadindError, setLoadindError] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [selectedPokemon, setSelectedPokemon] = useState<SelectedPokemon | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getPokemons(pokemonsCount);
        const dataArray = [];

        for (let i = 0; i < data.length; i += 1) {
          const pokemonsPromise = fetch(data[i].url)
            .then(response => response.json());

          dataArray.push(pokemonsPromise);
        }

        const pokemonsArray = await Promise.all(dataArray);

        if (!selectedType) {
          setFilteredPokemons(pokemonsArray);
        }

        setPokemons(pokemonsArray);
      } catch (error) {
        setLoadindError(true);
      }

      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    let filteredPokemonsArray;

    if (selectedType === 'all') {
      filteredPokemonsArray = pokemons;
    } else {
      filteredPokemonsArray = pokemons.filter(pokemon => pokemon.types
        .find(typeInstance => typeInstance.type.name === selectedType));
    }

    setFilteredPokemons(filteredPokemonsArray);
    setVisibleCount(initialVisibleCount);
  }, [selectedType]);

  const getPokemonStats = (pokemon: Pokemon) => {
    const stats = {} as Stats;

    pokemon.stats.map((statInstance) => {
      switch (statInstance.stat.name) {
        case 'attack':
          stats.attack = statInstance.base_stat;
          break;
        case 'defense':
          stats.defense = statInstance.base_stat;
          break;
        case 'speed':
          stats.speed = statInstance.base_stat;
          break;
        case 'hp':
          stats.hp = statInstance.base_stat;
          break;
        case 'special-defense':
          stats.spDefense = statInstance.base_stat;
          break;
        case 'special-attack':
          stats.spAttack = statInstance.base_stat;
          break;
        default:
          break;
      }

      return stats;
    });

    return stats;
  };

  const getPokemonTypes = (pokemon: Pokemon) => {
    const types = pokemon.types
      .map(typeInstance => (
        typeInstance.type.name));

    return types;
  };

  const selectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: getPokemonTypes(pokemon),
      stats: getPokemonStats(pokemon),
      weight: pokemon.weight,
      moves: pokemon.moves.length,
    });
  };

  const showMore = () => {
    setVisibleCount(lastVisible => lastVisible + initialVisibleCount);
  };

  return (
    <div className="Layout">
      {hasLoadindError && (
        <p className="Error">
          Looks like we have a problem.
          An error occurred while loading this page.
        </p>
      )}

      {loading && (
        <Loader />
      )}

      {pokemons.length > 0 && (
        <>
          <Filter
            pokemons={pokemons}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <PokemonsList
            visibleCount={visibleCount}
            pokemons={filteredPokemons}
            selectPokemon={selectPokemon}
          />
          <button
            type="button"
            className="Layout__button"
            onClick={showMore}
            disabled={filteredPokemons.length <= visibleCount}
          >
            Load more
          </button>
        </>
      )}

      {selectedPokemon && (
        <SelectedCard selectedPokemon={selectedPokemon} />
      )}
    </div>
  );
};
