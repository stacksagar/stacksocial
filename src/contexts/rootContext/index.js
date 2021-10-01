import rootState from "./state";
import rootReducer from "./reducer";

import { createContext, useContext, useReducer } from "react";

const RootContext = createContext(rootReducer);

export const RootProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, rootState);

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = () => {
  return useContext(RootContext);
};
