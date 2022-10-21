import React, { useEffect, useContext, useState } from "react";
import { Text, View, Pressable } from "react-native";

import apiCall from "../../helper/APi/api";
import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";
import { shuffle } from "../../helper/shuffle/shuffle";

import instructionStyles from "./instruction.styles";

const Round1Rules = [
  { key: "read description" },
  { key: "make sound effects" },
  { key: "use as many words as needed" },
];
const Round2Rules = [];

const InstructionScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation } = props;
  const { state, dispatch } = useContext(GlobalContext);
  const [rules, setRules] = useState<string[]>([]);

  useEffect(() => {
    if (state.roundCount === 1) {
      const getDeck = async () => {
        for (let i = 0; i < state.selectedCardpacks.length; i++) {
          let cardsQuery = `card (where: {cardpack_id : {_eq: ${state.selectedCardpacks[i]}}}) { id card_name card_hint point_value image_url}`;
          let cards = await apiCall(cardsQuery);
          let { card } = cards.data;
          for (let j = 0; j < card.length; j++) {
            await dispatch({ type: "ADD_CARD_TO_DECK", payload: card[j] });
          }
        }
      };
      const shuffleUp = () => {
        let newDeck = shuffle(state.deck);
        newDeck = shuffle(state.deck);
        dispatch({
          type: "SHUFFLED_DECK",
          payload: newDeck,
        });
      };
      const limitDeck = () => {
        dispatch({ type: "LIMIT_DECK" });
      };
      getDeck().then(shuffleUp).then(limitDeck);
    }
    setRule(state.roundCount);
  }, []);

  const setRule = (round: number) => {
    let rules: string[] = [];
    if (round === 1) {
      rules = [
        "Use any words as long as it is not shared with the card",
        "Points are at face value on the card",
      ];
      return setRules(rules);
    }
    if (round === 2) {
      rules = [
        "Use only 1 word",
        "CANNOT be shared with card name",
        "Points are calculated by multiplying the card point value by 2",
      ];
      return setRules(rules);
    }
    if (round === 3) {
      rules = [
        "Use actions ONLY",
        "NO WORDS",
        "Points are calculated multiplying the card point value by 3",
      ];
      return setRules(rules);
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
            <Text>{state.deck.length > 0 ? state.deck.length : ""}</Text>
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
