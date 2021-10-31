/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';
import Item from '@/components/item';
import { iconStyle, itemStyle } from '@/components/pokemon-type-item/style';
import usePokemonTypesColor from '@/hooks/usePokemonTypesColor';
import usePokemonTypesIcon from '@/hooks/usePokemonTypesIcon';

const PokemonTypeItem = ({ pokemonType }) => {
  // Get type color
  const typeColor = usePokemonTypesColor(pokemonType.name);

  // Get type icon
  const typeIcon = usePokemonTypesIcon(pokemonType.name);

  return (
    <If condition={typeof pokemonType === 'object'}>
      <Item css={itemStyle}>
        <span css={iconStyle} style={{ '--bgColor': typeColor }}>
          {typeIcon}
        </span>
      </Item>
    </If>
  );
};

PokemonTypeItem.propTypes = {
  pokemonType: PropTypes.object.isRequired,
};

export default PokemonTypeItem;
