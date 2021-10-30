// External modules
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

// Internal modules
import If from '@/components/If';
import {
  headingStyle,
  StyledA,
  StyledCard,
  StyledHeader,
  StyledMain,
  StyledMiniCard,
} from '@/components/pokemon-card/style';
import Heading from '@/components/heading';
import useRandomColors from '@/hooks/useRandomColors';

const PokemonCard = ({ pokemon }) => {
  // Get random color based on pokemon id
  const flag = pokemon.id % 3;
  const { light, dark } = useRandomColors(flag);

  return (
    <If condition={typeof pokemon === 'object'}>
      <Link href="/" passHref={true}>
        <StyledA bgColor={light}>
          <StyledCard>
            <StyledHeader>
              <StyledMiniCard bgColor={dark}>
                <span className="content">
                  {`#${String(pokemon.id).padStart(4, '0')}`}
                </span>
              </StyledMiniCard>
              <StyledMiniCard bgColor={dark} className="counter">
                <span className="content">{`Owned: ${0}`}</span>
              </StyledMiniCard>
            </StyledHeader>
            <StyledMain>
              <Image
                src={pokemon.dreamworld}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Heading level={2} style={headingStyle}>
                {pokemon.name}
              </Heading>
            </StyledMain>
          </StyledCard>
        </StyledA>
      </Link>
    </If>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
