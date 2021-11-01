// Internal modules
import {
  ADOPT_POKEMON,
  CATCH_POKEMON,
  TOGGLE_DIALOG,
} from '@/state/action-types';

export const adoptPokemon = pokemon => ({
  type: ADOPT_POKEMON,
  payload: pokemon,
});

export const catchPokemon = isCatched => ({
  type: CATCH_POKEMON,
  payload: isCatched,
});

export const toggleDialog = () => ({
  type: TOGGLE_DIALOG,
});
