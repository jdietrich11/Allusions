import { AppState } from "./globalContext";

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
        team1: state.team1.filter((playerId) => playerId !== action.payload),
        team2: state.team2.filter((playerId) => playerId !== action.payload),
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
    default:
      return state;
  }
};
