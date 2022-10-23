export interface Teams {
  id: number;
  name: string;
}

export interface Cardpack {
  id: any;
  cardpack_name: string;
  image_url: string;
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
