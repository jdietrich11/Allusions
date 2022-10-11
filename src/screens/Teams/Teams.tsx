import React from "react";
import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import teamsStyles from "./teams.styles";

interface teams {
  id: number;
  name: string;
}

interface Props {
  navigation: any;
}

const TeamsScreen: React.FC<Props> = (props) => {
  const { navigation } = props;
  const [team1, setTeam1] = useState<teams[]>([]);
  const [team1Input, setTeam1Input] = useState("");
  const [team2, setTeam2] = useState<teams[]>([]);
  const [team2Input, setTeam2Input] = useState("");

  const addTeam1Member = (inp: string) => {
    setTeam1((prevTeamMems) => [
      ...prevTeamMems,
      { id: Math.random(), name: inp },
    ]);
    setTeam1Input("");
  };

  const addTeam2Member = (input: string) => {
    setTeam2((prevTeamMems) => [
      ...prevTeamMems,
      { id: Math.random(), name: input },
    ]);
    setTeam2Input("");
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
        {team1
          ? team1.map((teamMember) => (
              <View key={teamMember.id}>
                <Text>{teamMember.name}</Text>
              </View>
            ))
          : ""}
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
        {team2
          ? team2.map((teamMember) => (
              <View key={teamMember.id}>
                <Text>{teamMember.name}</Text>
              </View>
            ))
          : ""}
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
        <Pressable style={teamsStyles.nextButtonContainer}>
          <Text>Randomize</Text>
        </Pressable>
        <Pressable
          style={teamsStyles.nextButtonContainer}
          onPress={() => navigation.navigate("cardpackSelect")}
        >
          <Text style={teamsStyles.nextButtonText}>&rarr;</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TeamsScreen;
