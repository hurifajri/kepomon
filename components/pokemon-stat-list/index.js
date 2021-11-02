// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';
import List from '@/components/list';
import PokemonStatItem from '@/components/pokemon-stat-item';
import { listStyle } from '@/components/pokemon-stat-list/style';

const PokemonStatList = ({ pokemonStats }) => (
  <If condition={pokemonStats?.length > 0}>
    <List css={listStyle}>
      {
        // Iterate each stat from stats
        pokemonStats?.map(({ stat, base_stat }) => (
          <PokemonStatItem
            pokemonStat={{ ...stat, base_stat }}
            key={stat.name}
          />
        ))
      }
    </List>
  </If>
);

PokemonStatList.propTypes = {
  pokemonStats: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.array,
  ]).isRequired,
};

export default PokemonStatList;
