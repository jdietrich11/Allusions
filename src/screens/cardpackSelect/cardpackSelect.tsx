import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import { IStackScreenProps } from "../../library/StackScreenProps";
import { GlobalContext } from "../../context/globalContext";
import { Cardpack } from "../../helper/interfaces/interfaces";

import cardpackStyles from "./cardpackSelect.styles";

const CardpackSelectScreen: React.FC<IStackScreenProps> = (props) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { navigation } = props;
  const [cardpacks, setCardpacks] = useState<Cardpack[]>([]);

  useEffect(() => {
    let packs: Cardpack[] = [];
    let id = [1, 2, 3];
    for (let i = 0; i < id.length; i++) {
      let pack = state.cardpacks.filter(
        (cardpack: Cardpack) => cardpack.id === id[i]
      );
      packs = [...packs, pack[0]];
    }
    setCardpacks(packs);
  }, []);

  const changeSelected = (id: any) => {
    if (state.selectedCardpacks.includes(id)) {
      dispatch({
        type: "REMOVE_CARDPACK",
        payload: id,
      });
    }
    if (!state.selectedCardpacks.includes(id)) {
      dispatch({
        type: "SELECT_CARDPACK",
        payload: id,
      });
    }
  };

  const handleTurnTimeChange = (text: string) => {
    console.log(text);
    if (+text < 0) {
      alert("Number must be positive");
      return;
    }
    if (text.includes("-") || text.includes(",")) {
      alert("Not a number");
      return;
    }
    dispatch({
      type: "SET_TURN_TIME",
      payload: +text,
    });
  };

  return (
    <View style={cardpackStyles.container}>
      <View style={cardpackStyles.header}>
        <Pressable
          style={cardpackStyles.backBtn}
          onPress={() => navigation.navigate("teams")}
        >
          <Text style={cardpackStyles.backBtnText}>&larr;</Text>
        </Pressable>
      </View>
      <View style={cardpackStyles.cardpackSelectContainer}>
        <View style={cardpackStyles.cardpackSelectTitleContainer}>
          <Text style={cardpackStyles.cardpackSelectTitleText}>
            SELECT YOUR CARDPACKS!
          </Text>
        </View>
        <View style={cardpackStyles.avaliableCardpacks}>
          <ScrollView
            style={cardpackStyles.scrollView}
            contentContainerStyle={cardpackStyles.scrollViewContent}
          >
            {cardpacks.map((cardpack: Cardpack) => (
              <Pressable
                style={
                  !state.selectedCardpacks.includes(cardpack.id)
                    ? cardpackStyles.cardpack
                    : cardpackStyles.selectedCardpack
                }
                key={cardpack.id}
                onPress={() => changeSelected(cardpack.id)}
              >
                <Image
                  source={{ uri: cardpack.image_url }}
                  style={
                    !state.selectedCardpacks.includes(cardpack.id)
                      ? cardpackStyles.cardpackImage
                      : cardpackStyles.cardpackImageSelected
                  }
                />
                <View
                  style={
                    !state.selectedCardpacks.includes(cardpack.id)
                      ? cardpackStyles.cardpackTitleContainer
                      : cardpackStyles.selectedCardpackTitleContainer
                  }
                >
                  <Text
                    adjustsFontSizeToFit={true}
                    style={cardpackStyles.cardpackTitle}
                  >
                    {cardpack.cardpack_name}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={cardpackStyles.gameLengthContainer}>
        <View style={cardpackStyles.cardCounterContainer}>
          <View style={cardpackStyles.cardCounter}>
            <Pressable
              style={cardpackStyles.cardAdjustmentCounter}
              onPress={() => dispatch({ type: "DECREASE_CARD_COUNT" })}
            >
              <Text style={cardpackStyles.cardCounterText}>-</Text>
            </Pressable>
            <View style={cardpackStyles.cardCountBox}>
              <Text style={cardpackStyles.cardCount}>
                {state.cardCount + " cards"}
              </Text>
            </View>
            <Pressable
              style={cardpackStyles.cardAdjustmentCounter}
              onPress={() => dispatch({ type: "INCREASE_CARD_COUNT" })}
            >
              <Text style={cardpackStyles.cardCounterText}>+</Text>
            </Pressable>
          </View>
          <View style={cardpackStyles.cardpackCounter}>
            <Text style={cardpackStyles.cardCounterTextFrom}>
              {`from ${state.selectedCardpacks.length} cardpacks`}
            </Text>
          </View>
        </View>
        <View style={cardpackStyles.playtimeContainer}>
          <Text>{`~ ${state.cardCount} Minutes`}</Text>
        </View>
      </View>
      <View style={cardpackStyles.secondsPerTurnContainer}>
        <View style={cardpackStyles.secondsCounter}>
          <TextInput
            keyboardType="numeric"
            style={cardpackStyles.textInput}
            onChangeText={(text) => handleTurnTimeChange(text)}
            value={state.turnTime.toString()}
          />
          <Text style={cardpackStyles.secondTurnsText}>second turns</Text>
        </View>
        <Pressable
          onPress={() =>
            state.selectedCardpacks.length >= 1
              ? navigation.navigate("instruction")
              : alert("please select desired cardpacks first")
          }
          style={cardpackStyles.nextPageButton}
        >
          <Text style={cardpackStyles.nextPageButtonText}>&rarr;</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardpackSelectScreen;
