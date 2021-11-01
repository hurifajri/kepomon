// External modules
import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

// Internal modules
import { GET_POKEMONS } from '@/graphql/query';

/**
 * Hook to fetch pokemons data with `useLazyQuery`
 * @param {Array} initialPokemons The initial pokemons data to use for the first time
 * @returns {Object} The result from the data fetching
 */
const usePokemons = initialPokemons => {
  const [pokemons, setPokemons] = useState(initialPokemons);
  const [getPokemons, { data, loading, error }] = useLazyQuery(GET_POKEMONS);

  useEffect(() => {
    const newPokemons = data?.pokemons?.results;
    if (newPokemons) setPokemons(pokemons => [...pokemons, ...newPokemons]);
  }, [data]);

  return { loading, error, pokemons, getPokemons };
};

export default usePokemons;
