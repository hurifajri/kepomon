/** @jsxImportSource @emotion/react */

// Internal modules
import Dialog from '@/components/dialog';
import { buttonLabelStyle, buttonStyle } from '@/components/pokemon-add/style';
import { catchPokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';

const PokemonAdd = () => {
  const { state, dispatch } = useAppContext();

  // Handle click for adding pokemon
  const handleClickAdd = () => {
    const probability = number => Math.random() <= number;
    const isCatched = probability(0.5);

    dispatch(catchPokemon(isCatched));
  };

  // Handle close dialog
  const handleCloseDialog = () => {
    dispatch(toggleDialog());
  };

  return (
    <>
      <button css={buttonStyle} onClick={handleClickAdd}>
        <span css={buttonLabelStyle}>Catch Pokemon</span>
      </button>
      <Dialog open={state.dialogOpen} handleClose={handleCloseDialog}>
        tes
      </Dialog>
    </>
  );
};

export default PokemonAdd;
