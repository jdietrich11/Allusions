import apiCall from "../APi/api";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";

const getDeck = async () => {
  const { state, dispatch } = useContext(GlobalContext);
  try {
    for (let i = 0; i < state.selectedCardpacks.length; i++) {
      let cardsQuery = `card (where: {cardpack_id : {_eq: ${state.selectedCardpacks[i]}}}) { id card_name card_hint point_value image_url}`;
      let cards = await apiCall(cardsQuery);
      let { card } = cards.data;
      for (let j = 0; j < card.length; j++) {
        await dispatch({ type: "ADD_CARD_TO_DECK", payload: card[j] });
      }
    }
    console.log(state.deck[0]);
    return;
  } catch (err) {
    alert(err);
  }
};

export default getDeck;
