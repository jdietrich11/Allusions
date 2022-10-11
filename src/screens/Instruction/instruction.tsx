import React from "react";
import { Text, View, Pressable } from "react-native";
import { IStackScreenProps } from "../../library/StackScreenProps";

import instructionStyles from "./instruction.styles";

const Round1Rules = [
  { key: "read description" },
  { key: "make sound effects" },
  { key: "use as many words as needed" },
];

const InstructionScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation } = props;

  return (
    <View style={instructionStyles.informationPageContainer}>
      <View style={instructionStyles.timerContainer}>
        <Text style={instructionStyles.timerText}>60 Seconds</Text>
      </View>
      <View style={instructionStyles.playAreaInfo}>
        <View style={instructionStyles.skipContainer}>
          <Text style={instructionStyles.skipText}>skip</Text>
        </View>
        <View style={instructionStyles.playerRulesContainer}>
          <View style={instructionStyles.playerNameContainer}>
            <Text style={instructionStyles.playerName}>Player Turn</Text>
          </View>
          <View style={instructionStyles.rulesContainer}>
            <Text style={instructionStyles.rulesTitle}>You Can...</Text>
            {Round1Rules.map((rule) => {
              return <Text style={instructionStyles.ruleText}>{rule.key}</Text>;
            })}
          </View>
          <Pressable
            style={instructionStyles.readyButton}
            onPress={() => navigation.navigate("playerTurn")}
          >
            <Text style={instructionStyles.readyButtonText}>Ready</Text>
          </Pressable>
        </View>
        <View style={instructionStyles.deckContainer}>
          <Text style={instructionStyles.deckText}>deck</Text>
        </View>
      </View>
      <View style={instructionStyles.scoreContainer}>
        <Text style={instructionStyles.scoreText}>drag to score</Text>
      </View>
    </View>
  );
};

export default InstructionScreen;
