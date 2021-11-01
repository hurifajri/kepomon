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
import { releasePokemon, selectPokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';

const PokemonDelete = ({ pokemon }) => {
  const { state, dispatch } = useAppContext();
  const { dialogOpen, selectedPokemon } = state;

  const handleRelease = event => {
    event.preventDefault();

    dispatch(releasePokemon(selectedPokemon));
    dispatch(toggleDialog());
  };

  // Handle confirm to open dialog
  const handleConfirm = (event, emon) => {
    event.preventDefault();

    dispatch(selectPokemon(emon));
    dispatch(toggleDialog());
  };

  // Handle close dialog
  const handleClose = event => {
    event.preventDefault();

    dispatch(toggleDialog());
  };

  return (
    <>
      <button
        css={overlapButtonStyle}
        onClick={event => handleConfirm(event, pokemon)}
      >
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
