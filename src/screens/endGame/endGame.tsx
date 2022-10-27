import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";

import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";

import endGameStyles from "./endGame.styles";

const EndGameScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation } = props;
  const { state } = useContext(GlobalContext);

  return (
    <View style={endGameStyles.endGameContainer}>
      <View style={endGameStyles.gameOverContainer}>
        <Text style={endGameStyles.gameOverText}>Game Over</Text>
      </View>
      <View style={endGameStyles.awardsContainer}>
        <Text style={endGameStyles.awardText}>
          Fastest Talker: {state.fastestTalker}
        </Text>
        <Text style={endGameStyles.awardText}>
          Best One Word Pony: {state.bestOneWordPony}
        </Text>
        <Text style={endGameStyles.awardText}>
          Best Hand and Body Flapper: {state.bestHandAndBodyFlapper}
        </Text>
        <Text style={endGameStyles.awardText}>
          Fastest Right Answer: {state.fastestRightAnswer}
        </Text>
      </View>
      <View style={endGameStyles.buttons}>
        <Pressable
          style={endGameStyles.bttn}
          onPress={() => navigation.navigate("cardpackSelect")}
        >
          <Text style={endGameStyles.buttonText}>Play Again</Text>
        </Pressable>
        <Pressable
          style={endGameStyles.bttn}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={endGameStyles.buttonText}>Done</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EndGameScreen;
