import React, { useEffect, useContext, useState } from "react";
import { Text, View, Pressable } from "react-native";

import apiCall from "../../helper/APi/api";
import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";
import { shuffle } from "../../helper/shuffle/shuffle";
import { rulesData } from "../../data/rules";
import SkipArea from "../../helper/skipArea/skipArea";
import DeckArea from "../../helper/deck/deck";

import instructionStyles from "./instruction.styles";
import ActivePlayer from "../../helper/activePlayer/activePlayer";

const InstructionScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation, route, name } = props;
  const { state, setDeck, reshuffleDeck } = useContext(GlobalContext);
  const [rules, setRules] = useState<string[]>([]);

  const getDeck = async (query: string) => {
    try {
      let cards = await apiCall(query);
      let { card } = cards.data;
      let newDeck = await shuffle(card);
      newDeck = shuffle(newDeck);
      newDeck = newDeck.slice(0, state.cardCount);
      setDeck(newDeck);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (state.turnCounter === 1) {
      let cardsQuery = `card (where: {cardpack_id : {_in: [${state.selectedCardpacks}]}}) { id card_name card_hint point_value image_url}`;
      getDeck(cardsQuery);
      setRule(state.roundCount);
    }
    if (state.roundCount === 2 || state.roundCount === 3) {
      // shuffle has played teams to normal teams again
      let newDeck = state.discardPile;
      newDeck = shuffle(newDeck);
      newDeck = shuffle(newDeck);
      reshuffleDeck(newDeck);
      setRule(state.roundCount);
    }
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
        <SkipArea />
        <View style={instructionStyles.playerRulesContainer}>
          <ActivePlayer name={name} navigation={navigation} route={route} />
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
        <DeckArea />
      </View>
      <View style={instructionStyles.scoreContainer}>
        <Text style={instructionStyles.scoreText}>drag to score</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("scores")}>
        <Text>TeamHasPlayed</Text>
      </Pressable>
    </View>
  );
};

export default InstructionScreen;
