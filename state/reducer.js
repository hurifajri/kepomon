// Internal modules
import { CATCH_POKEMON } from '@/state/action-types';

const appReducer = (state, action) => {
  switch (action.type) {
    case CATCH_POKEMON: {
      return { ...state, catch: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default appReducer;
