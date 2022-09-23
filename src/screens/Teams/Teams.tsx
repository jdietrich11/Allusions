import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";

import teamsStyles from "./teams.styles";

interface teams {
  map(arg0: (teamMember: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
}
interface teamsInput {
  input: string;
}

const TeamsScreen: React.FC = (props) => {
  const [team1, setTeam1] = useState<teams>();
  const [team1Input, setTeam1Input] = useState("");
  const [team2, setTeam2] = useState([]);
  const [team2Input, setTeam2Input] = useState("");

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
              <View key={teamMember}>
                <Text>{teamMember}</Text>
              </View>
            ))
          : ""}
        <View>
          <TextInput
            placeholder="+ADD"
            value={team1Input}
            style={teamsStyles.teamMemberTextInput}
            onChangeText={(text) => setTeam1Input(text)}
            onSubmitEditing={() => console.log(team1Input)}
          />
        </View>
      </View>
      <View style={teamsStyles.team2Container}>
        <View style={teamsStyles.teamHeader}>
          <Text style={teamsStyles.teamHeaderText}>Team 2</Text>
        </View>
        {team2.map((teamMember) => (
          <View key={teamMember}>
            <Text>{teamMember}</Text>
          </View>
        ))}
        <View>
          <TextInput
            placeholder="+ADD"
            value={team2Input}
            style={teamsStyles.teamMemberTextInput}
            onChangeText={(text) => setTeam2Input(text)}
            onSubmitEditing={() => console.log(team2Input)}
          />
        </View>
      </View>
      <View style={teamsStyles.nextContainer}>
        <Pressable style={teamsStyles.nextButtonContainer}>
          <Text>Randomize</Text>
        </Pressable>
        <Pressable style={teamsStyles.nextButtonContainer}>
          <Text style={teamsStyles.nextButtonText}>&rarr;</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TeamsScreen;
