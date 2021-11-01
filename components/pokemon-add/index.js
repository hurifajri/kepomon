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
  buttonsStyles,
  buttonStyle,
  errorStyle,
  headingStyle,
  inputStyle,
  inputWrapperStyle,
} from '@/components/pokemon-add/style';
import { adoptPokemon, catchPokemon, toggleDialog } from '@/state/actions';
import { useAppContext } from '@/state/context';

const PokemonAdd = ({ pokemon }) => {
  const { state, dispatch } = useAppContext();
  const { dialogOpen, isCatched, ownedPokemons } = state;

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
    if (!isAdopted) {
      const newPokemon = { ...pokemon, nickname };
      dispatch(adoptPokemon(newPokemon));
      handleClose();

      return;
    }
    // Otherwise, set error message
    setErrorMessage('The nickname is already taken!');
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

  console.log('ownedPokemons', ownedPokemons);
  console.log('errorMessage', errorMessage);

  return (
    <>
      <button css={buttonStyle} onClick={handleCatch}>
        <span css={buttonLabelStyle}>Catch Pokémon</span>
      </button>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <If condition={!isCatched}>
          <Heading level={2} css={headingStyle}>
            Pokémon runs away!
          </Heading>
        </If>
        <If condition={isCatched}>
          <Heading level={2} css={headingStyle}>
            You got the Pokémon!
          </Heading>
          <section css={inputWrapperStyle}>
            <Heading level={3}>
              <If condition={errorMessage === ''}>
                Give your new Pokémon a nickname!
              </If>
              <If condition={errorMessage !== ''}>{errorMessage}</If>
            </Heading>
            <div css={[inputStyle, errorMessage && errorStyle]}>
              <input value={nickname} onChange={handleNickname} autoFocus />
            </div>
          </section>
          <section css={buttonsStyles}>
            <button css={buttonStyle} onClick={handleClose}>
              <span css={buttonLabelStyle}>Release</span>
            </button>
            <button css={buttonStyle}>
              <span css={buttonLabelStyle} onClick={handleAdopt}>
                Adopt
              </span>
            </button>
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
