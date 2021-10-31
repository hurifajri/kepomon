/** @jsxImportSource @emotion/react */

// External modules
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

// Internal modules
import Card from '@/components/card';
import If from '@/components/if';
import {
  baseHeaderStyle,
  baseMainStyle,
  cardContentStyle,
  cardStyle,
  headingStyle,
  miniCardContentStyle,
  miniCardStyle,
} from '@/components/pokemon-card/style';
import Heading from '@/components/heading';
import useRandomColors from '@/hooks/useRandomColors';

const PokemonCard = ({ pokemon }) => {
  // Get random color based on pokemon id
  const flag = pokemon.id % 3;
  const { light, dark } = useRandomColors(flag);

  return (
    <If condition={typeof pokemon === 'object'}>
      <Link
        href={{
          pathname: 'pokemon/[name]',
          query: { img: pokemon.dreamworld },
        }}
        as={`/pokemon/${pokemon.name}`}
        passHref={true}
      >
        <a>
          <Card
            css={cardStyle}
            cssContent={cardContentStyle}
            style={{ '--bgColor': light }}
            withShadow
            withBorder
          >
            <header css={baseHeaderStyle}>
              <Card
                css={miniCardStyle}
                cssContent={miniCardContentStyle}
                style={{ '--bgColor': dark }}
              >
                {`#${String(pokemon.id).padStart(3, '0')}`}
              </Card>
              <Card
                className="counter"
                css={miniCardStyle}
                cssContent={miniCardContentStyle}
                style={{ '--bgColor': dark }}
              >
                {`Owned: ${0}`}
              </Card>
            </header>
            <main css={baseMainStyle}>
              <Image
                src={pokemon.dreamworld}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Heading level={2} css={headingStyle}>
                {pokemon.name}
              </Heading>
            </main>
          </Card>
        </a>
      </Link>
    </If>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
