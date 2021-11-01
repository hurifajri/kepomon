/** @jsxImportSource @emotion/react */

// Internal modules
import If from '@/components/if';
import Dialog from '@/components/dialog';
import {
  buttonLabelStyle,
  buttonStyle,
  headingStyle,
} from '@/components/pokemon-add/style';
import { catchPokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';

const PokemonAdd = () => {
  const { state, dispatch } = useAppContext();

  // Handle click for adding pokemon
  const handleClickAdd = () => {
    // Probability/Success rate
    const probability = number => Math.random() <= number;
    const isCatched = probability(0.5);

    dispatch(catchPokemon(isCatched));
    dispatch(toggleDialog());
  };

  // Handle close dialog
  const handleCloseDialog = () => {
    dispatch(catchPokemon(false));
    dispatch(toggleDialog());
  };

  return (
    <>
      <button css={buttonStyle} onClick={handleClickAdd}>
        <span css={buttonLabelStyle}>Catch Pokemon</span>
      </button>
      <Dialog open={state.dialogOpen} handleClose={handleCloseDialog}>
        <If condition={!state.isCatched}>
          <span css={headingStyle}>Pokémon runs away!</span>
        </If>
        <If condition={state.isCatched}>
          <span css={headingStyle}>You got the Pokémon!</span>
        </If>
      </Dialog>
    </>
  );
};

export default PokemonAdd;
