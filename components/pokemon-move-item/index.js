/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import Card from '@/components/card';
import Heading from '@/components/heading';
import If from '@/components/if';
import Item from '@/components/item';
import {
  cardContentStyle,
  cardStyle,
  itemStyle,
  statStyle,
} from '@/components/pokemon-move-item/style';

const PokemonMoveItem = ({ pokemonMove }) => (
  <If condition={typeof pokemonMove === 'object'}>
    <Item css={itemStyle}>
      <Card css={cardStyle} cssContent={cardContentStyle}>
        <Heading level={3} css={statStyle}>
          {pokemonMove.name}
        </Heading>
      </Card>
    </Item>
  </If>
);

PokemonMoveItem.propTypes = {
  pokemonMove: PropTypes.object.isRequired,
};

export default PokemonMoveItem;
