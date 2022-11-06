import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";

import { GlobalContext } from "../../context/globalContext";
import { IStackScreenProps } from "../../library/StackScreenProps";
import DeckArea from "../../helper/deck/deck";
import SkipArea from "../../helper/skipArea/skipArea";
import playerTurnStyles from "./playerTurn.styles";
import ActiveCard from "../../helper/activeCard/activeCard";

const PlayerTurnScreen: React.FC<IStackScreenProps> = (props) => {
  const { state, shuffleSkipped } = useContext(GlobalContext);
  const { navigation, name, route } = props;
  const [timer, setTimer] = useState(state.turnTime);

  const tickTimer = () => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer < 1) {
        if (state.deck.length > 0) {
          // set active player => has played
          // increase turn counter
          // navigate to instruction
        }
      }
    }, 1000);
  };

  useEffect(() => {
    tickTimer();
  }, [timer]);

  useEffect(() => {
    if (state.deck.length < 2 && state.skippedPile.length > 0) {
      shuffleSkipped();
      return;
    }
    if (state.deck.length < 1 && state.skippedPile.length < 1) {
      navigation.navigate("scores");
      return;
    }
  }, [state.deck.length]);

  return (
    <View style={playerTurnStyles.playerTurnPageContainer}>
      <View style={playerTurnStyles.timerContainer}>
        <Text style={playerTurnStyles.timerText}>{timer + " Seconds"}</Text>
      </View>
      <View style={playerTurnStyles.middlePlayArea}>
        <SkipArea />
        <ActiveCard />
        <DeckArea />
      </View>
      <View style={playerTurnStyles.correctContainer}>
        <Text style={playerTurnStyles.correctText}>Correct</Text>
      </View>
    </View>
  );
};

export default PlayerTurnScreen;
