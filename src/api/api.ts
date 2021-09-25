const API_URL = 'https://pokeapi.co/api/v2/';

const request = async (url = '') => {
  const response = await fetch(`${API_URL}${url}`);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
};

export const getPokemons = async (quantity: number) => {
  const data = await request(`pokemon/?limit=${quantity}`);
  const response = data.results;

  return response;
};
