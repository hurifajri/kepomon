/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import Heading from '@/components/heading';
import Grass from '@/components/icons/types/grass';
import If from '@/components/if';
import Item from '@/components/item';
import { iconStyle } from '@/components/pokemon-type-item/style';
import usePokemonTypesColor from '@/hooks/usePokemonTypesColor';

const PokemonTypeItem = ({ pokemonType }) => {
  // Get type color
  const { typeColor } = usePokemonTypesColor(pokemonType.name);

  return (
    <If condition={typeof pokemonType === 'object'}>
      <Item>
        <span css={iconStyle} style={{ '--bgColor': typeColor }}>
          <Grass size={1} />
        </span>
        <Heading level={3}>{pokemonType.name}</Heading>
      </Item>
    </If>
  );
};

PokemonTypeItem.propTypes = {
  pokemonType: PropTypes.object.isRequired,
};

export default PokemonTypeItem;
