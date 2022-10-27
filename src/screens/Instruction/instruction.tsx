import React, { useEffect, useContext, useState } from "react";
import { Text, View, Pressable } from "react-native";

import apiCall from "../../helper/APi/api";
import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";
import { shuffle } from "../../helper/shuffle/shuffle";
import { rulesData } from "../../data/rules";

import instructionStyles from "./instruction.styles";

const InstructionScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation } = props;
  const { state, dispatch } = useContext(GlobalContext);
  const [rules, setRules] = useState<string[]>([]);

  const getDeck = async (query: string) => {
    try {
      let cards = await apiCall(query);
      let { card } = cards.data;
      let newDeck = await shuffle(card);
      newDeck = await shuffle(newDeck);
      newDeck = newDeck.slice(0, state.cardCount);
      dispatch({
        type: "SET_DECK",
        payload: newDeck,
      });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    state.roundCount++;
    if (state.roundCount === 1) {
    }
    let cardsQuery = `card (where: {cardpack_id : {_in: [${state.selectedCardpacks}]}}) { id card_name card_hint point_value image_url}`;
    getDeck(cardsQuery);

    dispatch({
      type: "SET_ACTIVE_PLAYER",
      payload: state.team1[0],
    });

    setRule(state.roundCount);
  }, []);

  const setRule = (round: number) => {
    if (round === 1) {
      return setRules(rulesData[0].rules);
    }
    if (round === 2) {
      return setRules(rulesData[1].rules);
    }
    if (round === 3) {
      return setRules(rulesData[2].rules);
    }
  };

  return (
    <View style={instructionStyles.informationPageContainer}>
      <View style={instructionStyles.timerContainer}>
        <Text
          style={instructionStyles.timerText}
        >{`${state.turnTime} Seconds`}</Text>
      </View>
      <View style={instructionStyles.playAreaInfo}>
        <View style={instructionStyles.skipContainer}>
          <Text style={instructionStyles.skipText}>skip</Text>
        </View>
        <View style={instructionStyles.playerRulesContainer}>
          <View style={instructionStyles.playerNameContainer}>
            <Text
              style={instructionStyles.playerName}
            >{`${state.activePlayer.name}`}</Text>
          </View>
          <View style={instructionStyles.rulesContainer}>
            <Text style={instructionStyles.rulesTitle}>You Can...</Text>
            {rules.map((rule) => {
              return (
                <Text key={rule} style={instructionStyles.ruleText}>
                  {rule}
                </Text>
              );
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
          <View>
            <Text>{state.deck.length}</Text>
          </View>
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
//{state.deck.length > 0 ? state.deck.length : ""}
