// External modules
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/if';

const PokemonDetails = ({ pokemon }) => {
  console.log('pokemon', pokemon);

  return (
    <If condition={typeof pokemon === 'object'}>
      <div>
        <div className="profile">profile</div>
        <div className="stats">stats</div>
      </div>
    </If>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetails;
