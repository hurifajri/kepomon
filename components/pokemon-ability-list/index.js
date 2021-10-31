/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';
import List from '@/components/list';
import PokemonAbilityItem from '@/components/pokemon-ability-item';
import { listStyle } from '@/components/pokemon-ability-list/style';

const PokemonAbilityList = ({ pokemonAbilities }) => (
  <If condition={pokemonAbilities?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each ability from abilities
        pokemonAbilities?.map(({ ability }) => (
          <PokemonAbilityItem pokemonAbility={ability} key={ability.name} />
        ))
      }
    </List>
  </If>
);

PokemonAbilityList.propTypes = {
  pokemonAbilities: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
};

export default PokemonAbilityList;
