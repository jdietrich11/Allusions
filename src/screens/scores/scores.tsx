import React, { useState, useEffect, useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { GlobalContext } from "../../context/globalContext";
import { IStackScreenProps } from "../../library/StackScreenProps";

import scoreScreenStyles from "./scores.styles";

const ScoreScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation } = props;
  const { state, increaseRoundCount, reshuffleDeck } =
    useContext(GlobalContext);

  const nextScreen = () => {
    if (state.roundCount === 1 || state.roundCount === 2) {
      // reshuffle cards
      let newDeck = state.discardPile;
      reshuffleDeck(newDeck);

      increaseRoundCount();
      navigation.navigate("instruction");
      return;
    }
    if (state.roundCount === 3) {
      navigation.navigate("endGame");
      return;
    }
  };

  return (
    <View style={scoreScreenStyles.scoreScreenContainer}>
      <View style={scoreScreenStyles.roundContainer}>
        <Text style={scoreScreenStyles.roundText}>
          {"Round " + state.roundCount + " complete"}
        </Text>
      </View>
      <View style={scoreScreenStyles.teamsContainer}>
        <View style={scoreScreenStyles.teamContainer}>
          <Text style={scoreScreenStyles.teamTitle}>Team 1</Text>
          <Text style={scoreScreenStyles.teamScore}>{state.team1Score}</Text>
          <Text style={scoreScreenStyles.teamMVP}>{"MVP: " + "James"}</Text>
          {state.team1.map((teamMember) => (
            <View
              key={teamMember.id}
              style={scoreScreenStyles.teamMemberContainer}
            >
              <Text style={scoreScreenStyles.teamMemberName}>
                {teamMember.name}
              </Text>
              <Text style={scoreScreenStyles.teamMemberScore}>
                {teamMember.score}
              </Text>
            </View>
          ))}
        </View>
        <View style={scoreScreenStyles.teamContainer}>
          <Text style={scoreScreenStyles.teamTitle}>Team 2</Text>
          <Text style={scoreScreenStyles.teamScore}>{state.team2Score}</Text>
          <Text style={scoreScreenStyles.teamMVP}>{"MVP: " + "Sarah"}</Text>
          {state.team2.map((teamMember) => (
            <View
              key={teamMember.id}
              style={scoreScreenStyles.teamMemberContainer}
            >
              <Text style={scoreScreenStyles.teamMemberName}>
                {teamMember.name}
              </Text>
              <Text style={scoreScreenStyles.teamMemberScore}>
                {teamMember.score}
              </Text>
            </View>
          ))}
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
      <Pressable onPress={nextScreen} style={scoreScreenStyles.nextScreenBtn}>
        <Text style={scoreScreenStyles.nextScreenBtnText}>Next</Text>
      </Pressable>
    </View>
  );
};

export default ScoreScreen;
