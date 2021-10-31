/** @jsxImportSource @emotion/react */

// Internal modules
import Card from '@/components/card';
import Pokeball from '@/components/icons/pokeball';
import {
  routeStyle as catchStyle,
  iconStyle,
  cardContentStyle as navCardContentStyle,
  cardStyle as navCardStyle,
} from '@/components/navbar/style';
import { buttonStyle } from '@/components/pokemon-add/style';
import { CATCH_POKEMON } from '@/state/action-types';
import { useAppContext } from '@/state/context';

const PokemonAdd = () => {
  const { dispatch } = useAppContext();

  // Handle click for adding pokemon
  const handleClickAdd = () => {
    const probability = number => Math.random() <= number;
    const isCatched = probability(0.5);

    dispatch({ type: CATCH_POKEMON, payload: isCatched });
  };

  return (
    <Card
      css={navCardStyle}
      cssContent={navCardContentStyle}
      withBorder
      withShadow
    >
      <button css={buttonStyle} onClick={handleClickAdd}>
        <span css={iconStyle}>
          <Pokeball size={3} />
        </span>
        <span css={catchStyle}>Catch Pokemon</span>
      </button>
    </Card>
  );
};

export default PokemonAdd;
