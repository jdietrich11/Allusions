import React, { useState, useContext, useEffect } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";
import { shufflePlayers } from "../../helper/shuffle/shuffle";
import { Teams } from "../../helper/interfaces/interfaces";

import teamsStyles from "./teams.styles";

const TeamsScreen: React.FC<IStackScreenProps> = (props) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { navigation } = props;
  const [team1Input, setTeam1Input] = useState("");
  const [team2Input, setTeam2Input] = useState("");

  const addTeam1Member = (inp: string) => {
    dispatch({
      type: "ADD_TO_TEAM_1",
      payload: { id: Math.random(), name: inp },
    });
    setTeam1Input("");
  };

  const addTeam2Member = (inp: string) => {
    dispatch({
      type: "ADD_TO_TEAM_2",
      payload: { id: Math.random(), name: inp },
    });
    setTeam2Input("");
  };

  const toCardpack = () => {
    // if (state.team1.length + state.team2.length > 3) {
    //   navigation.navigate("cardpackSelect");
    // }
    // if (state.team1.length + state.team2.length <= 3) {
    //   alert("Sorry you need at least 4 players");
    // }
    navigation.navigate("cardpackSelect");
  };

  const randomizeTeams = () => {
    let players: Teams[] = [];
    for (let i = 0; i < state.team1.length; i++) {
      players = [...players, state.team1[i]];
    }
    for (let j = 0; j < state.team2.length; j++) {
      players = [...players, state.team2[j]];
    }

    players = shufflePlayers(players);

    dispatch({
      type: "CLEAR_TEAMS",
    });
    for (let i = 0; i < players.length / 2; i++) {
      dispatch({
        type: "ADD_TO_TEAM_1",
        payload: players[i],
      });
    }
    for (let j = players.length / 2; j < players.length; j++) {
      dispatch({
        type: "ADD_TO_TEAM_2",
        payload: players[j],
      });
    }
  };

  return (
    <View style={teamsStyles.teamsPageContainer}>
      <View style={teamsStyles.headerContainer}>
        <Pressable>
          <Text style={teamsStyles.headerText}>&larr;</Text>
        </Pressable>
        <View style={teamsStyles.howToContainer}>
          <Text style={teamsStyles.howToText}>How to play</Text>
          <Pressable style={teamsStyles.howToButton}>
            <Text style={teamsStyles.howToButtonText}>?</Text>
          </Pressable>
        </View>
      </View>
      <View style={teamsStyles.team1Container}>
        <View style={teamsStyles.teamHeader}>
          <Text style={teamsStyles.teamHeaderText}>Team 1</Text>
        </View>
        <View style={teamsStyles.playersContainer}>
          {state.team1
            ? state.team1.map((teamMember: Teams) => (
                <View style={teamsStyles.player} key={teamMember.id}>
                  <Text>{teamMember.name}</Text>
                  <Pressable
                    style={teamsStyles.removePlyrBtn}
                    onPress={() =>
                      dispatch({
                        type: "REMOVE_PLAYER",
                        payload: teamMember.id,
                      })
                    }
                  >
                    <Text style={teamsStyles.removePlyrBtnText}>x</Text>
                  </Pressable>
                </View>
              ))
            : ""}
        </View>
        <View>
          <TextInput
            placeholder="+ADD"
            value={team1Input}
            style={teamsStyles.teamMemberTextInput}
            onChangeText={(text) => setTeam1Input(text)}
            onSubmitEditing={() => addTeam1Member(team1Input)}
          />
        </View>
      </View>
      <View style={teamsStyles.team2Container}>
        <View style={teamsStyles.teamHeader}>
          <Text style={teamsStyles.teamHeaderText}>Team 2</Text>
        </View>
        <View style={teamsStyles.playersContainer}>
          {state.team2
            ? state.team2.map((teamMember: Teams) => (
                <View style={teamsStyles.player} key={teamMember.id}>
                  <Text>{teamMember.name}</Text>
                  <Pressable
                    style={teamsStyles.removePlyrBtn}
                    onPress={() =>
                      dispatch({
                        type: "REMOVE_PLAYER",
                        payload: teamMember.id,
                      })
                    }
                  >
                    <Text style={teamsStyles.removePlyrBtnText}>x</Text>
                  </Pressable>
                </View>
              ))
            : ""}
        </View>
        <View>
          <TextInput
            placeholder="+ADD"
            value={team2Input}
            style={teamsStyles.teamMemberTextInput}
            onChangeText={(text) => setTeam2Input(text)}
            onSubmitEditing={() => addTeam2Member(team2Input)}
          />
        </View>
      </View>
      <View style={teamsStyles.nextContainer}>
        <Pressable
          onPress={() => randomizeTeams()}
          style={teamsStyles.nextButtonContainer}
        >
          <Text>Randomize</Text>
        </Pressable>
        <Pressable
          style={teamsStyles.nextButtonContainer}
          onPress={() => toCardpack()}
        >
          <Text style={teamsStyles.nextButtonText}>&rarr;</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TeamsScreen;
