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
  const [counter, setCounter] = useState(0);

  const getDeck = async (query: string) => {
    try {
      let cards = await apiCall(query);
      let { card } = cards.data;
      for (let j = 0; j < card.length; j++) {
        dispatch({
          type: "ADD_CARD_TO_DECK",
          payload: card[j],
        });
      }
      setCounter(counter + 1);
    } catch (err) {
      alert(err);
    }
  };

  const shuffleUp = async () => {
    let newDeck = await shuffle(state.deck);
    newDeck = await shuffle(state.deck);
    await dispatch({
      type: "SHUFFLED_DECK",
      payload: newDeck,
    });
  };

  const limitDeck = async () => {
    await dispatch({ type: "LIMIT_DECK" });
  };

  useEffect(() => {
    state.roundCount++;
    if (state.roundCount === 1) {
    }
    for (let i = 0; i < state.selectedCardpacks.length; i++) {
      let cardsQuery = `card (where: {cardpack_id : {_eq: ${state.selectedCardpacks[i]}}}) { id card_name card_hint point_value image_url}`;
      getDeck(cardsQuery);
    }

    setRule(state.roundCount);
  }, []);

  useEffect(() => {
    shuffleUp().then(() => limitDeck());
  }, [counter]);

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
            <Text style={instructionStyles.playerName}>Player Turn</Text>
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
