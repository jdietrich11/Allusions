import React, { createContext, useContext, useReducer, useEffect } from "react";

import { Action, ProviderProps } from "./types";
import { globalReducer } from "./reducer";
import { initialState } from "./initialState";
export type AppState = typeof initialState;

// create the context
export const GlobalContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

// provider component
export const GlobalProvider = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
