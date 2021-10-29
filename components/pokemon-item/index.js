// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/If';
import PokemonCard from '@/components/pokemon-card';
import { StyledItem } from '@/components/pokemon-item/style';

const PokemonItem = ({ pokemon }) => (
  <If condition={typeof pokemon === 'object'}>
    <StyledItem>
      <PokemonCard pokemon={pokemon} />
    </StyledItem>
  </If>
);

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonItem;
