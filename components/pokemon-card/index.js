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
  StyledContent,
  StyledId,
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
        <StyledA color={light}>
          <StyledCard>
            <StyledId color={dark}>
              <span>{`#${String(pokemon.id).padStart(3, '0')}`}</span>
            </StyledId>
            <StyledContent>
              <Image
                src={pokemon.dreamworld}
                alt={pokemon.name}
                width={150}
                height={150}
              />
              <Heading level={2} style={headingStyle}>
                {pokemon.name}
              </Heading>
            </StyledContent>
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
