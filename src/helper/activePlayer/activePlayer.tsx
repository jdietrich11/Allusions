import React, { useContext } from "react";
import { View, Text } from "react-native";

import { GlobalContext } from "../../context/globalContext";

import activePlayerStyles from "./activePlayer.styles";

const ActivePlayer: React.FC = () => {
  const { state } = useContext(GlobalContext);
  return (
    <View style={activePlayerStyles.playerNameContainer}>
      <Text
        style={activePlayerStyles.playerName}
      >{`${state.activePlayer.name}`}</Text>
    </View>
  );
};

export default ActivePlayer;
