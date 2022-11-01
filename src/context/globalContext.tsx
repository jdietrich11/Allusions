import React, { createContext, useContext, useState } from "react";
import { initialState, AppState } from "./initialState";
import { Card, Player, Cardpack } from "../helper/interfaces/interfaces";
import { shuffle } from "../helper/shuffle/shuffle";

export interface ProviderProps {
  children: React.ReactNode;
}

// create the context
export const GlobalContext = createContext<{
  state: AppState;
  setDeck: (newDecK: Card[]) => void;
  addToTeam1: (player: Player) => void;
  addToTeam2: (player: Player) => void;
  removePlayer: (id: number) => void;
  selectCardpack: (id: number) => void;
  removeCardpack: (id: number) => void;
  increaseCardCount: () => void;
  decreaseCardCount: () => void;
  reshuffleDeck: (newDeck: Card[]) => void;
  drawCard: () => void;
  guessedCorrect: (points: number, card: Card) => void;
  setTurnTime: (time: number) => void;
  increaseRoundCount: () => void;
  setCardpacks: (cardpacks: Cardpack[]) => void;
  setActivePlayer: (player: Player) => void;
  clearTeams: () => void;
  increaseTurnCounter: () => void;
  shuffleSkipped: () => void;
}>({
  state: initialState,
  setDeck: () => {},
  addToTeam1: () => {},
  addToTeam2: () => {},
  removePlayer: () => {},
  selectCardpack: () => {},
  removeCardpack: () => {},
  increaseCardCount: () => {},
  decreaseCardCount: () => {},
  reshuffleDeck: () => {},
  drawCard: () => {},
  guessedCorrect: () => {},
  setTurnTime: () => {},
  increaseRoundCount: () => {},
  setCardpacks: () => {},
  setActivePlayer: () => {},
  clearTeams: () => {},
  increaseTurnCounter: () => {},
  shuffleSkipped: () => {},
});

// provider component
export const GlobalProvider = (props: ProviderProps) => {
  const [state, setState] = useState<AppState>(initialState);

  const addToTeam1 = (player: Player) => {
    setState({
      ...state,
      team1: [...state.team1, player],
    });
  };
  const addToTeam2 = (player: Player) => {
    setState({
      ...state,
      team2: [...state.team2, player],
    });
  };
  const removePlayer = (id: number) => {
    setState({
      ...state,
      team1: state.team1.filter((obj) => obj.id !== id),
      team2: state.team2.filter((obj) => obj.id !== id),
    });
  };
  const clearTeams = () => {
    setState({
      ...state,
      team1: [],
      team2: [],
    });
  };
  const selectCardpack = (id: number) => {
    setState({
      ...state,
      selectedCardpacks: [...state.selectedCardpacks, id],
    });
  };
  const removeCardpack = (id: number) => {
    setState({
      ...state,
      selectedCardpacks: state.selectedCardpacks.filter(
        (packId) => packId !== id
      ),
    });
  };
  const increaseCardCount = () => {
    setState({
      ...state,
      cardCount: ++state.cardCount,
    });
  };
  const decreaseCardCount = () => {
    setState({
      ...state,
      cardCount: --state.cardCount,
    });
  };
  const setDeck = (newDeck: Card[]) => {
    setState({
      ...state,
      deck: newDeck,
    });
  };
  const reshuffleDeck = (newDeck: Card[]) => {
    setState({
      ...state,
      deck: newDeck,
      discardPile: [],
    });
  };
  const drawCard = () => {
    setState({
      ...state,
      activeCard: state.deck[Math.floor(Math.random() * state.deck.length)],
    });
  };
  const guessedCorrect = (points: number, card: Card) => {
    setState({
      ...state,
      activePlayer: {
        id: state.activePlayer.id,
        name: state.activePlayer.name,
        score: state.activePlayer.score + points,
      },
      discardPile: [...state.discardPile, card],
    });
  };
  const setTurnTime = (time: number) => {
    setState({
      ...state,
      turnTime: time,
    });
  };
  const increaseRoundCount = () => {
    setState({
      ...state,
      roundCount: state.roundCount++,
    });
  };
  const setCardpacks = (cardpacks: Cardpack[]) => {
    setState({
      ...state,
      cardpacks: cardpacks,
    });
  };
  const setActivePlayer = (player: Player) => {
    setState({
      ...state,
      activePlayer: player,
    });
  };
  const increaseTurnCounter = () => {
    setState({
      ...state,
      turnCounter: ++state.turnCounter,
    });
  };
  const shuffleSkipped = () => {
    let tempDeck = state.skippedPile;
    tempDeck = shuffle(tempDeck);
    tempDeck = shuffle(tempDeck);
    setState({
      ...state,
      deck: tempDeck,
    });
  };

  const value = {
    state,
    setDeck,
    addToTeam1,
    addToTeam2,
    removePlayer,
    selectCardpack,
    removeCardpack,
    increaseCardCount,
    decreaseCardCount,
    reshuffleDeck,
    drawCard,
    guessedCorrect,
    setTurnTime,
    increaseRoundCount,
    setCardpacks,
    setActivePlayer,
    clearTeams,
    increaseTurnCounter,
    shuffleSkipped,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
