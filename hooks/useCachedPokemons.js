// External modules
import { useEffect, useState } from 'react';

const useCachedPokemons = initialPokemons => {
  // Local storage key
  const key = 'pokemons';

  const [pokemons, setPokemons] = useState(initialPokemons);

  useEffect(() => {
    // Direct exit if no `initialPokemons` is provided
    if (!initialPokemons) return null;

    // Check for cached pokemons
    const cachedPokemons = JSON.parse(localStorage.getItem(key));

    // If pokemons are exist in local storage, get it!
    if (cachedPokemons?.length > 0) {
      setPokemons(cachedPokemons);

      return pokemons;
    }

    // Otherwise set current pokemons to local storage
    localStorage.setItem(key, JSON.stringify(initialPokemons));
  }, []);

  return pokemons;
};

export default useCachedPokemons;
