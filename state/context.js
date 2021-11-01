// External modules
import { createContext, useContext, useEffect, useReducer } from 'react';

// Internal modules
import appReducer from '@/state/reducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    isAmp: false,
    isCatched: false,
    dialogOpen: false,
    ownedPokemons: [],
    selectedPokemon: {},
  };

  // Create persisted `ownedPokemons`
  const isClient = typeof window !== 'undefined';
  const cachedPokemons = isClient ? localStorage.getItem('pokemons') : null;
  const ownedPokemons = JSON.parse(cachedPokemons) ?? [];
  const localState = { ...initialState, ownedPokemons };
  const [state, dispatch] = useReducer(appReducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(state.ownedPokemons));
  }, [state]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export { AppProvider, useAppContext };
