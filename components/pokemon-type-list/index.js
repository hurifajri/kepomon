/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';
import List from '@/components/list';
import PokemonTypeItem from '@/components/pokemon-type-item';
import { listStyle } from '@/components/pokemon-type-list/style';

const PokemonTypeList = ({ pokemonTypes }) => (
  <If condition={pokemonTypes?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each type from types
        pokemonTypes?.map(({ type }) => (
          <PokemonTypeItem pokemonType={type} key={type.name} />
        ))
      }
    </List>
  </If>
);

PokemonTypeList.propTypes = {
  pokemonTypes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
};

export default PokemonTypeList;
