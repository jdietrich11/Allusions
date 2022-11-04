import React, { useContext } from "react";
import { View, Text } from "react-native";

import { GlobalContext } from "../../context/globalContext";
import deckStyles from "./deck.styles";

const DeckArea: React.FC = () => {
  const { state } = useContext(GlobalContext);
  return (
    <View style={deckStyles.deckContainer}>
      <View>
        <Text>{state.deck.length}</Text>
      </View>
      <Text style={deckStyles.deckText}>deck</Text>
    </View>
  );
};

export default DeckArea;
