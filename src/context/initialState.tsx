import { Card, Cardpack, Player } from "../helper/interfaces/interfaces";

export interface AppState {
  team1: Player[];
  team1HasPlayed: Player[];
  team1Score: number;
  team1RoundWins: number;
  team2: Player[];
  team2HasPlayed: Player[];
  team2Score: number;
  team2RoundWins: number;
  cardpacks: Cardpack[];
  selectedCardpacks: number[];
  turnTime: number;
  cardCount: number;
  roundCount: number;
  round1MVP: string;
  round2MVP: string;
  round3MVP: string;
  fastestTalker: string;
  bestOneWordPony: string;
  bestHandAndBodyFlapper: string;
  fastestRightAnswer: string;
  deck: Card[];
  skippedPile: Card[];
  discardPile: Card[];
  activeCard: Card;
  activePlayer: Player;
  turnCounter: number;
}

// initial state
export const initialState: AppState = {
  team1: [
    { name: `player1`, id: 1, score: 0 },
    { name: `player3`, id: 3, score: 0 },
  ],
  team1HasPlayed: [],
  team1Score: 0,
  team1RoundWins: 0,
  team2: [
    { name: `player2`, id: 2, score: 0 },
    { name: `player4`, id: 4, score: 0 },
  ],
  team2HasPlayed: [],
  team2Score: 0,
  team2RoundWins: 0,
  cardpacks: [],
  selectedCardpacks: [],
  turnTime: 5,
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
  skippedPile: [],
  activeCard: {
    id: 0,
    card_name: "",
    card_hint: "",
    image_url: "",
    point_value: 0,
  },
  activePlayer: {
    id: 0,
    name: "",
    score: 0,
  },
  turnCounter: 1,
};
