/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import Heading from '@/components/heading';
import If from '@/components/if';
import Item from '@/components/item';
import {
  barStyle,
  itemStyle,
  statStyle,
} from '@/components/pokemon-stat-item/style';

const PokemonStatItem = ({ pokemonStat }) => (
  <If condition={typeof pokemonStat === 'object'}>
    <Item css={itemStyle}>
      <Heading level={3} css={statStyle}>
        <span>{pokemonStat.name}</span>
        <span>{pokemonStat.base_stat}</span>
      </Heading>
      <progress value={pokemonStat.base_stat ?? 0} max={100} css={barStyle} />
    </Item>
  </If>
);

PokemonStatItem.propTypes = {
  pokemonStat: PropTypes.object.isRequired,
};

export default PokemonStatItem;
