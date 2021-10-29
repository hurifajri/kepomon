// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/If';
import PokemonItem from '@/components/pokemon-item';
import { StyledList } from '@/components/pokemon-list/style';

const PokemonList = ({ pokemons }) => (
  <If condition={pokemons?.length > 0}>
    <StyledList>
      {
        // Iterate each pokemon from pokemons
        pokemons.map(pokemon => (
          <PokemonItem pokemon={pokemon} key={pokemon.id} />
        ))
      }
    </StyledList>
  </If>
);

PokemonList.propTypes = {
  pokemons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
};

export default PokemonList;
