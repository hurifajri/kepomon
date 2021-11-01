/** @jsxImportSource @emotion/react */

// External modules
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

// Internal modules
import Card from '@/components/card';
import If from '@/components/if';
import {
  cardContentStyle,
  cardStyle,
  headerStyle,
  headingStyle,
  mainStyle,
  miniCardContentStyle,
  miniCardStyle,
} from '@/components/pokemon-card/style';
import Heading from '@/components/heading';
import useRandomColor from '@/hooks/useRandomColor';

const PokemonCard = ({ pokemon }) => {
  // Get random color based on pokemon id
  const flag = pokemon.id % 3;
  const { light, dark } = useRandomColor(flag);

  // Get pokemon image
  const image = pokemon.dreamworld ?? pokemon.image;

  return (
    <If condition={typeof pokemon === 'object'}>
      <Link
        href={{
          pathname: 'pokemon/[name]',
          query: { image: pokemon.dreamworld },
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
            <header css={headerStyle}>
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
            <main css={mainStyle}>
              <Image src={image} alt={pokemon.name} width={100} height={100} />
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
