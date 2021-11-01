// Internal modules
import {
  ADOPT_POKEMON,
  CATCH_POKEMON,
  CHECK_AMP,
  RELEASE_POKEMON,
  SELECT_POKEMON,
  TOGGLE_DIALOG,
} from '@/state/action-types';

const appReducer = (state, action) => {
  switch (action.type) {
    case ADOPT_POKEMON: {
      return {
        ...state,
        ownedPokemons: [...state.ownedPokemons, action.payload],
      };
    }
    case CATCH_POKEMON: {
      return { ...state, isCatched: action.payload };
    }
    case CHECK_AMP: {
      return { ...state, isAmp: action.payload };
    }
    case RELEASE_POKEMON: {
      const pokemons = state.ownedPokemons.filter(
        pokemon => pokemon.nickname !== action.payload.nickname
      );

      return { ...state, ownedPokemons: pokemons };
    }
    case SELECT_POKEMON: {
      return { ...state, selectedPokemon: action.payload };
    }
    case TOGGLE_DIALOG: {
      return { ...state, dialogOpen: !state.dialogOpen };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default appReducer;
