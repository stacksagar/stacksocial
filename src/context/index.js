import {createContext, useContext, useReducer} from "react";
import reducer from "./reducer";
import initialState from "./state";

const RootContext = createContext(reducer);

export const RootProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RootContext.Provider value={{state, dispatch}}>
      {children}
    </RootContext.Provider>
  );
};

export const useRootContext = () => useContext(RootContext);
