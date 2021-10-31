/** @jsxImportSource @emotion/react */

// External modules
import { css, Global } from '@emotion/react';
import Image from 'next/image';
import PropTypes from 'prop-types';

// Internal modules
import Heading from '@/components/heading';
import If from '@/components/if';
import {
  columnStyle,
  detailsStyle,
  headingStyle,
  imageStyle,
  sectionStyle,
} from '@/components/pokemon-details/style';
import PokemonTypeList from '@/components/pokemon-type-list';
import useRandomColor from '@/hooks/useRandomColor';

const PokemonDetails = ({ pokemon }) => {
  const { id, img, name, sprites, types } = pokemon;
  const profileImage = img ?? sprites.front_default;

  // Get random color based on pokemon id
  const flag = id % 3;
  const { light } = useRandomColor(flag);

  // Set body color dynamically based on pokemon id
  const bodyStyle = css`
    body {
      background-color: ${light};
    }
  `;

  console.log('pokemon', pokemon);

  return (
    <If condition={pokemon && typeof pokemon === 'object'}>
      <Global styles={bodyStyle} />
      <div css={detailsStyle}>
        <div className="profile" css={columnStyle}>
          <header css={columnStyle}>
            <section className="pokemon-image" css={imageStyle}>
              <Image src={profileImage} alt={name} width={200} height={200} />
              <span className="shadow"></span>
            </section>
            <section className="pokemon-name" css={sectionStyle}>
              <span css={headingStyle}>
                {`#${String(id).padStart(3, '0')}`}
              </span>
              <Heading level={1} css={headingStyle}>
                {name}
              </Heading>
            </section>
          </header>
          <main>
            <section className="pokemon-type" css={sectionStyle}>
              <Heading level={2}>Type :</Heading>
              <PokemonTypeList pokemonTypes={types} />
            </section>
          </main>
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
