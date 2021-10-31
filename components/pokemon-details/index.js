/** @jsxImportSource @emotion/react */

// External modules
import Image from 'next/image';
import PropTypes from 'prop-types';

// Internal modules
import Heading from '@/components/heading';
import If from '@/components/if';
import {
  baseDetailsStyle,
  baseImageStyle,
} from '@/components/pokemon-details/style';

const PokemonDetails = ({ pokemon }) => {
  console.log('pokemon', pokemon);

  const profileImage = pokemon.img ?? pokemon.sprites.front_default;

  return (
    <If condition={pokemon && typeof pokemon === 'object'}>
      <div css={baseDetailsStyle}>
        <div className="profile">
          <div>
            <div css={baseImageStyle}>
              <Image
                src={profileImage}
                alt={pokemon.name}
                width={200}
                height={200}
              />
              <span className="shadow"></span>
            </div>
            <div>
              <span>{`#${String(pokemon.id).padStart(3, '0')}`}</span>
              <Heading level={1}>{pokemon.name}</Heading>
            </div>
          </div>
          <div>tes</div>
        </div>
        <div className="stats">stats</div>
      </div>
    </If>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetails;
