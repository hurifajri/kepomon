/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';
import List from '@/components/list';
import PokemonMoveItem from '@/components/pokemon-move-item';
import { listStyle } from '@/components/pokemon-move-list/style';

const PokemonMoveList = ({ pokemonMoves }) => (
  <If condition={pokemonMoves?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each ability from abilities
        pokemonMoves?.map(({ move }) => (
          <PokemonMoveItem pokemonMove={move} key={move.name} />
        ))
      }
    </List>
  </If>
);

PokemonMoveList.propTypes = {
  pokemonMoves: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
};

export default PokemonMoveList;
