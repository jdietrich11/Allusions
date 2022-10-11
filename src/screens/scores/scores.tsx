import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { IStackScreenProps } from "../../library/StackScreenProps";

import scoreScreenStyles from "./scores.styles";

const ScoreScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation } = props;
  const [round, setRound] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("endGame");
    }, 3000);
  }, []);

  return (
    <View style={scoreScreenStyles.scoreScreenContainer}>
      <View style={scoreScreenStyles.roundContainer}>
        <Text style={scoreScreenStyles.roundText}>
          {"Round " + round + " complete"}
        </Text>
      </View>
      <View style={scoreScreenStyles.teamsContainer}>
        <View style={scoreScreenStyles.teamContainer}>
          <Text style={scoreScreenStyles.teamTitle}>Team 1</Text>
          <Text style={scoreScreenStyles.teamScore}>22</Text>
          <Text style={scoreScreenStyles.teamMVP}>{"MVP: " + "James"}</Text>
        </View>
        <View style={scoreScreenStyles.teamContainer}>
          <Text style={scoreScreenStyles.teamTitle}>Team 2</Text>
          <Text style={scoreScreenStyles.teamScore}>32</Text>
          <Text style={scoreScreenStyles.teamMVP}>{"MVP: " + "Sarah"}</Text>
        </View>
      </View>
      <View style={scoreScreenStyles.winsTitleContainer}>
        <Text style={scoreScreenStyles.winsTitleText}>Wins</Text>
      </View>
      <View style={scoreScreenStyles.winsCounterContainer}>
        <View style={scoreScreenStyles.teamRoundContainer}>
          <Text style={scoreScreenStyles.teamRoundWinText}>
            {"0 " + "rounds"}
          </Text>
        </View>
        <View style={scoreScreenStyles.teamRoundContainer}>
          <Text style={scoreScreenStyles.teamRoundWinText}>
            {"1 " + "rounds"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScoreScreen;
