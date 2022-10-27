import { Card, Cardpack, Player } from "../helper/interfaces/interfaces";

export type Action =
  | { type: "ADD_TO_TEAM_1"; payload: { id: number; name: string } }
  | { type: "ADD_TO_TEAM_2"; payload: { id: number; name: string } }
  | { type: "SELECT_CARDPACK"; payload: number }
  | { type: "REMOVE_CARDPACK"; payload: number }
  | { type: "INCREASE_CARD_COUNT" }
  | { type: "DECREASE_CARD_COUNT" }
  | { type: "SET_DECK"; payload: Card[] }
  | { type: "RESHUFFLE_DECK" }
  | { type: "DRAW_CARD" }
  | { type: "GUESSED_CORRECT" }
  | { type: "CLEAR_TEAMS" }
  | { type: "REMOVE_PLAYER"; payload: number }
  | { type: "SET_TURN_TIME"; payload: number }
  | { type: "INCREASE_ROUND_COUNT" }
  | { type: "SET_CARDPACKS"; payload: Cardpack[] }
  | {
      type: "SET_ACTIVE_PLAYER";
      payload: Player;
    };

export interface ProviderProps {
  children: React.ReactNode;
}
