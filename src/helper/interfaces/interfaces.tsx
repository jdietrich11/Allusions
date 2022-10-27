export interface Teams {
  id: number;
  name: string;
}

export interface Cardpack {
  id: number;
  cardpack_name: string;
  image_url: string;
  price: number;
}

export interface ShuffleProps {
  id: number;
  card_name: string;
  card_hint: string;
  point_value: number;
  image_url: string;
}

export interface Card {
  id: number;
  card_name: string;
  card_hint: string;
  point_value: number;
  image_url: string;
}

export interface RulesInt {
  rules: RuleGroup;
}

interface RuleGroup {
  id: number;
  rules: string[];
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Player {
  id: number;
  name: string;
  score: number;
}
