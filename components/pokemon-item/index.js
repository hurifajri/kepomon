// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';
import Item from '@/components/item';
import PokemonCard from '@/components/pokemon-card';

const PokemonItem = ({ pokemon }) => (
  <If condition={typeof pokemon === 'object'}>
    <Item>
      <PokemonCard pokemon={pokemon} />
    </Item>
  </If>
);

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonItem;
