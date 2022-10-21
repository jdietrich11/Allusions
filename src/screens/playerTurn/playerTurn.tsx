import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";

import { GlobalContext } from "../../context/globalContext";
import { IStackScreenProps } from "../../library/StackScreenProps";
import playerTurnStyles from "./playerTurn.styles";

const PlayerTurnScreen: React.FC<IStackScreenProps> = (props) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { navigation } = props;
  const [timer, setTimer] = useState(state.turnTime);

  const tickTimer = () => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer < 1) {
        navigation.navigate("scores");
      }
    }, 1000);
  };

  useEffect(() => {
    tickTimer();
  }, [timer]);

  return (
    <View style={playerTurnStyles.playerTurnPageContainer}>
      <View style={playerTurnStyles.timerContainer}>
        <Text style={playerTurnStyles.timerText}>{timer + " Seconds"}</Text>
      </View>
      <View style={playerTurnStyles.middlePlayArea}>
        <View style={playerTurnStyles.skipContainer}>
          <Text style={playerTurnStyles.areaText}>Skip</Text>
        </View>
        <View style={playerTurnStyles.cardContainer}>
          <View style={playerTurnStyles.cardImage}></View>
          <View style={playerTurnStyles.cardTitle}>
            <Text style={playerTurnStyles.cardTitleText}>Kevin James</Text>
          </View>
          <View style={playerTurnStyles.cardDescription}>
            <Text style={playerTurnStyles.cardDescriptionText}>
              star of paul blart mall cop, king of queens, and here come's the
              boom
            </Text>
          </View>
        </View>
        <View style={playerTurnStyles.deckContainer}>
          <Text style={playerTurnStyles.areaText}>Deck</Text>
        </View>
      </View>
      <View style={playerTurnStyles.correctContainer}>
        <Text style={playerTurnStyles.correctText}>Correct</Text>
      </View>
    </View>
  );
};

export default PlayerTurnScreen;
