import { Card, Cardpack, Player } from "../helper/interfaces/interfaces";

export interface AppState {
  team1: Player[];
  team1Score: number;
  team1RoundWins: number;
  team2: Player[];
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
  discardPile: Card[];
  activeCard: Card;
  activePlayer: Player;
}

// initial state
export const initialState: AppState = {
  team1: [],
  team1Score: 0,
  team1RoundWins: 0,
  team2: [],
  team2Score: 0,
  team2RoundWins: 0,
  cardpacks: [],
  selectedCardpacks: [],
  turnTime: 60,
  cardCount: 60,
  roundCount: 0,
  round1MVP: "",
  round2MVP: "",
  round3MVP: "",
  fastestTalker: "",
  bestOneWordPony: "",
  bestHandAndBodyFlapper: "",
  fastestRightAnswer: "",
  deck: [],
  discardPile: [],
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
};
