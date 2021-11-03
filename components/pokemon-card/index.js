// External modules
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

// Internal modules
import Card from '@/components/card';
import Heading from '@/components/heading';
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
import PokemonDelete from '@/components/pokemon-delete';
import useRandomColor from '@/hooks/useRandomColor';
import { useAppContext } from '@/state/context';

const PokemonCard = ({ pokemon }) => {
  const router = useRouter();
  const { ownedPokemons, isAmp } = useAppContext();

  const isCollectionPage = router?.pathname === '/collection';

  // Get owned state for each pokemon
  const owned = ownedPokemons.filter(({ id }) => id === pokemon.id).length;

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
          query: { image },
        }}
        as={`/pokemon/${pokemon.name}`}
        passHref={true}
      >
        <a data-testid="link">
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
              <If condition={!isCollectionPage}>
                <Card
                  className="counter"
                  css={miniCardStyle}
                  cssContent={miniCardContentStyle}
                  style={{ '--bgColor': dark }}
                >
                  {`Owned: ${owned}`}
                </Card>
              </If>
              <If condition={isCollectionPage}>
                <PokemonDelete pokemon={pokemon} />
              </If>
            </header>
            <main css={mainStyle}>
              <If condition={!isAmp}>
                <Image
                  src={image}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </If>
              <If condition={isAmp}>
                <amp-img
                  src={image}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </If>
              <Heading level={2} css={headingStyle}>
                <span>
                  <If condition={pokemon.nickname !== undefined}>
                    {`${pokemon.nickname} The `}
                  </If>
                  {pokemon.name}
                </span>
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
