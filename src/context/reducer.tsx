import { AppState } from "./globalContext";
import { Teams } from "../helper/interfaces/interfaces";

// reducer
export const globalReducer = (state: AppState, action: any) => {
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
    case "REMOVE_PLAYER":
      return {
        ...state,
        team1: state.team1.filter((obj: Teams) => obj.id !== action.payload),
        team2: state.team2.filter((obj: Teams) => obj.id !== action.payload),
      };
    case "CLEAR_TEAMS":
      return {
        ...state,
        team1: [],
        team2: [],
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
    case "SET_TURN_TIME":
      return {
        ...state,
        turnTime: action.payload,
      };
    case "INCREASE_ROUND_COUNT":
      return {
        ...state,
        roundCount: state.roundCount++,
      };
    case "SET_CARDPACKS":
      return {
        ...state,
        cardpacks: action.payload,
      };

    default:
      return state;
  }
};
