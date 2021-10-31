// External modules
import { createContext, useContext, useMemo, useReducer } from 'react';

// Internal modules
import appReducer from '@/state/reducer';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    catch: false,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export { AppProvider, useAppContext };
