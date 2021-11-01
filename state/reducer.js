// Internal modules
import { CATCH_POKEMON, TOGGLE_DIALOG } from '@/state/action-types';

const appReducer = (state, action) => {
  switch (action.type) {
    case CATCH_POKEMON: {
      return { ...state, isCatched: action.payload };
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
