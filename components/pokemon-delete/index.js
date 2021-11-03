// External modules
import PropTypes from 'prop-types';

// Internal modules
import {
  buttonLabelStyle,
  buttonStyle,
} from '@/components/pokemon-delete/style';
import { useAppContext } from '@/state/context';

const PokemonDelete = ({ pokemon }) => {
  const { dispatch } = useAppContext();

  // Handle confirm to open dialog
  const handleConfirm = async (event, selectedPokemon) => {
    event.preventDefault();

    const { selectPokemon, toggleDialog } = await import('@/state/actions');
    dispatch(selectPokemon(selectedPokemon));
    dispatch(toggleDialog());
  };

  return (
    <button
      data-testid="delete"
      css={buttonStyle}
      onClick={event => handleConfirm(event, pokemon)}
    >
      <span css={buttonLabelStyle}>Release</span>
    </button>
  );
};

PokemonDelete.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDelete;
