// External modules
import PropTypes from 'prop-types';

// Internal modules
import {
  buttonLabelStyle,
  buttonStyle,
} from '@/components/pokemon-delete/style';
import { selectPokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';

const PokemonDelete = ({ pokemon }) => {
  const { dispatch } = useAppContext();

  // Handle confirm to open dialog
  const handleConfirm = (event, selectedPokemon) => {
    event.preventDefault();

    dispatch(selectPokemon(selectedPokemon));
    dispatch(toggleDialog());
  };

  return (
    <button css={buttonStyle} onClick={event => handleConfirm(event, pokemon)}>
      <span css={buttonLabelStyle}>Release</span>
    </button>
  );
};

PokemonDelete.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDelete;
