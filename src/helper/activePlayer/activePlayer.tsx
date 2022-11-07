import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";

import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";
import { shufflePlayers } from "../shuffle/shuffle";
import { Player } from "../interfaces/interfaces";

import activePlayerStyles from "./activePlayer.styles";

const ActivePlayer: React.FC<IStackScreenProps> = (props) => {
  const { route } = props;
  const {
    state,
    shuffleTeam1,
    shuffleTeam2,
    setTeam1ActivePlayer,
    setTeam2ActivePlayer,
  } = useContext(GlobalContext);

  const teamsShuffle = (team: Player[]) => {
    let players = shufflePlayers(team);
    players = shufflePlayers(players);
    return players;
  };

  useEffect(() => {
    if (state.turnCounter % 2 === 1) {
      if (state.team1.length === 0) {
        let team = teamsShuffle(state.team1HasPlayed);
        shuffleTeam1(team);
      }
      setTeam1ActivePlayer();
    }
    if (state.turnCounter % 2 === 0) {
      if (state.team2.length === 0) {
        let team = teamsShuffle(state.team2HasPlayed);
        shuffleTeam2(team);
      }
      setTeam2ActivePlayer();
    }
  }, [state.turnCounter]);

  return (
    <View style={activePlayerStyles.playerNameContainer}>
      <Text
        style={activePlayerStyles.playerName}
      >{`${state.activePlayer.name}`}</Text>
    </View>
  );
};

export default ActivePlayer;
