// External modules
import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

// Internal modules
import { GET_POKEMONS } from '@/graphql/query';

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
