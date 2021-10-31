// External modules
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

// Internal modules
import { GET_POKEMON } from '@/graphql/query';

const usePokemons = name => {
  const [pokemon, setPokemon] = useState({});
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  useEffect(() => {
    const { pokemon } = data ?? {};
    if (pokemon) setPokemon(pokemon);
  }, [data]);

  return { loading, error, pokemon };
};

export default usePokemons;
