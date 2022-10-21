import { Teams, ShuffleProps } from "../interfaces/interfaces";

export const shuffle = (props: ShuffleProps[]) => {
  let shuffle1 = props.sort(() => Math.random() - 0.5);
  let shuffle2 = shuffle1.sort(() => Math.random() - 0.5);
  return shuffle2;
};
export const shufflePlayers = (props: Teams[]) => {
  let shuffle1 = props.sort(() => Math.random() - 0.5);
  let shuffle2 = shuffle1.sort(() => Math.random() - 0.5);
  return shuffle2;
};
