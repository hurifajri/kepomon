// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';
import List from '@/components/list';
import PokemonItem from '@/components/pokemon-item';

const PokemonList = ({ pokemons }) => (
  <If condition={pokemons?.length > 0}>
    <List>
      {
        // Iterate each pokemon from pokemons
        pokemons?.map(pokemon => (
          <PokemonItem pokemon={pokemon} key={pokemon.id} />
        ))
      }
    </List>
  </If>
);

PokemonList.propTypes = {
  pokemons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
};

export default PokemonList;
