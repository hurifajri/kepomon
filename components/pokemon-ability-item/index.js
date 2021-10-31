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
} from '@/components/pokemon-ability-item/style';

const PokemonAbilityItem = ({ pokemonAbility }) => (
  <If condition={typeof pokemonAbility === 'object'}>
    <Item css={itemStyle}>
      <Card css={cardStyle} cssContent={cardContentStyle}>
        <Heading level={3} css={statStyle}>
          {pokemonAbility.name}
        </Heading>
      </Card>
    </Item>
  </If>
);

PokemonAbilityItem.propTypes = {
  pokemonAbility: PropTypes.object.isRequired,
};

export default PokemonAbilityItem;