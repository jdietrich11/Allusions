import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";

import { GlobalContext } from "../../context/globalContext";
import { IStackScreenProps } from "../../library/StackScreenProps";
import DeckArea from "../../helper/deck/deck";
import SkipArea from "../../helper/skipArea/skipArea";
import playerTurnStyles from "./playerTurn.styles";
import ActiveCard from "../../helper/activeCard/activeCard";

const PlayerTurnScreen: React.FC<IStackScreenProps> = (props) => {
  const {
    state,
    shuffleSkipped,
    increaseTurnCounter,
    addTeam1HasPlayed,
    addTeam2HasPlayed,
  } = useContext(GlobalContext);
  const { navigation, name, route } = props;
  const [timer, setTimer] = useState(state.turnTime);

  const endTurn = () => {
    let player = state.activePlayer;
    if (state.turnCounter % 2 === 1) {
      addTeam1HasPlayed(player);
      console.log(state.team1HasPlayed);
      return;
    }
    if (state.turnCounter % 2 === 0) {
      console.log(2);
      addTeam2HasPlayed(player);
      return;
    }
  };

  const tickTimer = () => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer < 1) {
        if (state.deck.length > 0) {
          // move active player => teamhasplayed
          endTurn();
          // increase turn counter
          increaseTurnCounter();
          // navigate to instruction
          navigation.navigate("instruction");
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
