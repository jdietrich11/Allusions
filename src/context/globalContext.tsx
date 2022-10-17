import React, { createContext, useContext, useReducer, useEffect } from "react";

type AppState = typeof initialState;
type Action = { type: "ADD_TO_TEAM_1"; payload: { id: number; name: string } };

interface ProviderProps {
  children: React.ReactNode;
}

interface teams {
  id: number;
  name: string;
}

// initial state
const initialState = {
  team1: [],
  team1Score: 0,
  team1RoundWins: 0,
  team2: [],
  team2Score: 0,
  team2RoundWins: 0,
  selectedCardpacks: [],
  cardCount: 60,
  round1MVP: "",
  round2MVP: "",
  round3MVP: "",
  fastestTalker: "",
  bestOneWordPony: "",
  bestHandAndBodyFlapper: "",
  fastestRightAnswer: "",
};

// reducer
const globalReducer = (state: AppState, action: any) => {
  switch (action.type) {
    case "ADD_TO_TEAM_1":
      return {
        ...state,
        team1: [...state.team1, action.payload],
      };
    default:
      return state;
  }
};

// create the context
export const GlobalContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

// provider component
export const GlobalProvider = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  //action

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
