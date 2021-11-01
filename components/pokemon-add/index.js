/** @jsxImportSource @emotion/react */

// External modules
import PropTypes from 'prop-types';
import { useState } from 'react';

// Internal modules
import Heading from '@/components/heading';
import If from '@/components/if';
import Dialog from '@/components/dialog';
import {
  buttonLabelStyle,
  buttonStyle,
  errorStyle,
  headingStyle,
  inputHeadingStyle,
  inputStyle,
  inputWrapperStyle,
} from '@/components/pokemon-add/style';
import useCachedImage from '@/hooks/useCachedImage';
import { adoptPokemon, catchPokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';

const PokemonAdd = ({ pokemon }) => {
  const { dialogOpen, isCatched, ownedPokemons, dispatch } = useAppContext();

  // Gwt pokemon image from cached or request
  const initialImage = pokemon.image;
  const cachedImage = useCachedImage(pokemon.name, initialImage);
  const image = cachedImage ?? pokemon.sprites.front_default;

  // State for storing nickname and its error message
  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Find out existing pokemon in store
  const isAdoptedPokemon = nickname => {
    const findPokemon = pokemon => pokemon.nickname === nickname;
    const pokemon = ownedPokemons.find(findPokemon);
    const isAdopted = typeof pokemon !== 'undefined';

    return isAdopted;
  };

  // Set nickname based on user input
  const handleNickname = event => {
    const name = event.target.value;
    setNickname(name);
  };

  const handleAdopt = () => {
    // Check wether the pokemon is already owned with the same nickname
    const isAdopted = isAdoptedPokemon(nickname);

    // Adopt new pokemon
    if (!isAdopted && nickname) {
      const newPokemon = { ...pokemon, image, nickname };
      dispatch(adoptPokemon(newPokemon));
      handleClose();

      return;
    }

    if (!nickname) {
      setErrorMessage("The nickname can't be empty");
      return;
    }

    // Otherwise, set error message
    setErrorMessage('This nickname is already taken!');
  };

  // Handle click for catching pokemon
  const handleCatch = () => {
    // Probability/Success rate
    const probability = number => Math.random() <= number;
    const isCatched = probability(0.5);

    dispatch(catchPokemon(isCatched));
    dispatch(toggleDialog());
  };

  // Handle close dialog
  const handleClose = () => {
    setNickname('');
    setErrorMessage('');
    dispatch(catchPokemon(false));
    dispatch(toggleDialog());
  };

  return (
    <>
      <button css={buttonStyle} onClick={handleCatch}>
        <span css={buttonLabelStyle}>Catch Képomon</span>
      </button>
      <Dialog
        open={dialogOpen}
        onCancel={handleClose}
        cancelText="Release"
        onConfirm={handleAdopt}
        confirmText="Adopt"
        withButtons={isCatched}
      >
        <If condition={!isCatched}>
          <Heading level={2} css={headingStyle}>
            Képomon runs away!
          </Heading>
        </If>
        <If condition={isCatched}>
          <Heading level={2} css={headingStyle}>
            You got the Képomon!
          </Heading>
          <section css={inputWrapperStyle}>
            <Heading level={3} css={inputHeadingStyle}>
              <If condition={errorMessage === ''}>
                Give your new Képomon a nickname!
              </If>
              <If condition={errorMessage !== ''}>{errorMessage}</If>
            </Heading>
            <div css={[inputStyle, errorMessage && errorStyle]}>
              <input value={nickname} onChange={handleNickname} autoFocus />
            </div>
          </section>
        </If>
      </Dialog>
    </>
  );
};

PokemonAdd.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonAdd;
