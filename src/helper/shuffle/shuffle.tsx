interface ShuffleProps {
  id: number;
  card_name: string;
  card_hint: string;
  point_value: number;
  image_url: string;
}

const shuffle = (props: ShuffleProps[]) => {
  let shuffle1 = props.sort(() => Math.random() - 0.5);
  let shuffle2 = shuffle1.sort(() => Math.random() - 0.5);
  return shuffle2;
};

export default shuffle;
