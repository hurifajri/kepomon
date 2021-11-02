// External modules
import { css, Global } from '@emotion/react';
import Image from 'next/image';
import PropTypes from 'prop-types';

// Internal modules
import Card from '@/components/card';
import Heading from '@/components/heading';
import Pokeball from '@/components/icons/pokeball';
import If from '@/components/if';
import {
  bottomRightStyle,
  cardContentStyle,
  cardStyle,
  detailsStyle,
  headerStyle,
  headingStyle,
  imageStyle,
  mainStyle,
  profileStyle,
  sectionColumnStyle,
  sectionRowStyle,
  textStyle,
  topLeftStyle,
} from '@/components/pokemon-details/style';
import PokemonAbilityList from '@/components/pokemon-ability-list';
import PokemonAdd from '@/components/pokemon-add';
import PokemonMoveList from '@/components/pokemon-move-list';
import PokemonStatList from '@/components/pokemon-stat-list';
import PokemonTypeList from '@/components/pokemon-type-list';
import { useAppContext } from '@/state/context';
import useCachedImage from '@/hooks/useCachedImage';
import useRandomColor from '@/hooks/useRandomColor';

const PokemonDetails = ({ pokemon }) => {
  const {
    id,
    image: initialImage,
    sprites,
    name,
    types,
    height,
    weight,
    base_experience,
    abilities,
    stats,
    moves,
  } = pokemon;
  // Get state from context
  const { isCatched } = useAppContext();

  // Set profile image from cached or request
  const image = useCachedImage(name, initialImage);
  const profileImage = image ?? sprites.front_default;

  // Get random color based on pokemon id
  const flag = id % 3;
  const { light } = useRandomColor(flag);

  // Set body color dynamically based on pokemon id
  const bodyStyle = css`
    body {
      background-color: ${light};
    }
  `;

  return (
    <If condition={pokemon && typeof pokemon === 'object'}>
      <Global styles={bodyStyle} />
      <div css={detailsStyle}>
        <div css={profileStyle}>
          <header css={headerStyle}>
            <section className="pokemon-image" css={imageStyle}>
              <If condition={!isCatched}>
                <Image
                  className="image"
                  src={profileImage}
                  alt={name}
                  width={200}
                  height={200}
                />
              </If>
              <If condition={isCatched}>
                <Pokeball size={12.5} />
              </If>
              <span className="shadow"></span>
            </section>
            <section className="pokemon-add">
              <PokemonAdd pokemon={pokemon} />
            </section>
            <section className="pokemon-name" css={sectionRowStyle}>
              <span css={headingStyle}>
                {`#${String(id).padStart(3, '0')}`}
              </span>
              <Heading level={1} css={headingStyle}>
                {name}
              </Heading>
            </section>
          </header>
          <main css={mainStyle}>
            <section className="pokemon-type" css={sectionRowStyle}>
              <Heading level={2}>Type :</Heading>
              <PokemonTypeList pokemonTypes={types} />
            </section>
            <section className="pokemon-height" css={sectionRowStyle}>
              <Heading level={2}>
                Height :
                <span css={textStyle}>
                  {`${height ? height + '"' : 'unknown'}`}
                </span>
              </Heading>
            </section>
            <section className="pokemon-weight" css={sectionRowStyle}>
              <Heading level={2}>
                Weight :
                <span css={textStyle}>
                  {`${weight ? weight + ' lbs' : 'unknown'}`}
                </span>
              </Heading>
            </section>
          </main>
        </div>
        <Card
          css={cardStyle}
          cssContent={cardContentStyle}
          withBorder
          withShadow
        >
          <div css={topLeftStyle}>
            <section className="pokemon-experience" css={sectionRowStyle}>
              <Heading level={2} css={headingStyle}>
                Experience
                <span css={textStyle}>{`(${base_experience})`}</span>
              </Heading>
            </section>
            <section className="pokemon-abilities" css={sectionColumnStyle}>
              <Heading level={2} css={headingStyle}>
                Abilities
              </Heading>
              <PokemonAbilityList pokemonAbilities={abilities} />
            </section>
            <section className="pokemon-stats" css={sectionColumnStyle}>
              <Heading level={2} css={headingStyle}>
                Stats
              </Heading>
              <PokemonStatList pokemonStats={stats} />
            </section>
          </div>
          <div css={bottomRightStyle}>
            <section className="pokemon-moves" css={sectionColumnStyle}>
              <Heading level={2} css={headingStyle}>
                Moves
              </Heading>
              <PokemonMoveList pokemonMoves={moves} />
            </section>
          </div>
        </Card>
      </div>
    </If>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDetails;
