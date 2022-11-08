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
  drawCard: (card: Card) => void;
  guessedCorrect: (points: number, card: Card) => void;
  setTurnTime: (time: number) => void;
  increaseRoundCount: () => void;
  setCardpacks: (cardpacks: Cardpack[]) => void;
  setTeam1ActivePlayer: () => void;
  setTeam2ActivePlayer: () => void;
  clearTeams: () => void;
  increaseTurnCounter: () => void;
  shuffleSkipped: () => void;
  increaseScore: (points: number, card: Card) => void;
  addToSkipped: (card: Card) => void;
  addTeam1HasPlayed: (player: Player) => void;
  addTeam2HasPlayed: (player: Player) => void;
  shuffleTeam1: (team: Player[]) => void;
  shuffleTeam2: (team: Player[]) => void;
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
  setTeam1ActivePlayer: () => {},
  setTeam2ActivePlayer: () => {},
  clearTeams: () => {},
  increaseTurnCounter: () => {},
  shuffleSkipped: () => {},
  increaseScore: () => {},
  addToSkipped: () => {},
  addTeam1HasPlayed: () => {},
  addTeam2HasPlayed: () => {},
  shuffleTeam1: () => {},
  shuffleTeam2: () => {},
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
  const drawCard = (card: Card) => {
    setState({
      ...state,
      activeCard: card,
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
  const setTeam1ActivePlayer = () => {
    let player = state.team1[0];
    setState({
      ...state,
      team1: state.team1.filter((teamMember) => teamMember.id !== player.id),
      activePlayer: player!,
    });
  };
  const setTeam2ActivePlayer = () => {
    let player = state.team2[0];
    setState({
      ...state,
      team2: state.team2.filter((teamMember) => teamMember.id !== player.id),
      activePlayer: player!,
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
  const increaseScore = (points: number, card: Card) => {
    let newCard = state.deck.shift();
    setState({
      ...state,
      activePlayer: {
        id: state.activePlayer.id,
        name: state.activePlayer.name,
        score: state.activePlayer.score + points,
      },
      discardPile: [...state.discardPile, card],
      activeCard: newCard!,
    });
  };
  const addToSkipped = (card: Card) => {
    let newCard = state.deck.shift();
    setState({
      ...state,
      skippedPile: [...state.skippedPile, card],
      activeCard: newCard!,
    });
  };
  const addTeam1HasPlayed = (player: Player) => {
    setState({
      ...state,
      team1HasPlayed: [...state.team1HasPlayed, player],
    });
  };
  const addTeam2HasPlayed = (player: Player) => {
    setState({
      ...state,
      team2HasPlayed: [...state.team2HasPlayed, player],
    });
  };
  const shuffleTeam1 = (team: Player[]) => {
    setState({
      ...state,
      team1: team,
    });
  };
  const shuffleTeam2 = (team: Player[]) => {
    setState({
      ...state,
      team2: team,
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
    setTeam1ActivePlayer,
    setTeam2ActivePlayer,
    clearTeams,
    increaseTurnCounter,
    shuffleSkipped,
    increaseScore,
    addToSkipped,
    addTeam1HasPlayed,
    addTeam2HasPlayed,
    shuffleTeam1,
    shuffleTeam2,
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
