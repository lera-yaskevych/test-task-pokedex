/// <reference types="react-scripts" />

interface Pokemon {
  id: number;
  sprites: {
    front_default: string;
  };
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
  moves: object[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    }
  }[];
}

interface SelectedPokemon {
  id: number;
  image: string;
  name: string;
  types: string[] | null;
  stats: Stats | null;
  weight: number;
  moves: number;
}

interface Stats {
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  spDefense: number;
  spAttack: number;
}
