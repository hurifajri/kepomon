/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';

// Internal modules
import Heading from '@/components/heading';
import Dialog from '@/components/dialog';
import {
  buttonLabelStyle,
  buttonsStyles,
  buttonStyle,
  headingStyle,
  overlapButtonLabelStyle,
  overlapButtonStyle,
} from '@/components/pokemon-delete/style';
import { adoptPokemon, catchPokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';

const PokemonDelete = ({ pokemon }) => {
  const { state, dispatch } = useAppContext();
  const { dialogOpen, isCatched, ownedPokemons } = state;

  const handleRelease = event => {
    event.preventDefault();
  };

  // Handle confirm to open dialog
  const handleConfirm = event => {
    event.preventDefault();
    dispatch(toggleDialog(true));
  };

  // Handle close dialog
  const handleClose = event => {
    event.preventDefault();
    dispatch(toggleDialog(false));
  };

  return (
    <>
      <button css={overlapButtonStyle} onClick={handleConfirm}>
        <span css={overlapButtonLabelStyle}>Release</span>
      </button>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <Heading level={2} css={headingStyle}>
          Are you sure to release this adorable Képomon?
        </Heading>
        <section css={buttonsStyles}>
          <button css={buttonStyle}>
            <span css={buttonLabelStyle} onClick={handleClose}>
              Keep
            </span>
          </button>
          <button css={buttonStyle} onClick={handleRelease}>
            <span css={buttonLabelStyle}>Release</span>
          </button>
        </section>
      </Dialog>
    </>
  );
};

PokemonDelete.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonDelete;
