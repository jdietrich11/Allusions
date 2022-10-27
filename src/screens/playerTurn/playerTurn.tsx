import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image } from "react-native";

import { GlobalContext } from "../../context/globalContext";
import { IStackScreenProps } from "../../library/StackScreenProps";
import playerTurnStyles from "./playerTurn.styles";
import { Card } from "../../helper/interfaces/interfaces";

const PlayerTurnScreen: React.FC<IStackScreenProps> = (props) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { navigation } = props;
  const [timer, setTimer] = useState(state.turnTime);
  const [activeCard, setActiveCard] = useState<Card>();

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
    setActiveCard(state.deck[0]);
  }, []);

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
          <View style={playerTurnStyles.cardImage}>
            <Image source={{ uri: activeCard?.image_url }} />
          </View>
          <View style={playerTurnStyles.cardTitle}>
            <Text style={playerTurnStyles.cardTitleText}>
              {activeCard?.card_name}
            </Text>
          </View>
          <View style={playerTurnStyles.cardDescription}>
            <Text style={playerTurnStyles.cardDescriptionText}>
              {activeCard?.card_hint}
            </Text>
          </View>
          <View>
            <Text>{activeCard?.point_value}</Text>
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
