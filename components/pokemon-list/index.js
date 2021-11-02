// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';
import List from '@/components/list';
import PokemonItem from '@/components/pokemon-item';
import { listStyle } from '@/components/pokemon-list/style';

const PokemonList = ({ pokemons }) => (
  <If condition={pokemons?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each pokemon from pokemons
        pokemons?.map(pokemon => (
          <PokemonItem pokemon={pokemon} key={pokemon.nickname ?? pokemon.id} />
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
