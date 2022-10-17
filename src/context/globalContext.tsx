import React, { createContext, useContext, useReducer, useEffect } from "react";

interface Card {
  id: number;
  card_name: string;
  card_hint: string;
  point_value: number;
  image_url: string;
}

type AppState = typeof initialState;
type Action =
  | { type: "ADD_TO_TEAM_1"; payload: { id: number; name: string } }
  | { type: "ADD_TO_TEAM_2"; payload: { id: number; name: string } }
  | { type: "SELECT_CARDPACK"; payload: number }
  | { type: "REMOVE_CARDPACK"; payload: number }
  | { type: "INCREASE_CARD_COUNT" }
  | { type: "DECREASE_CARD_COUNT" }
  | { type: "ADD_CARD_TO_DECK"; payload: Card[] }
  | { type: "SHUFFLED_DECK"; payload: Card[] }
  | { type: "RESHUFFLE_DECK" }
  | { type: "LIMIT_DECK" }
  | { type: "DRAW_CARD" }
  | { type: "GUESSED_CORRECT" };

interface ProviderProps {
  children: React.ReactNode;
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
  roundCount: 1,
  round1MVP: "",
  round2MVP: "",
  round3MVP: "",
  fastestTalker: "",
  bestOneWordPony: "",
  bestHandAndBodyFlapper: "",
  fastestRightAnswer: "",
  deck: [],
  discardPile: [],
  activeCard: {},
};

// reducer
const globalReducer = (state: AppState, action: any) => {
  switch (action.type) {
    case "ADD_TO_TEAM_1":
      return {
        ...state,
        team1: [...state.team1, action.payload],
      };
    case "ADD_TO_TEAM_2":
      return {
        ...state,
        team2: [...state.team2, action.payload],
      };
    case "SELECT_CARDPACK":
      return {
        ...state,
        selectedCardpacks: [...state.selectedCardpacks, action.payload],
      };
    case "REMOVE_CARDPACK":
      return {
        ...state,
        selectedCardpacks: state.selectedCardpacks.filter(
          (selectedId) => selectedId !== action.payload
        ),
      };
    case "INCREASE_CARD_COUNT":
      return {
        ...state,
        cardCount: state.cardCount + 1,
      };
    case "DECREASE_CARD_COUNT":
      return {
        ...state,
        cardCount: state.cardCount - 1,
      };
    case "ADD_CARD_TO_DECK":
      return {
        ...state,
        deck: [...state.deck, action.payload],
      };
    case "SHUFFLED_DECK":
      return {
        ...state,
        deck: action.payload,
      };
    case "RESHUFFLE_DECK":
      return {
        ...state,
        deck: state.discardPile,
        discardPile: [],
      };
    case "LIMIT_DECK":
      return {
        ...state,
        deck: state.deck.slice(0, state.cardCount),
      };
    case "DRAW_CARD":
      return {
        ...state,
        activeCard: state.deck[Math.floor(Math.random() * state.deck.length)],
      };
    case "GUESSED_CORRECT":
      return {
        ...state,
        discardPile: [...state.discardPile, state.activeCard],
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
